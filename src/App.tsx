import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config/wagmi';
import { WalletButton } from './components/WalletButton';
import { AuthStatus } from './components/AuthStatus';
import { UserProfile } from './components/UserProfile';
import { Shield, Github, ExternalLink } from 'lucide-react';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center gap-3">
                    <Shield className="text-blue-600" size={32} />
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">SIWE Demo</h1>
                      <p className="text-xs text-gray-500">Sign-In with Ethereum</p>
                    </div>
                  </div>
                  <WalletButton />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ethereum Authentication Demo
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  This demo showcases Sign-In with Ethereum (SIWE) implementation using Wagmi and RainbowKit. 
                  Connect your wallet and sign in to experience secure, decentralized authentication.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <AuthStatus />
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">How it works</h3>
                    <ol className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                        <span>Connect your Ethereum wallet using RainbowKit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                        <span>Click "Sign In" to generate a SIWE message with nonce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                        <span>Sign the message with your wallet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">4</span>
                        <span>Signature is verified and you're authenticated</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-6">
                  <UserProfile />
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
                    <div className="space-y-3">
                      <a
                        href="https://wagmi.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Wagmi Documentation
                      </a>
                      <a
                        href="https://www.rainbowkit.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        RainbowKit Documentation
                      </a>
                      <a
                        href="https://eips.ethereum.org/EIPS/eip-4361"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        SIWE Specification (EIP-4361)
                      </a>
                      <a
                        href="https://github.com/spruceid/siwe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Github size={16} />
                        SIWE Library
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200 mt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center text-gray-600">
                  <p className="mb-2">Built with Wagmi, RainbowKit, and SIWE</p>
                  <p className="text-sm">A comprehensive guide to Ethereum authentication</p>
                </div>
              </div>
            </footer>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;