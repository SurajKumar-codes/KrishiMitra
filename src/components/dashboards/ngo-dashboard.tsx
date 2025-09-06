import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Heart, Users, TrendingUp, MapPin, Calendar, Gift, BookOpen, Target } from 'lucide-react';

interface NGODashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function NGODashboard({ user, language, activeTab, setActiveTab }: NGODashboardProps) {
  const [programName, setProgramName] = useState('');
  const [impactReport, setImpactReport] = useState('');

  const translations = {
    en: {
      dashboard: 'Community Dashboard',
      programs: 'Training Programs',
      impact: 'Impact Tracking',
      resources: 'Resource Distribution',
      farmersOnboarded: 'Farmers Onboarded',
      trainingPrograms: 'Training Programs',
      resourcesDistributed: 'Resources Distributed',
      impactScore: 'Community Impact Score',
      createProgram: 'Create New Program',
      programName: 'Program Name',
      programDescription: 'Program Description',
      targetFarmers: 'Target Farmers',
      scheduleProgram: 'Schedule Program',
      distributionCenter: 'Distribution Center',
      resourceType: 'Resource Type',
      quantity: 'Quantity',
      scheduleDistribution: 'Schedule Distribution',
      recentActivities: 'Recent Activities',
      yieldImprovement: 'Yield Improvement',
      incomeIncrease: 'Income Increase',
      sustainabilityAdoption: 'Sustainability Adoption'
    },
    hi: {
      dashboard: 'सामुदायिक डैशबोर्ड',
      programs: 'प्रशिक्षण कार्यक्रम',
      impact: 'प्रभाव ट्रैकिंग',
      resources: 'संसाधन वितरण',
      farmersOnboarded: 'जुड़े किसान',
      trainingPrograms: 'प्रशिक्षण कार्यक्रम',
      resourcesDistributed: 'वितरित संसाधन',
      impactScore: 'सामुदायिक प्रभाव स्कोर',
      createProgram: 'नया कार्यक्रम बनाएं',
      programName: 'कार्यक्रम का नाम',
      programDescription: 'कार्यक्रम विवरण',
      targetFarmers: 'लक्षित किसान',
      scheduleProgram: 'कार्यक्रम निर्धारित करें',
      distributionCenter: 'वितरण केंद्र',
      resourceType: 'संसाधन प्रकार',
      quantity: 'मात्रा',
      scheduleDistribution: 'वितरण निर्धारित करें',
      recentActivities: 'हाल की गतिविधियां',
      yieldImprovement: 'उत्पादन में सुधार',
      incomeIncrease: 'आय वृद्धि',
      sustainabilityAdoption: 'स्थिरता अपनाव'
    }
  };

  const t = translations[language];

