import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Leaf, Users, Building, Heart, Zap, Shield, User, ArrowRight, CheckCircle, Star } from 'lucide-react';

interface LandingPageProps {
  language: string;
  onLogin: (userType: string, userData?: any) => void;
  onLanguageChange: (lang: string) => void;
}

const userTypes = [
  {
    id: 'farmer',
    icon: User,
    titleEn: 'Small & Marginal Farmers',
    titleHi: 'छोटे और सीमांत किसान',
    descriptionEn: 'Get personalized farming guidance, crop analysis, and real-time weather alerts',
    descriptionHi: 'व्यक्तिगत कृषि मार्गदर्शन, फसल विश्लेषण और तत्काल मौसम अलर्ट प्राप्त करें',
    features: ['Crop Analysis', 'Weather Alerts', 'Voice Assistant', 'Market Prices'],
    featuresHi: ['फसल विश्लेषण', 'मौसम चेतावनी', 'आवाज सहायक', 'बाजार भाव'],
    color: 'bg-green-500',
    popular: true
  },
  {
    id: 'extension_officer',
    icon: Users,
    titleEn: 'Agricultural Extension Officers',
    titleHi: 'कृषि विस्तार अधिकारी',
    descriptionEn: 'Support farmers with expert advice, monitor regional trends, and push alerts',
    descriptionHi: 'किसानों को विशेषज्ञ सलाह दें, क्षेत्रीय रुझान देखें और अलर्ट भेजें',
    features: ['Expert Dashboard', 'Farmer Monitoring', 'Regional Alerts', 'Training Tools'],
    featuresHi: ['विशेषज्ञ डैशबोर्ड', 'किसान निगरानी', 'क्षेत्रीय अलर्ट', 'प्रशिक्षण उपकरण'],
    color: 'bg-blue-500'
  },
  {
    id: 'government',
    icon: Building,
    titleEn: 'Government Agriculture Departments',
    titleHi: 'सरकारी कृषि विभाग',
    descriptionEn: 'Access regional data, analyze adoption rates, and push policy initiatives',
    descriptionHi: 'क्षेत्रीय डेटा एक्सेस करें, अपनाव दर का विश्लेषण करें और नीति पहल करें',
    features: ['Regional Analytics', 'Policy Tools', 'Usage Metrics', 'Impact Assessment'],
    featuresHi: ['क्षेत्रीय विश्लेषण', 'नीति उपकरण', 'उपयोग मेट्रिक्स', 'प्रभाव आकलन'],
    color: 'bg-purple-500'
  },
  {
    id: 'ngo',
    icon: Heart,
    titleEn: 'NGOs & Cooperatives',
    titleHi: 'एनजीओ और सहकारी समितियां',
    descriptionEn: 'Help farmers onboard, track community impact, and organize training sessions',
    descriptionHi: 'किसानों को जोड़ने में मदद करें, सामुदायिक प्रभाव ट्रैक करें और प्रशिक्षण आयोजित करें',
    features: ['Community Management', 'Impact Tracking', 'Resource Distribution', 'Training Sessions'],
    featuresHi: ['समुदायिक प्रबंधन', 'प्रभाव ट्रैकिंग', 'संसाधन वितरण', 'प्रशिक्षण सत्र'],
    color: 'bg-pink-500'
  },
  {
    id: 'startup',
    icon: Zap,
    titleEn: 'Agri-Tech Startups',
    titleHi: 'एग्री-टेक स्टार्टअप',
    descriptionEn: 'Integrate your tools, analyze user feedback, and collaborate with experts',
    descriptionHi: 'अपने उपकरण एकीकृत करें, उपयोगकर्ता फीडबैक का विश्लेषण करें और विशेषज्ञों के साथ सहयोग करें',
    features: ['API Integration', 'User Analytics', 'Collaboration Tools', 'Product Testing'],
    featuresHi: ['API एकीकरण', 'उपयोगकर्ता विश्लेषण', 'सहयोग उपकरण', 'उत्पाद परीक्षण'],
    color: 'bg-orange-500'
  },
  {
    id: 'admin',
    icon: Shield,
    titleEn: 'Admins (Your Team)',
    titleHi: 'व्यवस्थापक (आपकी टीम)',
    descriptionEn: 'Manage users, moderate content, monitor system performance, and push updates',
    descriptionHi: 'उपयोगकर्ताओं का प्रबंधन करें, सामग्री की निगरानी करें, सिस्टम प्रदर्शन देखें और अपडेट करें',
    features: ['User Management', 'Content Moderation', 'System Monitoring', 'Feature Updates'],
    featuresHi: ['उपयोगकर्ता प्रबंधन', 'सामग्री निगरानी', 'सिस्टम निगरानी', 'फीचर अपडेट'],
    color: 'bg-red-500'
  }
];

