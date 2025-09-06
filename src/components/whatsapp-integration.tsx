import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface WhatsAppIntegrationProps {
  language: string;
}

export function WhatsAppIntegration({ language }: WhatsAppIntegrationProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const translations = {
    en: {
      title: 'WhatsApp Integration',
      subtitle: 'Get farming tips and alerts on WhatsApp',
      enterPhone: 'Enter your WhatsApp number',
      connect: 'Connect WhatsApp',
      connected: 'Connected to WhatsApp',
      sendTest: 'Send Test Message',
      disconnect: 'Disconnect',
      testMessage: 'Hello from KrishiMitra! 🌱 Your farming assistant is now connected.',
      placeholder: '+91 9876543210'
    },
    hi: {
      title: 'व्हाट्सऐप एकीकरण',
      subtitle: 'व्हाट्सऐप पर खेती की जानकारी और अलर्ट पाएं',
      enterPhone: 'अपना व्हाट्सऐप नंबर डालें',
      connect: 'व्हाट्सऐप कनेक्ट करें',
      connected: 'व्हाट्सऐप से जुड़ा हुआ',
      sendTest: 'टेस्ट मैसेज भेजें',
      disconnect: 'डिस्कनेक्ट करें',
      testMessage: 'कृषिमित्र की तरफ से नमस्ते! 🌱 आपका कृषि सहायक अब कनेक्ट हो गया है।',
      placeholder: '+91 9876543210'
    }
  };

  const t = translations[language];

  const handleConnect = () => {
    if (!phoneNumber.trim()) {
      toast.error('Please enter a valid phone number');
      return;
    }

    // Simulate WhatsApp connection
    setTimeout(() => {
      setIsConnected(true);
      toast.success(language === 'hi' ? 'व्हाट्सऐप से जुड़ गया!' : 'Connected to WhatsApp!');
    }, 1000);
  };

  const handleSendTest = () => {
    // Simulate sending WhatsApp message
    const message = encodeURIComponent(t.testMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
    
    // In a real app, this would use WhatsApp Business API
    window.open(whatsappUrl, '_blank');
    toast.success(language === 'hi' ? 'टेस्ट मैसेज भेजा गया' : 'Test message sent');
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setPhoneNumber('');
    toast.success(language === 'hi' ? 'व्हाट्सऐप से डिस्कनेक्ट हो गया' : 'Disconnected from WhatsApp');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
          {t.title}
        </CardTitle>
        <p className="text-sm text-gray-600">{t.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isConnected ? (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t.enterPhone}</label>
              <div className="flex space-x-2">
                <Input
                  type="tel"
                  placeholder={t.placeholder}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleConnect}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t.connect}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-800 font-medium">{t.connected}</span>
              <span className="text-green-600 text-sm">{phoneNumber}</span>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleSendTest}
                variant="outline"
                className="flex-1"
              >
                <Send className="w-4 h-4 mr-2" />
                {t.sendTest}
              </Button>
              <Button 
                onClick={handleDisconnect}
                variant="destructive"
              >
                {t.disconnect}
              </Button>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <p>• {language === 'hi' ? 'मौसम अपडेट्स रोज सुबह 7 बजे' : 'Daily weather updates at 7 AM'}</p>
              <p>• {language === 'hi' ? 'फसल की सलाह हफ्ते में दो बार' : 'Crop recommendations twice a week'}</p>
              <p>• {language === 'hi' ? 'तत्काल कीट चेतावनी' : 'Instant pest alerts'}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}