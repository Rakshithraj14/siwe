export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: {
    address: string;
    chainId: number;
    ens?: string;
  } | null;
  error: string | null;
}

export interface SiweMessage {
  domain: string;
  address: string;
  statement: string;
  uri: string;
  version: string;
  chainId: number;
  nonce: string;
  issuedAt: string;
  expirationTime?: string;
  notBefore?: string;
  requestId?: string;
  resources?: string[];
}

export interface AuthContextType extends AuthState {
  signIn: () => Promise<void>;
  signOut: () => void;
  generateNonce: () => string;
}