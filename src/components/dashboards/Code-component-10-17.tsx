import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, AlertTriangle, TrendingUp, MapPin, FileText, Send, Eye, MessageSquare, Play } from 'lucide-react';

interface ExtensionOfficerDashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ExtensionOfficerDashboard({ user, language, activeTab, setActiveTab }: ExtensionOfficerDashboardProps) {
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [response, setResponse] = useState('');

  const translations = {
    en: {
      dashboard: 'Expert Dashboard',
      monitoring: 'Farmer Monitoring',
      alerts: 'Push Alerts',
      training: 'Training Materials',
      farmerQueries: 'Farmer Queries',
      regionalData: 'Regional Data',
      sendAlert: 'Send Regional Alert',
      alertMessage: 'Alert Message',
      selectRegion: 'Select Region',
      sendAlertBtn: 'Send Alert',
      totalFarmers: 'Total Farmers',
      activeQueries: 'Active Queries',
      alertsSent: 'Alerts Sent',
      trainingUploads: 'Training Uploads',
      respondToQuery: 'Respond to Query',
      uploadTraining: 'Upload Training Material',
      recentActivities: 'Recent Activities'
    },
    hi: {
      dashboard: 'विशेषज्ञ डैशबोर्ड',
      monitoring: 'किसान निगरानी',
      alerts: 'अलर्ट भेजें',
      training: 'प्रशिक्षण सामग्री',
      farmerQueries: 'किसान प्रश्न',
      regionalData: 'क्षेत्रीय डेटा',
      sendAlert: 'क्षेत्रीय अलर्ट भेजें',
      alertMessage: 'अलर्ट संदेश',
      selectRegion: 'क्षेत्र चुनें',
      sendAlertBtn: 'अलर्ट भेजें',
      totalFarmers: 'कुल किसान',
      activeQueries: 'सक्रिय प्रश्न',
      alertsSent: 'भेजे गए अलर्ट',
      trainingUploads: 'प्रशिक्षण अपलोड',
      respondToQuery: 'प्रश्न का उत्तर दें',
      uploadTraining: 'प्रशिक्षण सामग्री अपलोड करें',
      recentActivities: 'हाल की गतिविधियां'
    }
  };

  const t = translations[language];

  // Mock data for extension officer
  const farmerQueries = [
    {
      id: 1,
      farmer: 'Raj Kumar',
      query: language === 'hi' ? 'मेरे गेहूं में पीले धब्बे दिख रहे हैं' : 'Yellow spots appearing on my wheat',
      time: '2 hours ago',
      priority: 'high',
      region: 'Punjab'
    },
    {
      id: 2,
      farmer: 'Suresh Patel',
      query: language === 'hi' ? 'कौन सी खाद डालनी चाहिए?' : 'Which fertilizer should I use?',
      time: '4 hours ago',
      priority: 'medium',
      region: 'Gujarat'
    }
  ];

  const regionalStats = [
    { region: 'Punjab', farmers: 2500, queries: 45, alerts: 12 },
    { region: 'Gujarat', farmers: 1800, queries: 32, alerts: 8 },
    { region: 'Maharashtra', farmers: 3200, queries: 67, alerts: 15 }
  ];

