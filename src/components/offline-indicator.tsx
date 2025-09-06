import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showOfflineMessage && isOnline) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-50 p-4">
      <Alert className={`max-w-md mx-auto ${isOnline ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
        <div className="flex items-center">
          {isOnline ? (
            <Wifi className="w-4 h-4 text-green-600 mr-2" />
          ) : (
            <WifiOff className="w-4 h-4 text-red-600 mr-2" />
          )}
          <AlertDescription className={isOnline ? 'text-green-800' : 'text-red-800'}>
            {isOnline 
              ? 'Connection restored. All features are now available.'
              : 'You are offline. Some features may be limited.'
            }
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}