import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Building, TrendingUp, Users, FileText, AlertTriangle, MapPin, Calendar, Target } from 'lucide-react';

interface GovernmentDashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function GovernmentDashboard({ user, language, activeTab, setActiveTab }: GovernmentDashboardProps) {
  const [selectedState, setSelectedState] = useState('punjab');
  const [advisory, setAdvisory] = useState('');

  const translations = {
    en: {
      dashboard: 'Policy Dashboard',
      analytics: 'Regional Analytics',
      advisories: 'Official Advisories',
      impact: 'Impact Assessment',
      totalFarmers: 'Total Farmers',
      activeSchemes: 'Active Schemes',
      advisoriesIssued: 'Advisories Issued',
      impactScore: 'Impact Score',
      cropAdoption: 'Crop Adoption Rates',
      yieldImprovement: 'Yield Improvement',
      sustainabilityMetrics: 'Sustainability Metrics',
      appUsage: 'App Usage Trends',
      issueAdvisory: 'Issue New Advisory',
      selectState: 'Select State',
      advisoryContent: 'Advisory Content',
      publishAdvisory: 'Publish Advisory',
      regionalTrends: 'Regional Trends',
      cropHealthStatus: 'Crop Health Status',
      environmentalImpact: 'Environmental Impact'
    },
    hi: {
      dashboard: 'नीति डैशबोर्ड',
      analytics: 'क्षेत्रीय विश्लेषण',
      advisories: 'आधिकारिक सलाह',
      impact: 'प्रभाव आकलन',
      totalFarmers: 'कुल किसान',
      activeSchemes: 'सक्रिय योजनाएं',
      advisoriesIssued: 'जारी सलाह',
      impactScore: 'प्रभाव स्कोर',
      cropAdoption: 'फसल अपनाने की दर',
      yieldImprovement: 'उत्पादन में सुधार',
      sustainabilityMetrics: 'स्थिरता मेट्रिक्स',
      appUsage: 'ऐप उपयोग ट्रेंड',
      issueAdvisory: 'नई सलाह जारी करें',
      selectState: 'राज्य चुनें',
      advisoryContent: 'सलाह सामग्री',
      publishAdvisory: 'सलाह प्रकाशित करें',
      regionalTrends: 'क्षेत्रीय ट्रेंड',
      cropHealthStatus: 'फसल स्वास्थ्य स्थिति',
      environmentalImpact: 'पर्यावरणीय प्रभाव'
    }
  };

  const t = translations[language];

  // Mock data for government dashboard
  const adoptionData = [
    { state: 'Punjab', adoption: 78, farmers: 25000 },
    { state: 'Gujarat', adoption: 65, farmers: 18000 },
    { state: 'Maharashtra', adoption: 82, farmers: 32000 },
    { state: 'Karnataka', adoption: 71, farmers: 22000 },
    { state: 'Tamil Nadu', adoption: 69, farmers: 19500 }
  ];

  const yieldData = [
    { month: 'Jan', improvement: 12 },
    { month: 'Feb', improvement: 15 },
    { month: 'Mar', improvement: 18 },
    { month: 'Apr', improvement: 22 },
    { month: 'May', improvement: 25 },
    { month: 'Jun', improvement: 28 }
  ];

  const cropHealthData = [
    { name: 'Healthy', value: 68, color: '#10b981' },
    { name: 'Warning', value: 22, color: '#f59e0b' },
    { name: 'Critical', value: 10, color: '#ef4444' }
  ];

