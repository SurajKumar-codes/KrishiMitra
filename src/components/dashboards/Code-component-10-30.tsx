import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Zap, TrendingUp, Users, Code, Lightbulb, BarChart3, Settings, Rocket } from 'lucide-react';

interface StartupDashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function StartupDashboard({ user, language, activeTab, setActiveTab }: StartupDashboardProps) {
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [testData, setTestData] = useState('');

  const translations = {
    en: {
      dashboard: 'Innovation Dashboard',
      integration: 'API Integration',
      analytics: 'User Analytics',
      testing: 'Product Testing',
      apiIntegrations: 'API Integrations',
      activeUsers: 'Active Users',
      feedbackScore: 'Feedback Score',
      testingPrograms: 'Testing Programs',
      integrateApi: 'Integrate New API',
      apiEndpoint: 'API Endpoint',
      apiKey: 'API Key',
      testIntegration: 'Test Integration',
      usageAnalytics: 'Usage Analytics',
      userFeedback: 'User Feedback',
      performanceMetrics: 'Performance Metrics',
      collaborationRequests: 'Collaboration Requests',
      apiDocumentation: 'API Documentation',
      developerTools: 'Developer Tools'
    },
    hi: {
      dashboard: 'इनोवेशन डैशबोर्ड',
      integration: 'API एकीकरण',
      analytics: 'उपयोगकर्ता विश्लेषण',
      testing: 'उत्पाद परीक्षण',
      apiIntegrations: 'API एकीकरण',
      activeUsers: 'सक्रिय उपयोगकर्ता',
      feedbackScore: 'फीडबैक स्कोर',
      testingPrograms: 'परीक्षण कार्यक्रम',
      integrateApi: 'नया API एकीकृत करें',
      apiEndpoint: 'API एंडपॉइंट',
      apiKey: 'API कुंजी',
      testIntegration: 'एकीकरण परीक्षण करें',
      usageAnalytics: 'उपयोग विश्लेषण',
      userFeedback: 'उपयोगकर्ता फीडबैक',
      performanceMetrics: 'प्रदर्शन मेट्रिक्स',
      collaborationRequests: 'सहयोग अनुरोध',
      apiDocumentation: 'API दस्तावेज़',
      developerTools: 'डेवलपर टूल्स'
    }
  };

  const t = translations[language];

  // Mock data for startup dashboard
  const usageData = [
    { month: 'Jan', users: 1200, apiCalls: 45000 },
    { month: 'Feb', users: 1800, apiCalls: 67000 },
    { month: 'Mar', users: 2400, apiCalls: 89000 },
    { month: 'Apr', users: 3200, apiCalls: 112000 },
    { month: 'May', users: 4100, apiCalls: 145000 },
    { month: 'Jun', users: 5200, apiCalls: 178000 }
  ];

  const feedbackData = [
    { category: 'Usability', score: 4.2, responses: 145 },
    { category: 'Performance', score: 3.8, responses: 132 },
    { category: 'Features', score: 4.5, responses: 167 },
    { category: 'Integration', score: 4.0, responses: 89 }
  ];

  const activeIntegrations = [
    {
      id: 1,
      name: 'Soil Sensor API',
      status: 'active',
      calls: '12.5K',
      uptime: '99.2%'
    },
    {
      id: 2,
      name: 'Weather Data API',
      status: 'active',
      calls: '8.9K',
      uptime: '98.7%'
    },
    {
      id: 3,
      name: 'Market Price API',
      status: 'testing',
      calls: '2.1K',
      uptime: '97.3%'
    }
  ];