  const recentActivities = [
    { 
      id: 1, 
      activity: language === 'hi' ? 'कीट नियंत्रण पर प्रशिक्षण वीडियो अपलोड किया' : 'Uploaded training video on pest control',
      time: '1 hour ago'
    },
    {
      id: 2,
      activity: language === 'hi' ? 'पंजाब में मौसम चेतावनी भेजी' : 'Sent weather alert to Punjab region',
      time: '3 hours ago'
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
                  {language === 'hi' ? 'स्वागत, विशेषज्ञ' : 'Welcome, Expert'} {user.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Agricultural Extension Officer</p>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {language === 'hi' ? 'सक्रिय' : 'Active'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">7,500</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.totalFarmers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">144</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.activeQueries}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">35</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.alertsSent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.trainingUploads}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Stats */}
        <Card>
          <CardHeader>
            <CardTitle>{t.regionalData}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">{language === 'hi' ? 'क्षेत्र' : 'Region'}</th>
                    <th className="text-left p-2">{t.totalFarmers}</th>
                    <th className="text-left p-2">{language === 'hi' ? 'प्रश्न' : 'Queries'}</th>
                    <th className="text-left p-2">{language === 'hi' ? 'अलर्ट' : 'Alerts'}</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalStats.map((stat, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 font-medium">{stat.region}</td>
                      <td className="p-2">{stat.farmers.toLocaleString()}</td>
                      <td className="p-2">{stat.queries}</td>
                      <td className="p-2">{stat.alerts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>{t.recentActivities}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.activity}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'monitoring') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {t.farmerQueries}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farmerQueries.map((query) => (
                <div key={query.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium">{query.farmer}</h4>
                        <Badge variant="outline">{query.region}</Badge>
                        <Badge variant={query.priority === 'high' ? 'destructive' : 'default'}>
                          {query.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{query.query}</p>
                      <p className="text-sm text-gray-500 mt-1">{query.time}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-3 border-t">
                    <Textarea 
                      placeholder={language === 'hi' ? 'अपना उत्तर यहां लिखें...' : 'Write your response here...'}
                      value={response}
                      onChange={(e) => setResponse(e.target.value)}
                      rows={3}
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        {language === 'hi' ? 'विवरण देखें' : 'View Details'}
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4 mr-2" />
                        {t.respondToQuery}
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

  if (activeTab === 'alerts') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              {t.sendAlert}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.selectRegion}</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder={t.selectRegion} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="all">All Regions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.alertMessage}</label>
              <Textarea 
                placeholder={language === 'hi' ? 'अपना अलर्ट संदेश यहां लिखें...' : 'Type your alert message here...'}
                value={alertMessage}
                onChange={(e) => setAlertMessage(e.target.value)}
                rows={4}
              />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Send className="w-4 h-4 mr-2" />
              {t.sendAlertBtn}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'training') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              {t.uploadTraining}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'hi' ? 'प्रशिक्षण सामग्री का प्रकार' : 'Training Material Type'}
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'hi' ? 'प्रकार चुनें' : 'Select type'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">{language === 'hi' ? 'वीडियो' : 'Video'}</SelectItem>
                  <SelectItem value="document">{language === 'hi' ? 'दस्तावेज़' : 'Document'}</SelectItem>
                  <SelectItem value="infographic">{language === 'hi' ? 'इन्फोग्राफिक' : 'Infographic'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'hi' ? 'शीर्षक' : 'Title'}
              </label>
              <Input placeholder={language === 'hi' ? 'प्रशिक्षण सामग्री का शीर्षक' : 'Training material title'} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'hi' ? 'विवरण' : 'Description'}
              </label>
              <Textarea 
                placeholder={language === 'hi' ? 'सामग्री का विवरण...' : 'Description of the material...'}
                rows={3}
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'hi' ? 'फाइल अपलोड करने के लिए क्लिक करें' : 'Click to upload file'}
              </p>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Play className="w-4 h-4 mr-2" />
              {language === 'hi' ? 'अपलोड करें' : 'Upload'}
            </Button>
          </CardContent>
        </Card>

        {/* Recent Training Materials */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'हाल की प्रशिक्षण सामग्री' : 'Recent Training Materials'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: language === 'hi' ? 'कीट नियंत्रण तकनीक' : 'Pest Control Techniques', type: 'Video', views: 245 },
                { title: language === 'hi' ? 'जैविक खाद का उपयोग' : 'Organic Fertilizer Usage', type: 'Document', views: 189 },
                { title: language === 'hi' ? 'मिट्टी परीक्षण गाइड' : 'Soil Testing Guide', type: 'Infographic', views: 156 }
              ].map((material, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{material.title}</h4>
                    <p className="text-sm text-gray-500">{material.type} • {material.views} views</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    {language === 'hi' ? 'देखें' : 'View'}
                  </Button>
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