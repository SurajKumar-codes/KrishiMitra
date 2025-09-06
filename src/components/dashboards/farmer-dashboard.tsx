import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Sprout, Bug, CloudRain, Sun, Camera, Upload, Mic, MicOff, MessageCircle, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FarmerDashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function FarmerDashboard({ user, language, activeTab, setActiveTab }: FarmerDashboardProps) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState('');

  const translations = {
    en: {
      dashboard: 'Dashboard',
      cropAnalysis: 'Crop Analysis',
      community: 'Community',
      feedback: 'Feedback',
      welcome: 'Welcome',
      todaysWeather: "Today's Weather",
      personalizedSuggestions: 'Personalized Suggestions',
      recentAlerts: 'Recent Alerts',
      activeCrops: 'Active Crops',
      newAlerts: 'New Alerts',
      communityPosts: 'Community Posts',
      uploadImage: 'Upload Image',
      analyzing: 'Analyzing...',
      cropHealth: 'Crop Health',
      recommendations: 'Recommendations',
      marketPrices: 'Market Prices',
      submitFeedback: 'Submit Feedback',
      feedbackPlaceholder: 'Share your experience with the app...'
    },
    hi: {
      dashboard: 'डैशबोर्ड',
      cropAnalysis: 'फसल विश्लेषण',
      community: 'समुदाय',
      feedback: 'फीडबैक',
      welcome: 'स्वागत',
      todaysWeather: 'आज का मौसम',
      personalizedSuggestions: 'व्यक्तिगत सुझाव',
      recentAlerts: 'हाल की चेतावनी',
      activeCrops: 'सक्रिय फसलें',
      newAlerts: 'नई अलर्ट',
      communityPosts: 'सामुदायिक पोस्ट',
      uploadImage: 'छवि अपलोड करें',
      analyzing: 'विश्लेषण कर रहे हैं...',
      cropHealth: 'फसल स्वास्थ्य',
      recommendations: 'सुझाव',
      marketPrices: 'बाजार भाव',
      submitFeedback: 'फीडबैक सबमिट करें',
      feedbackPlaceholder: 'ऐप के साथ अपना अनुभव साझा करें...'
    }
  };

  const t = translations[language];

  // Mock data for farmer
  const mockRecommendations = [
    {
      id: 1,
      type: 'crop',
      title: language === 'hi' ? 'गेहूं की बुआई का समय' : 'Wheat Sowing Time',
      description: language === 'hi' ? 'अगले सप्ताह गेहूं की बुआई के लिए आदर्श समय है' : 'Next week is ideal for wheat sowing',
      priority: 'high'
    },
    {
      id: 2,
      type: 'fertilizer',
      title: language === 'hi' ? 'नाइट्रोजन उर्वरक' : 'Nitrogen Fertilizer',
      description: language === 'hi' ? 'आपकी मिट्टी में नाइट्रोजन की कमी है' : 'Your soil needs nitrogen supplementation',
      priority: 'medium'
    }
  ];

  const mockAlerts = [
    {
      id: 1,
      message: language === 'hi' ? 'कल बारिश की संभावना है' : 'Rain expected tomorrow',
      time: '2 hours ago',
      icon: CloudRain
    },
    {
      id: 2,
      message: language === 'hi' ? 'गेहूं की कीमत बढ़ी है' : 'Wheat prices have increased',
      time: '1 day ago',
      icon: TrendingUp
    }
  ];

  const marketPrices = [
    { crop: language === 'hi' ? 'गेहूं' : 'Wheat', price: '₹2,150/quintal', change: '+5%', trend: 'up' },
    { crop: language === 'hi' ? 'चावल' : 'Rice', price: '₹1,850/quintal', change: '-2%', trend: 'down' },
    { crop: language === 'hi' ? 'मक्का' : 'Maize', price: '₹1,650/quintal', change: '+3%', trend: 'up' }
  ];

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
          language === 'hi' ? 'प्रभावित पत्तियों को हटा दें' : 'Remove affected leaves'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.welcome}, {user.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{user.location} • 5 acres</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Sun className="w-5 h-5" />
                  <span>25°C • Sunny</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Sprout className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.activeCrops}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CloudRain className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.newAlerts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageCircle className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.communityPosts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>{t.personalizedSuggestions}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecommendations.map((rec) => (
                <div key={rec.id} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className={`p-2 rounded-full ${
                    rec.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{rec.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{rec.description}</p>
                  </div>
                  <Badge variant={rec.priority === 'high' ? 'destructive' : 'default'}>
                    {rec.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Prices */}
        <Card>
          <CardHeader>
            <CardTitle>{t.marketPrices}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketPrices.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="font-medium">{item.crop}</span>
                  <div className="text-right">
                    <p className="font-bold">{item.price}</p>
                    <p className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>{t.recentAlerts}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAlerts.map((alert) => {
                const Icon = alert.icon;
                return (
                  <div key={alert.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'analysis') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="w-5 h-5 mr-2" />
              {t.cropAnalysis}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">{t.uploadImage}</p>
                  <Button className="mt-2" type="button">
                    {language === 'hi' ? 'छवि चुनें' : 'Choose Image'}
                  </Button>
                </label>
              </div>

              {uploadedImage && (
                <div className="space-y-4">
                  <div className="text-center">
                    <ImageWithFallback 
                      src={uploadedImage} 
                      alt="Uploaded crop" 
                      className="max-w-md mx-auto rounded-lg"
                    />
                  </div>

                  {isAnalyzing && (
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
                          <span>{t.analyzing}</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {analysisResult && !isAnalyzing && (
                    <Card>
                      <CardHeader>
                        <CardTitle>{language === 'hi' ? 'विश्लेषण परिणाम' : 'Analysis Results'}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span>{t.cropHealth}</span>
                            <span>{analysisResult.cropHealth}%</span>
                          </div>
                          <Progress value={analysisResult.cropHealth} className="w-full" />
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">{language === 'hi' ? 'पहचान की गई समस्या' : 'Detected Issue'}</h4>
                          <p className="text-red-600">{analysisResult.disease}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {language === 'hi' ? 'विश्वसनीयता' : 'Confidence'}: {analysisResult.confidence}%
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">{t.recommendations}</h4>
                          <ul className="space-y-1">
                            {analysisResult.recommendations.map((rec, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-sm">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'feedback') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.feedback}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder={t.feedbackPlaceholder}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={6}
            />
            <Button className="w-full bg-green-600 hover:bg-green-700">
              {t.submitFeedback}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}