# SIWE Authentication Demo

This project demonstrates **Sign-In with Ethereum (SIWE)** authentication using [Wagmi](https://wagmi.sh/), [RainbowKit](https://www.rainbowkit.com/), and [SIWE](https://github.com/spruceid/siwe) in a React + TypeScript + Vite environment.

## Features

- Connect Ethereum wallets via RainbowKit
- Authenticate users with SIWE (EIP-4361)
- Nonce-based replay protection
- Cryptographic signature verification (mocked for demo)
- User profile and authentication status display
- TailwindCSS for styling

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

## Configuration

- Update your WalletConnect project ID in [`src/config/wagmi.ts`](src/config/wagmi.ts) for production use.

## Project Structure

- `src/` - Main source code
  - `components/` - UI components
  - `config/` - Wagmi/RainbowKit configuration
  - `hooks/` - Custom React hooks
  - `types/` - TypeScript types


## Resources

- [Wagmi Documentation](https://wagmi.sh/)
- [RainbowKit Documentation](https://www.rainbowkit.com/)
- [SIWE Specification (EIP-4361)](https://eips.ethereum.org/EIPS/eip-4361)
- [SIWE Library](https://github.com/spruceid/siwe)

---

Built with ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖
