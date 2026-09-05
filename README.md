# Web3 Templates

This project is a collection of small browser experiments for working with distributed data, wallet signatures, peer-to-peer connections, and verifiable computation. Each example is deliberately narrow: the interface exposes enough of the underlying system to make the data flow visible while keeping the code easy to follow.

The examples are most useful when a browser wallet, a local Ceramic node, or a reachable peer is available. Some paths are demonstration prototypes rather than production-ready applications, so live network behaviour still needs to be checked in the environment where they will be used.

## The examples

### IPFS files

The IPFS page starts a Helia node in the browser and exposes the basic file operations. Content can be added and read by CID, while the mutable-files and IPNS sections show how a local file view can be changed or named.

### IPFS files and a contract

The IPFS Files page combines browser storage with a Sepolia contract. A file is added to IPFS, its CID is recorded on-chain, and the contract can later be queried for the saved references.

### IPFS sync

The sync example treats a small local message database as a file. The database is written to IPFS, published through IPNS, and shared by storing the resulting reference in a contract. Other references can then be resolved and merged into the local view.

### EIP-712 referral signing

The EIP-712 page follows a referral code from a contract request through a typed wallet signature and back to a contract submission. The example is intended to make the signing domain, message, and transaction stages visible.

### zkSNARK proof

The zero-knowledge example takes two browser inputs and proves their product with `snarkjs`. The generated proof is sent to a Sepolia verifier contract, making the path from witness data to on-chain verification explicit.

### Libp2p

The Libp2p page starts a node, watches peer discovery, and subscribes to a shared pubsub topic. Two browser sessions can exchange peer IDs and messages when the selected transports and network conditions allow them to connect.

### Ceramic

The Ceramic page uses a wallet to authorize a ComposeDB session. It can query Basic Profiles and create a profile document against the configured Ceramic endpoint.

### Nostr

The Nostr page reads a small public feed from a set of relays and presents the notes as a simple timeline. It also keeps the public identity and relay-backed nature of the feed visible in the interface.

## Data flows

The examples use a few recurring patterns:

* browser state is used for the immediate interaction and display;
* IPFS and IPNS provide content-addressed and named references;
* contracts provide shared references and transaction history;
* wallets provide account access, authorization, and signatures;
* peer protocols and relays provide data from other browser or network participants.

The Action Console records these transitions as they happen. This is useful when a connection succeeds but a later step, such as routing a CID or submitting a transaction, needs closer inspection.

## Quick start

Install the dependencies and start the Next.js development server:

1. `npm i`
2. Copy `.env.example` to `.env.local` and configure it where required.
3. `npm run dev`

The application is configured for a static export. Wallet, Ceramic, IPFS, and peer-to-peer examples still depend on the services and browser capabilities available at runtime.

## External services

The wallet examples use Sepolia configuration. The Ceramic page expects a Ceramic node and a WalletConnect project ID. The zkSNARK page expects the proof assets in `public/assets`, and the IPFS and Libp2p pages depend on browser-compatible network access.

[snarkjs repository](https://github.com/iden3/snarkjs)
