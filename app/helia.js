// Helia is modular, so this adapter exposes the small IPFS-Core-shaped surface
// used by the existing pages while keeping all Helia-specific wiring here.
import { CID } from 'multiformats/cid';

const asBytes = (value) => {
    if (value instanceof Uint8Array) return value;
    return new TextEncoder().encode(String(value));
};

const asUnixfsPath = (value) => {
    const path = String(value).replace(/^\/ipfs\//, '');
    const [cid, ...segments] = path.split('/');
    return { cid: CID.parse(cid), path: segments.join('/') || undefined };
};

const asIpfsPath = (value) => {
    const path = String(value);
    return path.startsWith('/ipfs/') ? path : `/ipfs/${path}`;
};

export async function createHeliaNode (existingHelia = null) {
    const [{ createHelia }, { unixfs }, { mfs }, { ipns }] = await Promise.all([
        import('helia'),
        import('@helia/unixfs'),
        import('@helia/mfs'),
        import('@helia/ipns')
    ]);

    // The React provider owns the Helia lifecycle. Keep the fallback for
    // consumers of this adapter outside React.
    const helia = existingHelia || createHelia({
        name: 'web3-templates',
        version: '0.1.0'
    });
    if (!existingHelia) await helia.start();
    const fs = unixfs(helia);
    const mutableFs = mfs(helia);
    const names = ipns(helia);
    const ipnsKeyName = 'web3-templates';

    return {
        helia,
        fs,
        mutableFs,
        names,
        // Helia 6 delegates lifecycle state to its libp2p node. Keep the
        // direct Helia check for versions that expose `status` themselves.
        isOnline: () => helia.status === 'started' || helia.libp2p?.status === 'started',
        async stop () {
            if (!existingHelia) await helia.stop();
        },
        async add (input) {
            const content = asBytes(input.content ?? '');
            const cid = input.path
                ? await fs.addFile({ path: input.path, content })
                : await fs.addBytes(content);
            return { cid };
        },
        cat (input) {
            const { cid, path } = asUnixfsPath(input);
            return fs.cat(cid, path == null ? undefined : { path });
        },
        ls (input) {
            const { cid, path } = asUnixfsPath(input);
            return fs.ls(cid, path == null ? undefined : { path });
        },
        files: {
            mkdir: (path, options) => mutableFs.mkdir(path, options),
            stat: (path, options) => mutableFs.stat(path, options),
            rm: (path, options) => mutableFs.rm(path, options),
            read: (path, options) => mutableFs.cat(path, options),
            write: (path, content, options) => mutableFs.writeBytes(asBytes(content), path, options),
            ls: (path, options) => mutableFs.ls(path, options)
        },
        name: {
            async publish (path) {
                return names.publish(ipnsKeyName, asIpfsPath(path));
            },
            async *resolve (path) {
                for await (const result of names.resolve(path)) {
                    yield result.value;
                }
            }
        }
    };
}
