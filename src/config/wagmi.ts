import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'SIWE Authentication Demo',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with your actual WalletConnect project ID
  chains: [mainnet, polygon, optimism, arbitrum, base, ...(process.env.NODE_ENV === 'development' ? [sepolia] : [])],
  ssr: false, // If your dApp uses server side rendering (SSR)
});