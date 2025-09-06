import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Progress } from './components/ui/progress';
import { Alert, AlertDescription } from './components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Textarea } from './components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Mic, MicOff, Camera, Upload, MessageCircle, Users, Leaf, Cloud, Bell, Settings, User, Home, Bot, Sun, Moon, CloudRain, Bug, Sprout, Activity, TrendingUp } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { OfflineIndicator } from './components/offline-indicator';
import { PWAInstallPrompt } from './components/pwa-install-prompt';
import { WhatsAppIntegration } from './components/whatsapp-integration';
import { AIRecommendationEngine } from './components/ai-recommendation-engine';
import { LandingPage } from './components/landing-page';
import { FarmerDashboard } from './components/dashboards/farmer-dashboard';
import { ExtensionOfficerDashboard } from './components/dashboards/extension-officer-dashboard';
import { GovernmentDashboard } from './components/dashboards/government-dashboard';
import { NGODashboard } from './components/dashboards/ngo-dashboard';
import { StartupDashboard } from './components/dashboards/startup-dashboard';
import { AdminDashboard } from './components/dashboards/admin-dashboard';

// Language translations
const translations = {
  en: {
    appName: 'KrishiMitra',
    tagline: 'Smart Farming Assistant',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    community: 'Community',
    cropAnalysis: 'Crop Analysis',
    settings: 'Settings',
    profile: 'Profile',
    recommendations: 'Recommendations',
    alerts: 'Alerts',
    voiceAssistant: 'Voice Assistant',
    chatbot: 'Chatbot',
    logout: 'Logout',
    welcome: 'Welcome',
    todaysWeather: "Today's Weather",
    personalizedSuggestions: 'Personalized Suggestions',
    recentAlerts: 'Recent Alerts',
    uploadImage: 'Upload Image',
    analyzing: 'Analyzing...',
    cropHealth: 'Crop Health',
    pestDetection: 'Pest Detection',
    recommendations: 'Recommendations',
    askQuestion: 'Ask a question...',
    listening: 'Listening...',
    startListening: 'Start Listening',
    stopListening: 'Stop Listening',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  hi: {
    appName: 'कृषिमित्र',
    tagline: 'स्मार्ट फार्मिंग सहायक',
    login: 'लॉगिन',
    register: 'पंजीकरण',
    dashboard: 'डैशबोर्ड',
    community: 'समुदाय',
    cropAnalysis: 'फसल विश्लेषण',
    settings: 'सेटिंग्स',
    profile: 'प्रोफ़ाइल',
    recommendations: 'सुझाव',
    alerts: 'अलर्ट',
    voiceAssistant: 'आवाज सहायक',
    chatbot: 'चैटबॉट',
    logout: 'लॉग आउट',
    welcome: 'स्वागत',
    todaysWeather: 'आज का मौसम',
    personalizedSuggestions: 'व्यक्तिगत सुझाव',
    recentAlerts: 'हाल की चेतावनी',
    uploadImage: 'छवि अपलोड करें',
    analyzing: 'विश्लेषण कर रहे हैं...',
    cropHealth: 'फसल स्वास्थ्य',
    pestDetection: 'कीट पहचान',
    recommendations: 'सुझाव',
    askQuestion: 'प्रश्न पूछें...',
    listening: 'सुन रहे हैं...',
    startListening: 'सुनना शुरू करें',
    stopListening: 'सुनना बंद करें',
    darkMode: 'डार्क मोड',
    lightMode: 'लाइट मोड'
  }
};

export default function App() {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isListening, setIsListening] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const t = translations[language];

  // Register service worker for PWA functionality
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  // Dark mode effect
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast.success(
      isDarkMode 
        ? (language === 'hi' ? 'लाइट मोड चालू' : 'Light mode enabled')
        : (language === 'hi' ? 'डार्क मोड चालू' : 'Dark mode enabled')
    );
  };

  // Mock user data
  const mockUser = {
    id: 1,
    name: 'राम कुमार',
    nameEn: 'Ram Kumar',
    phone: '+91 9876543210',
    location: 'Punjab, India',
    farmSize: '5 acres',
    crops: ['wheat', 'rice', 'sugarcane'],
    avatar: 'https://images.unsplash.com/photo-1623211268529-69c56e303312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyYWwlMjBmaWVsZHxlbnwxfHx8fDE3NTcxNzA3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  };

  // Mock recommendations
  const mockRecommendations = [
    {
      id: 1,
      type: 'crop',
      title: language === 'hi' ? 'गेहूं की बुआई का समय' : 'Wheat Sowing Time',
      description: language === 'hi' ? 'अगले सप्ताह गेहूं की बुआई के लिए आदर्श समय है' : 'Next week is ideal for wheat sowing',
      icon: Sprout,
      priority: 'high'
    },
    {
      id: 2,
      type: 'fertilizer',
      title: language === 'hi' ? 'नाइट्रोजन उर्वरक' : 'Nitrogen Fertilizer',
      description: language === 'hi' ? 'आपकी मिट्टी में नाइट्रोजन की कमी है' : 'Your soil needs nitrogen supplementation',
      icon: Leaf,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'pest',
      title: language === 'hi' ? 'कीट नियंत्रण' : 'Pest Control',
      description: language === 'hi' ? 'इस मौसम में अरहर में कीट का प्रकोप हो सकता है' : 'Watch for pest infestation in pigeon pea this season',
      icon: Bug,
      priority: 'low'
    }
  ];

  // Mock alerts
  const mockAlerts = [
    {
      id: 1,
      type: 'weather',
      message: language === 'hi' ? 'कल बारिश की संभावना है' : 'Rain expected tomorrow',
      time: '2 hours ago',
      icon: CloudRain
    },
    {
      id: 2,
      type: 'pest',
      message: language === 'hi' ? 'आपके क्षेत्र में कीट की रिपोर्ट' : 'Pest alert in your region',
      time: '4 hours ago',
      icon: Bug
    },
    {
      id: 3,
      type: 'market',
      message: language === 'hi' ? 'गेहूं की कीमत बढ़ी है' : 'Wheat prices have increased',
      time: '1 day ago',
      icon: Sun
    }
  ];

  // Mock community posts
  const mockCommunityPosts = [
    {
      id: 1,
      author: 'Suresh Patel',
      time: '2 hours ago',
      content: language === 'hi' ? 'मेरी गेहूं की फसल में पीले धब्बे दिख रहे हैं। कोई सुझाव?' : 'Yellow spots appearing on my wheat crop. Any suggestions?',
      likes: 12,
      replies: 5,
      image: 'https://images.unsplash.com/photo-1731832904917-95fa3d9d910e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9wJTIwZGlzZWFzZSUyMHBsYW50JTIwbGVhZnxlbnwxfHx8fDE3NTcxNzA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      author: 'Dr. Priya Sharma',
      time: '4 hours ago',
      expert: true,
      content: language === 'hi' ? 'इस मौसम में जैविक कीटनाशक का उपयोग करें। रासायनिक का कम उपयोग करें।' : 'Use organic pesticides this season. Reduce chemical usage.',
      likes: 34,
      replies: 12
    }
  ];

  const handleLogin = (userType: string, userData?: any) => {
    const loginUser = userData || { ...mockUser, userType };
    setUser(loginUser);
    toast.success(language === 'hi' ? 'सफलतापूर्वक लॉगिन हुए' : 'Successfully logged in');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
    toast.success(language === 'hi' ? 'सफलतापूर्वक लॉग आउट हुए' : 'Successfully logged out');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        cropHealth: 85,
        disease: language === 'hi' ? 'पत्ती का धब्बा रोग' : 'Leaf Spot Disease',
        confidence: 92,
        recommendations: [
          language === 'hi' ? 'कॉपर ऑक्सीक्लोराइड का छिड़काव करें' : 'Apply copper oxychloride spray',
          language === 'hi' ? 'प्रभावित पत्तियों को हटा दें' : 'Remove affected leaves',
          language === 'hi' ? 'ड्रेनेज में सुधार करें' : 'Improve drainage'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const startVoiceAssistant = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'hi' ? 'hi-IN' : 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast.info(t.listening);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setChatInput(transcript);
        handleChatSubmit(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      toast.error('Voice recognition not supported');
    }
  };

  const handleChatSubmit = (message = chatInput) => {
    if (!message.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: message, timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);

    // Mock AI response
    setTimeout(() => {
      const responses = language === 'hi' ? [
        'आपकी समस्या के लिए धन्यवाद। मैं आपकी मदद करूंगा।',
        'इस समस्या का समाधान जैविक उर्वरक का उपयोग करना है।',
        'मौसम के अनुसार आपको अगले सप्ताह बुआई करनी चाहिए।',
        'कृपया अपनी फसल की तस्वीर अपलोड करें ताकि मैं बेहतर सुझाव दे सकूं।'
      ] : [
        'Thank you for your question. I\'ll help you with that.',
        'The solution to this problem is using organic fertilizers.',
        'Based on weather conditions, you should sow next week.',
        'Please upload a photo of your crop for better recommendations.'
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = { id: Date.now() + 1, sender: 'bot', text: randomResponse, timestamp: new Date() };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);

    setChatInput('');
  };

  // Get navigation tabs based on user type
  const getNavigationTabs = () => {
    const baseNavItems = {
      farmer: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'analysis', label: t.cropAnalysis, icon: Camera },
        { id: 'community', label: t.community, icon: Users },
        { id: 'chatbot', label: t.chatbot, icon: Bot },
        { id: 'feedback', label: language === 'hi' ? 'फीडबैक' : 'Feedback', icon: MessageCircle },
        { id: 'profile', label: t.profile, icon: User }
      ],
      extension_officer: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'monitoring', label: language === 'hi' ? 'निगरानी' : 'Monitoring', icon: Users },
        { id: 'alerts', label: language === 'hi' ? 'अलर्ट' : 'Alerts', icon: Bell },
        { id: 'training', label: language === 'hi' ? 'प्रशिक्षण' : 'Training', icon: Upload },
        { id: 'profile', label: t.profile, icon: User }
      ],
      government: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'analytics', label: language === 'hi' ? 'विश्लेषण' : 'Analytics', icon: Camera },
        { id: 'advisories', label: language === 'hi' ? 'सलाह' : 'Advisories', icon: Bell },
        { id: 'impact', label: language === 'hi' ? 'प्रभाव' : 'Impact', icon: TrendingUp },
        { id: 'profile', label: t.profile, icon: User }
      ],
      ngo: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'programs', label: language === 'hi' ? 'कार्यक्रम' : 'Programs', icon: Users },
        { id: 'resources', label: language === 'hi' ? 'संसाधन' : 'Resources', icon: Upload },
        { id: 'impact', label: language === 'hi' ? 'प्रभाव' : 'Impact', icon: TrendingUp },
        { id: 'profile', label: t.profile, icon: User }
      ],
      startup: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'integration', label: language === 'hi' ? 'एकीकरण' : 'Integration', icon: Settings },
        { id: 'analytics', label: language === 'hi' ? 'विश्लेषण' : 'Analytics', icon: Camera },
        { id: 'testing', label: language === 'hi' ? 'परीक्षण' : 'Testing', icon: Upload },
        { id: 'profile', label: t.profile, icon: User }
      ],
      admin: [
        { id: 'dashboard', label: t.dashboard, icon: Home },
        { id: 'users', label: language === 'hi' ? 'उपयोगकर्ता' : 'Users', icon: Users },
        { id: 'content', label: language === 'hi' ? 'सामग्री' : 'Content', icon: Settings },
        { id: 'system', label: language === 'hi' ? 'सिस्टम' : 'System', icon: Activity },
        { id: 'profile', label: t.profile, icon: User }
      ]
    };

    return baseNavItems[user?.userType] || baseNavItems.farmer;
  };

  // Render dashboard based on user type
  const renderDashboard = () => {
    const commonProps = { user, language, activeTab, setActiveTab };
    
    switch (user?.userType) {
      case 'extension_officer':
        return <ExtensionOfficerDashboard {...commonProps} />;
      case 'government':
        return <GovernmentDashboard {...commonProps} />;
      case 'ngo':
        return <NGODashboard {...commonProps} />;
      case 'startup':
        return <StartupDashboard {...commonProps} />;
      case 'admin':
        return <AdminDashboard {...commonProps} />;
      default:
        return <FarmerDashboard {...commonProps} />;
    }
  };

  if (!user) {
    return <LandingPage language={language} onLogin={handleLogin} onLanguageChange={setLanguage} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <OfflineIndicator />
      <PWAInstallPrompt />
      {/* Header */}
      <header className="bg-card shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-600 mr-2" />
              <h1 className="text-xl font-bold text-green-800">{t.appName}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="hi">हि</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                title={isDarkMode ? t.lightMode : t.darkMode}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={startVoiceAssistant}
                className={isListening ? 'bg-red-100 text-red-600' : ''}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                {t.logout}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {getNavigationTabs().map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
}