  const sustainabilityMetrics = [
    { metric: language === 'hi' ? 'पानी की बचत' : 'Water Savings', value: 25, unit: '%' },
    { metric: language === 'hi' ? 'रसायन कमी' : 'Chemical Reduction', value: 18, unit: '%' },
    { metric: language === 'hi' ? 'कार्बन फुटप्रिंट' : 'Carbon Footprint', value: -15, unit: '%' },
    { metric: language === 'hi' ? 'मिट्टी स्वास्थ्य' : 'Soil Health', value: 32, unit: '%' }
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
                  {language === 'hi' ? 'स्वागत, सरकारी अधिकारी' : 'Welcome, Government Official'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Agriculture Department Dashboard</p>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                {language === 'hi' ? 'आधिकारिक' : 'Official'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">1.16M</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.totalFarmers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Target className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">28</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.activeSchemes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.advisoriesIssued}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">8.7</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.impactScore}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crop Adoption Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{t.cropAdoption}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="state" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="adoption" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Crop Health Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{t.cropHealthStatus}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={cropHealthData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cropHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Yield Improvement Trend */}
        <Card>
          <CardHeader>
            <CardTitle>{t.yieldImprovement}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="improvement" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sustainability Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>{t.sustainabilityMetrics}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.metric}</span>
                    <span className={`font-bold ${metric.value > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.value > 0 ? '+' : ''}{metric.value}{metric.unit}
                    </span>
                  </div>
                  <Progress 
                    value={Math.abs(metric.value)} 
                    className={`w-full ${metric.value > 0 ? 'text-green-600' : 'text-red-600'}`} 
                  />
                </div>
              ))}
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
              <TrendingUp className="w-5 h-5 mr-2" />
              {t.regionalTrends}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={t.selectState} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="all">All States</SelectItem>
                </SelectContent>
              </Select>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium mb-2">{language === 'hi' ? 'कुल पंजीकृत किसान' : 'Total Registered Farmers'}</h3>
                    <p className="text-2xl font-bold text-blue-600">25,467</p>
                    <p className="text-sm text-green-600">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium mb-2">{language === 'hi' ? 'सक्रिय उपयोगकर्ता' : 'Active Users'}</h3>
                    <p className="text-2xl font-bold text-green-600">18,934</p>
                    <p className="text-sm text-green-600">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium mb-2">{language === 'hi' ? 'फसल विश्लेषण' : 'Crop Analyses'}</h3>
                    <p className="text-2xl font-bold text-purple-600">5,678</p>
                    <p className="text-sm text-green-600">+15% from last month</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analytics Table */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'विस्तृत आंकड़े' : 'Detailed Statistics'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">{language === 'hi' ? 'राज्य' : 'State'}</th>
                    <th className="text-left p-3">{language === 'hi' ? 'किसान' : 'Farmers'}</th>
                    <th className="text-left p-3">{language === 'hi' ? 'अपनाव दर' : 'Adoption %'}</th>
                    <th className="text-left p-3">{language === 'hi' ? 'उत्पादन सुधार' : 'Yield Improvement'}</th>
                    <th className="text-left p-3">{language === 'hi' ? 'संतुष्टि स्कोर' : 'Satisfaction Score'}</th>
                  </tr>
                </thead>
                <tbody>
                  {adoptionData.map((data, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 font-medium">{data.state}</td>
                      <td className="p-3">{data.farmers.toLocaleString()}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <span>{data.adoption}%</span>
                          <Progress value={data.adoption} className="w-16 h-2" />
                        </div>
                      </td>
                      <td className="p-3 text-green-600">+{Math.floor(Math.random() * 30 + 10)}%</td>
                      <td className="p-3">
                        <Badge variant={Math.random() > 0.5 ? 'default' : 'secondary'}>
                          {(Math.random() * 2 + 3).toFixed(1)}/5
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'advisories') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              {t.issueAdvisory}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.selectState}</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t.selectState} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="all">All States</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'सलाह का प्रकार' : 'Advisory Type'}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'hi' ? 'प्रकार चुनें' : 'Select type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weather">{language === 'hi' ? 'मौसम' : 'Weather'}</SelectItem>
                    <SelectItem value="pest">{language === 'hi' ? 'कीट' : 'Pest'}</SelectItem>
                    <SelectItem value="scheme">{language === 'hi' ? 'योजना' : 'Scheme'}</SelectItem>
                    <SelectItem value="general">{language === 'hi' ? 'सामान्य' : 'General'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.advisoryContent}</label>
              <Textarea 
                placeholder={language === 'hi' ? 'आधिकारिक सलाह यहां लिखें...' : 'Type official advisory here...'}
                value={advisory}
                onChange={(e) => setAdvisory(e.target.value)}
                rows={6}
              />
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <FileText className="w-4 h-4 mr-2" />
              {t.publishAdvisory}
            </Button>
          </CardContent>
        </Card>

        {/* Recent Advisories */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'हाल की सलाह' : 'Recent Advisories'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: language === 'hi' ? 'मानसून पूर्व तैयारी' : 'Pre-Monsoon Preparation',
                  date: '2024-03-15',
                  type: 'Weather',
                  reach: '2.5M farmers'
                },
                {
                  title: language === 'hi' ? 'PM-KISAN योजना अपडेट' : 'PM-KISAN Scheme Update',
                  date: '2024-03-12',
                  type: 'Scheme',
                  reach: '1.8M farmers'
                }
              ].map((advisory, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{advisory.title}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{advisory.date}</span>
                        <Badge variant="outline">{advisory.type}</Badge>
                        <span>{advisory.reach}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {language === 'hi' ? 'संपादित करें' : 'Edit'}
                    </Button>
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