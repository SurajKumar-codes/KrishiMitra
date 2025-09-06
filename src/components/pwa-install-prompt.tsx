import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, X } from 'lucide-react';

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the prompt
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showInstallPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <Card className="max-w-sm mx-auto shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">Install KrishiMitra</h3>
              <p className="text-xs text-gray-600 mb-3">
                Install our app for quick offline access to farming tools and recommendations.
              </p>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  onClick={handleInstallClick}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Install
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleDismiss}
                >
                  Later
                </Button>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={handleDismiss}
              className="p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}