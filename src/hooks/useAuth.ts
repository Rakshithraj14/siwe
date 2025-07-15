import { useState, useCallback } from 'react';
import { useEffect } from 'react';
import { useAccount, useSignMessage, useDisconnect } from 'wagmi';
import { SiweMessage } from 'siwe';
import { AuthState } from '../types/auth';

export const useAuth = () => {
  const { address, chainId } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null,
  });

  // Auto-trigger sign in when wallet connects
  useEffect(() => {
    if (address && chainId && !authState.isAuthenticated && !authState.isLoading) {
      signIn();
    }
  }, [address, chainId, authState.isAuthenticated, authState.isLoading]);

  const generateNonce = useCallback(() => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }, []);

  const signIn = useCallback(async () => {
    if (!address || !chainId) {
      setAuthState(prev => ({ ...prev, error: 'Please connect your wallet first' }));
      return;
    }

    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const nonce = generateNonce();
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chainId,
        nonce: nonce,
        issuedAt: new Date().toISOString(),
      });

      const messageString = message.prepareMessage();
      const signature = await signMessageAsync({ message: messageString });

      // In a real application, you would verify the signature on your backend
      // For this demo, we'll simulate successful authentication
      const verified = await verifySignature(messageString, signature, address);

      if (verified) {
        setAuthState({
          isAuthenticated: true,
          isLoading: false,
          user: {
            address: address,
            chainId: chainId,
          },
          error: null,
        });
      } else {
        throw new Error('Signature verification failed');
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Authentication failed',
      }));
    }
  }, [address, chainId, signMessageAsync, generateNonce]);

  const signOut = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      error: null,
    });
    disconnect();
  }, [disconnect]);

  return {
    ...authState,
    signIn,
    signOut,
    generateNonce,
  };
};

// Mock signature verification function
// In a real application, this would be done on your backend
const verifySignature = async (message: string, signature: string, address: string): Promise<boolean> => {
  try {
    // Simulate backend verification
    await new Promise(resolve => setTimeout(resolve, 500));
    return true; // In real implementation, verify the signature properly
  } catch (error) {
    console.error('Verification error:', error);
    return false;
  }
};