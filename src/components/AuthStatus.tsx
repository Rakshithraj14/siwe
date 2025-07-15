import { useAccount } from 'wagmi';
import { useAuth } from '../hooks/useAuth';
import { CheckCircle, XCircle, Wallet, Shield } from 'lucide-react';

export const AuthStatus = () => {
  const { address, chainId } = useAccount();
  const { isAuthenticated, user } = useAuth();

  if (!address) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="text-gray-400" size={24} />
          <h2 className="text-xl font-semibold text-gray-800">Wallet Status</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <XCircle size={20} className="text-red-500" />
          <span>Not connected</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <Shield className="text-blue-600" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">Authentication Status</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle size={20} className="text-green-500" />
          <span className="text-gray-700">Wallet Connected</span>
        </div>
        
        <div className="pl-7">
          <p className="text-sm text-gray-600">
            <strong>Address:</strong> {address}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Chain ID:</strong> {chainId}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <CheckCircle size={20} className="text-green-500" />
          ) : (
            <XCircle size={20} className="text-red-500" />
          )}
          <span className="text-gray-700">
            {isAuthenticated ? 'Authenticated with SIWE' : 'Not authenticated'}
          </span>
        </div>

        {isAuthenticated && user && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-800 mb-2">Authenticated User</h3>
            <p className="text-sm text-green-700">
              <strong>Address:</strong> {user.address}
            </p>
            <p className="text-sm text-green-700">
              <strong>Chain ID:</strong> {user.chainId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};