  // Mock data for NGO dashboard
  const impactMetrics = [
    { metric: t.yieldImprovement, value: 32, target: 40 },
    { metric: t.incomeIncrease, value: 28, target: 35 },
    { metric: t.sustainabilityAdoption, value: 45, target: 50 },
    { metric: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment', value: 38, target: 45 }
  ];

  const trainingPrograms = [
    {
      id: 1,
      name: language === 'hi' ? 'जैविक खेती प्रशिक्षण' : 'Organic Farming Training',
      date: '2024-03-20',
      participants: 45,
      location: 'Village Community Center',
      status: 'upcoming'
    },
    {
      id: 2,
      name: language === 'hi' ? 'महिला किसान सशक्तिकरण' : 'Women Farmer Empowerment',
      date: '2024-03-15',
      participants: 32,
      location: 'District Hall',
      status: 'completed'
    }
  ];

  const resourceDistribution = [
    {
      id: 1,
      resource: language === 'hi' ? 'बीज वितरण' : 'Seed Distribution',
      quantity: '500 kg',
      beneficiaries: 125,
      date: '2024-03-10',
      status: 'completed'
    },
    {
      id: 2,
      resource: language === 'hi' ? 'सिंचाई उपकरण' : 'Irrigation Equipment',
      quantity: '25 units',
      beneficiaries: 50,
      date: '2024-03-18',
      status: 'scheduled'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      activity: language === 'hi' ? '45 किसानों को जैविक खेती का प्रशिक्षण दिया' : 'Trained 45 farmers in organic farming',
      time: '2 hours ago'
    },
    {
      id: 2,
      activity: language === 'hi' ? '125 किसान परिवारों में बीज वितरित किए' : 'Distributed seeds to 125 farmer families',
      time: '1 day ago'
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
                  {language === 'hi' ? 'स्वागत, सामुदायिक साझेदार' : 'Welcome, Community Partner'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">NGO & Cooperative Dashboard</p>
              </div>
              <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                {language === 'hi' ? 'सक्रिय' : 'Active'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-pink-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.farmersOnboarded}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.trainingPrograms}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Gift className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">5,678</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.resourcesDistributed}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Target className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">8.2</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.impactScore}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'प्रभाव मेट्रिक्स' : 'Impact Metrics'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.metric}</span>
                    <span className="font-bold">{metric.value}% / {metric.target}%</span>
                  </div>
                  <Progress value={(metric.value / metric.target) * 100} className="w-full" />
                  <p className="text-xs text-gray-500">
                    {metric.target - metric.value}% to target
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Programs Overview */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'आगामी प्रशिक्षण कार्यक्रम' : 'Upcoming Training Programs'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingPrograms.filter(p => p.status === 'upcoming').map((program) => (
                <div key={program.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{program.name}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {program.date}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.participants} participants
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {program.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant="default">
                      {language === 'hi' ? 'आगामी' : 'Upcoming'}
                    </Badge>
                  </div>
                </div>
              ))}
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
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
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

  if (activeTab === 'programs') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {t.createProgram}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.programName}</label>
                <Input 
                  placeholder={language === 'hi' ? 'कार्यक्रम का नाम दर्ज करें' : 'Enter program name'}
                  value={programName}
                  onChange={(e) => setProgramName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.targetFarmers}</label>
                <Input 
                  type="number"
                  placeholder="50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.programDescription}</label>
              <Textarea 
                placeholder={language === 'hi' ? 'कार्यक्रम का विवरण...' : 'Program description...'}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'तारीख' : 'Date'}
                </label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'स्थान' : 'Location'}
                </label>
                <Input placeholder={language === 'hi' ? 'कार्यक्रम स्थान' : 'Program location'} />
              </div>
            </div>

            <Button className="w-full bg-pink-600 hover:bg-pink-700">
              <Calendar className="w-4 h-4 mr-2" />
              {t.scheduleProgram}
            </Button>
          </CardContent>
        </Card>

        {/* All Training Programs */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'सभी प्रशिक्षण कार्यक्रम' : 'All Training Programs'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{program.name}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{program.date}</span>
                        <span>{program.participants} participants</span>
                        <span>{program.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={program.status === 'completed' ? 'default' : 'secondary'}>
                        {program.status === 'completed' 
                          ? (language === 'hi' ? 'पूर्ण' : 'Completed')
                          : (language === 'hi' ? 'आगामी' : 'Upcoming')
                        }
                      </Badge>
                      <Button variant="outline" size="sm">
                        {language === 'hi' ? 'संपादित करें' : 'Edit'}
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

  if (activeTab === 'resources') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="w-5 h-5 mr-2" />
              {language === 'hi' ? 'नया वितरण निर्धारित करें' : 'Schedule New Distribution'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.resourceType}</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'hi' ? 'संसाधन चुनें' : 'Select resource'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">{language === 'hi' ? 'बीज' : 'Seeds'}</SelectItem>
                    <SelectItem value="fertilizer">{language === 'hi' ? 'उर्वरक' : 'Fertilizer'}</SelectItem>
                    <SelectItem value="equipment">{language === 'hi' ? 'उपकरण' : 'Equipment'}</SelectItem>
                    <SelectItem value="tools">{language === 'hi' ? 'औजार' : 'Tools'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.quantity}</label>
                <Input placeholder="100 kg / 50 units" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t.distributionCenter}</label>
                <Input placeholder={language === 'hi' ? 'वितरण केंद्र स्थान' : 'Distribution center location'} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'वितरण तारीख' : 'Distribution Date'}
                </label>
                <Input type="date" />
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Gift className="w-4 h-4 mr-2" />
              {t.scheduleDistribution}
            </Button>
          </CardContent>
        </Card>

        {/* Resource Distribution History */}
        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'वितरण इतिहास' : 'Distribution History'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resourceDistribution.map((distribution) => (
                <div key={distribution.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{distribution.resource}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>{distribution.quantity}</span>
                        <span>{distribution.beneficiaries} beneficiaries</span>
                        <span>{distribution.date}</span>
                      </div>
                    </div>
                    <Badge variant={distribution.status === 'completed' ? 'default' : 'secondary'}>
                      {distribution.status === 'completed' 
                        ? (language === 'hi' ? 'पूर्ण' : 'Completed')
                        : (language === 'hi' ? 'निर्धारित' : 'Scheduled')
                      }
                    </Badge>
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