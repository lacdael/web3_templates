// Helia's default libp2p configuration includes the optional HTTP service.
// The service is not used by these pages; keeping a tiny browser-safe factory
// avoids pulling the Node/undici implementation into Next's client bundle.
export const http = () => () => ({
    async start () {},
    async stop () {}
});