export function LandingPage({ language, onLogin, onLanguageChange }: LandingPageProps) {
  const [selectedUserType, setSelectedUserType] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const translations = {
    en: {
      appName: 'KrishiMitra',
      tagline: 'Smart Farming Assistant for Everyone',
      subtitle: 'Empowering the entire agricultural ecosystem with AI-powered insights',
      chooseRole: 'Choose Your Role',
      phoneNumber: 'Phone Number',
      enterOtp: 'Enter 6-digit OTP',
      sendOtp: 'Send OTP',
      verifyLogin: 'Verify & Login',
      demoLogin: 'Demo Login - Click any user type to continue',
      features: 'Key Features',
      getStarted: 'Get Started',
      popular: 'Most Popular',
      trustedBy: 'Trusted by 10,000+ farmers across India',
      orContinueWith: 'Or continue as:'
    },
    hi: {
      appName: 'कृषिमित्र',
      tagline: 'सभी के लिए स्मार्ट फार्मिंग सहायक',
      subtitle: 'AI-संचालित अंतर्दृष्टि के साथ पूरे कृषि पारिस्थितिकी तंत्र को सशक्त बनाना',
      chooseRole: 'अपनी भूमिका चुनें',
      phoneNumber: 'फोन नंबर',
      enterOtp: '6-अंकीय OTP दर्ज करें',
      sendOtp: 'OTP भेजें',
      verifyLogin: 'सत्यापित करें और लॉगिन करें',
      demoLogin: 'डेमो लॉगिन - जारी रखने के लिए कोई भी उपयोगकर्ता प्रकार पर क्लिक करें',
      features: 'मुख्य विशेषताएं',
      getStarted: 'शुरू करें',
      popular: 'सबसे लोकप्रिय',
      trustedBy: 'भारत भर के 10,000+ किसानों द्वारा भरोसा',
      orContinueWith: 'या जारी रखें:'
    }
  };

  const t = translations[language];

  const handleUserTypeSelect = (userType: string) => {
    // For demo purposes, directly login with selected user type
    const mockUserData = {
      id: 1,
      name: language === 'hi' ? 'राम कुमार' : 'Ram Kumar',
      phone: '+91 9876543210',
      userType: userType,
      location: 'Punjab, India'
    };
    onLogin(userType, mockUserData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-600 mr-2" />
              <h1 className="text-2xl font-bold text-green-800">{t.appName}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={language} onValueChange={onLanguageChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.tagline}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-600 mb-12">
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-2 text-gray-600 dark:text-gray-300">{t.trustedBy}</span>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.chooseRole}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{t.demoLogin}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTypes.map((userType) => {
              const Icon = userType.icon;
              return (
                <Card 
                  key={userType.id}
                  className="relative cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-300"
                  onClick={() => handleUserTypeSelect(userType.id)}
                >
                  {userType.popular && (
                    <Badge className="absolute -top-2 left-4 bg-green-500 text-white">
                      {t.popular}
                    </Badge>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 rounded-full ${userType.color} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">
                          {language === 'hi' ? userType.titleHi : userType.titleEn}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === 'hi' ? userType.descriptionHi : userType.descriptionEn}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">{t.features}:</h4>
                      <ul className="space-y-2">
                        {(language === 'hi' ? userType.featuresHi : userType.features).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        {t.getStarted}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-xl font-bold text-green-800">{t.appName}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'hi' 
                ? 'प्रत्येक किसान को सफल बनाने के लिए प्रतिबद्ध' 
                : 'Committed to making every farmer successful'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}