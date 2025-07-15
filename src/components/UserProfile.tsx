import { useAuth } from '../hooks/useAuth';
import { User, Shield, CheckCircle } from 'lucide-react';

export const UserProfile = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-gray-400" size={24} />
          <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
        </div>
        <div className="text-center py-8">
          <Shield className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-600">Please sign in with Ethereum to view your profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <User className="text-blue-600" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={20} className="text-green-500" />
          <span className="text-green-700 font-medium">Authenticated</span>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-medium text-blue-800 mb-3">Profile Information</h3>
          
          <div className="space-y-2">
            <div>
              <label className="text-sm font-medium text-blue-700">Ethereum Address</label>
              <p className="text-sm text-blue-600 font-mono bg-blue-100 p-2 rounded">
                {user.address}
              </p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-blue-700">Chain ID</label>
              <p className="text-sm text-blue-600 font-mono bg-blue-100 p-2 rounded">
                {user.chainId}
              </p>
            </div>
            
            <div>
              <label className="text-sm font-medium text-blue-700">Authentication Method</label>
              <p className="text-sm text-blue-600 bg-blue-100 p-2 rounded">
                Sign-In with Ethereum (SIWE)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-800 mb-2">Security Features</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Cryptographic signature verification</li>
            <li>• Nonce-based replay protection</li>
            <li>• Domain binding for security</li>
            <li>• Wallet ownership verification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};