  const collaborationRequests = [
    {
      id: 1,
      organization: 'Punjab Agricultural University',
      type: 'Research Partnership',
      status: 'pending',
      date: '2024-03-15'
    },
    {
      id: 2,
      organization: 'Maharashtra NGO Collective',
      type: 'Field Testing',
      status: 'approved',
      date: '2024-03-12'
    }
  ];

  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {language === 'hi' ? 'स्वागत, इनोवेटर्स' : 'Welcome, Innovators'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Agri-Tech Startup Dashboard</p>
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                {language === 'hi' ? 'बीटा' : 'Beta'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Code className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.apiIntegrations}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">5.2K</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.activeUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">4.2</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.feedbackScore}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Rocket className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.testingPrograms}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Analytics Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{t.usageAnalytics}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="users" fill="#3b82f6" />
                <Line yAxisId="right" type="monotone" dataKey="apiCalls" stroke="#f59e0b" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>{t.userFeedback}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feedbackData.map((feedback, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{feedback.category}</span>
                    <div className="text-right">
                      <span className="font-bold text-lg">{feedback.score}/5</span>
                      <p className="text-xs text-gray-500">{feedback.responses} responses</p>
                    </div>
                  </div>
                  <Progress value={(feedback.score / 5) * 100} className="w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Integrations */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'सक्रिय एकीकरण' : 'Active Integrations'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeIntegrations.map((integration) => (
                <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{integration.name}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span>{integration.calls} calls</span>
                      <span>{integration.uptime} uptime</span>
                    </div>
                  </div>
                  <Badge variant={integration.status === 'active' ? 'default' : 'secondary'}>
                    {integration.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'integration') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="w-5 h-5 mr-2" />
              {t.integrateApi}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{language === 'hi' ? 'API नाम' : 'API Name'}</label>
                <Input placeholder="Soil Sensor API" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{language === 'hi' ? 'API प्रकार' : 'API Type'}</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'hi' ? 'प्रकार चुनें' : 'Select type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sensor">{language === 'hi' ? 'सेंसर डेटा' : 'Sensor Data'}</SelectItem>
                    <SelectItem value="weather">{language === 'hi' ? 'मौसम' : 'Weather'}</SelectItem>
                    <SelectItem value="market">{language === 'hi' ? 'बाजार' : 'Market'}</SelectItem>
                    <SelectItem value="analytics">{language === 'hi' ? 'विश्लेषण' : 'Analytics'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.apiEndpoint}</label>
              <Input 
                placeholder="https://api.example.com/v1/data"
                value={apiEndpoint}
                onChange={(e) => setApiEndpoint(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.apiKey}</label>
              <Input 
                type="password"
                placeholder="Enter your API key"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'hi' ? 'परीक्षण डेटा' : 'Test Data'}
              </label>
              <Textarea 
                placeholder="Enter test data in JSON format..."
                value={testData}
                onChange={(e) => setTestData(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                {language === 'hi' ? 'कनेक्शन परीक्षण करें' : 'Test Connection'}
              </Button>
              <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                <Settings className="w-4 h-4 mr-2" />
                {language === 'hi' ? 'एकीकरण सहेजें' : 'Save Integration'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* API Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>{t.apiDocumentation}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">KrishiMitra API Endpoints</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">GET /api/v1/farmers</code>
                    <span className="text-gray-600 dark:text-gray-300">Get farmer data</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">POST /api/v1/analysis</code>
                    <span className="text-gray-600 dark:text-gray-300">Submit crop analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">GET /api/v1/recommendations</code>
                    <span className="text-gray-600 dark:text-gray-300">Get AI recommendations</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                {language === 'hi' ? 'पूर्ण दस्तावेज़ डाउनलोड करें' : 'Download Full Documentation'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'analytics') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              {t.performanceMetrics}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="apiCalls" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Collaboration Requests */}
        <Card>
          <CardHeader>
            <CardTitle>{t.collaborationRequests}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collaborationRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{request.organization}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{request.type}</p>
                      <p className="text-xs text-gray-500 mt-2">{request.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={request.status === 'approved' ? 'default' : 'secondary'}>
                        {request.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {language === 'hi' ? 'विवरण देखें' : 'View Details'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}