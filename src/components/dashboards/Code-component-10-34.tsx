import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Shield, Users, Activity, AlertTriangle, Settings, Database, Bell, Lock, Eye, Trash2 } from 'lucide-react';

interface AdminDashboardProps {
  user: any;
  language: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function AdminDashboard({ user, language, activeTab, setActiveTab }: AdminDashboardProps) {
  const [selectedUserType, setSelectedUserType] = useState('');
  const [announcement, setAnnouncement] = useState('');

  const translations = {
    en: {
      dashboard: 'System Dashboard',
      users: 'User Management',
      content: 'Content Moderation',
      system: 'System Monitoring',
      totalUsers: 'Total Users',
      systemUptime: 'System Uptime',
      activeReports: 'Active Reports',
      serverHealth: 'Server Health',
      userGrowth: 'User Growth',
      contentReports: 'Content Reports',
      systemAlerts: 'System Alerts',
      createAnnouncement: 'Create Announcement',
      announcementText: 'Announcement Text',
      publishAnnouncement: 'Publish Announcement',
      moderateContent: 'Moderate Content',
      userStatistics: 'User Statistics',
      systemPerformance: 'System Performance',
      recentActivities: 'Recent Activities',
      manageUsers: 'Manage Users',
      contentModerationQueue: 'Content Moderation Queue'
    },
    hi: {
      dashboard: 'सिस्टम डैशबोर्ड',
      users: 'उपयोगकर्ता प्रबंधन',
      content: 'सामग्री निगरानी',
      system: 'सिस्टम निगरानी',
      totalUsers: 'कुल उपयोगकर्ता',
      systemUptime: 'सिस्टम अपटाइम',
      activeReports: 'सक्रिय रिपोर्ट',
      serverHealth: 'सर्वर स्वास्थ्य',
      userGrowth: 'उपयोगकर्ता वृद्धि',
      contentReports: 'सामग्री रिपोर्ट',
      systemAlerts: 'सिस्टम अलर्ट',
      createAnnouncement: 'घोषणा बनाएं',
      announcementText: 'घोषणा टेक्स्ट',
      publishAnnouncement: 'घोषणा प्रकाशित करें',
      moderateContent: 'सामग्री संयमित करें',
      userStatistics: 'उपयोगकर्ता आंकड़े',
      systemPerformance: 'सिस्टम प्रदर्शन',
      recentActivities: 'हाल की गतिविधियां',
      manageUsers: 'उपयोगकर्ता प्रबंधन',
      contentModerationQueue: 'सामग्री निगरानी कतार'
    }
  };

  const t = translations[language];

  // Mock data for admin dashboard
  const userGrowthData = [
    { month: 'Jan', farmers: 15000, officers: 250, government: 45, ngo: 120, startup: 35, admin: 12 },
    { month: 'Feb', farmers: 22000, officers: 310, government: 52, ngo: 145, startup: 42, admin: 15 },
    { month: 'Mar', farmers: 35000, officers: 380, government: 58, ngo: 178, startup: 48, admin: 18 },
    { month: 'Apr', farmers: 48000, officers: 425, government: 63, ngo: 205, startup: 55, admin: 22 },
    { month: 'May', farmers: 67000, officers: 498, government: 71, ngo: 234, startup: 62, admin: 25 },
    { month: 'Jun', farmers: 89000, officers: 567, government: 78, ngo: 267, startup: 71, admin: 28 }
  ];

  const systemPerformanceData = [
    { time: '00:00', cpu: 45, memory: 62, disk: 78 },
    { time: '04:00', cpu: 38, memory: 58, disk: 79 },
    { time: '08:00', cpu: 72, memory: 84, disk: 81 },
    { time: '12:00', cpu: 65, memory: 79, disk: 82 },
    { time: '16:00', cpu: 58, memory: 71, disk: 83 },
    { time: '20:00', cpu: 42, memory: 65, disk: 84 }
  ];

  const usersByType = [
    { type: 'Farmers', count: 89000, percentage: 92.3 },
    { type: 'Extension Officers', count: 567, percentage: 0.6 },
    { type: 'Government', count: 78, percentage: 0.1 },
    { type: 'NGOs', count: 267, percentage: 0.3 },
    { type: 'Startups', count: 71, percentage: 0.1 },
    { type: 'Admins', count: 28, percentage: 0.0 }
  ];

  const contentReports = [
    {
      id: 1,
      type: 'Inappropriate Content',
      reporter: 'User #1234',
      reported: 'Community Post',
      status: 'pending',
      date: '2024-03-20'
    },
    {
      id: 2,
      type: 'Spam',
      reporter: 'User #5678',
      reported: 'Training Video',
      status: 'reviewed',
      date: '2024-03-19'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      activity: language === 'hi' ? '1,247 नए किसान पंजीकृत हुए' : '1,247 new farmers registered',
      time: '2 hours ago',
      type: 'user_registration'
    },
    {
      id: 2,
      activity: language === 'hi' ? 'सिस्टम बैकअप पूरा हुआ' : 'System backup completed',
      time: '4 hours ago',
      type: 'system'
    },
    {
      id: 3,
      activity: language === 'hi' ? '15 सामग्री रिपोर्ट की समीक्षा की गई' : '15 content reports reviewed',
      time: '6 hours ago',
      type: 'moderation'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      alert: language === 'hi' ? 'उच्च CPU उपयोग (85%)' : 'High CPU usage (85%)',
      severity: 'warning',
      time: '30 minutes ago'
    },
    {
      id: 2,
      alert: language === 'hi' ? 'डेटाबेस कनेक्शन धीमा' : 'Slow database connections',
      severity: 'info',
      time: '2 hours ago'
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
                  {language === 'hi' ? 'स्वागत, सिस्टम एडमिन' : 'Welcome, System Admin'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">Platform Administration Dashboard</p>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                {language === 'hi' ? 'सुपर एडमिन' : 'Super Admin'}
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
                  <p className="text-2xl font-bold">96.4K</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.totalUsers}</p>
                  <p className="text-xs text-green-600">+12.5% this month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Activity className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">99.8%</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.systemUptime}</p>
                  <p className="text-xs text-green-600">Excellent</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.activeReports}</p>
                  <p className="text-xs text-orange-600">Needs attention</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Database className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-gray-600 dark:text-gray-300">{t.serverHealth}</p>
                  <p className="text-xs text-green-600">Good</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{t.userGrowth}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="farmers" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="officers" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="government" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="ngo" stroke="#ec4899" strokeWidth={2} />
                <Line type="monotone" dataKey="startup" stroke="#f59e0b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Performance */}
        <Card>
          <CardHeader>
            <CardTitle>{t.systemPerformance}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cpu" stroke="#ef4444" name="CPU %" />
                <Line type="monotone" dataKey="memory" stroke="#3b82f6" name="Memory %" />
                <Line type="monotone" dataKey="disk" stroke="#10b981" name="Disk %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.systemAlerts}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.severity === 'warning' ? 'text-orange-500' : 
                      alert.severity === 'error' ? 'text-red-500' : 'text-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.alert}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                    <Badge variant={
                      alert.severity === 'warning' ? 'destructive' : 
                      alert.severity === 'error' ? 'destructive' : 'secondary'
                    }>
                      {alert.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.recentActivities}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'user_registration' ? 'bg-green-500' :
                      activity.type === 'system' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}></div>
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
      </div>
    );
  }

  if (activeTab === 'users') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {t.userStatistics}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usersByType.map((userType, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{userType.type}</span>
                      <span className="text-sm font-bold">{userType.count.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={userType.percentage} className="flex-1" />
                      <span className="text-xs text-gray-500">{userType.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{language === 'hi' ? 'उपयोगकर्ता कार्य' : 'User Actions'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'उपयोगकर्ता प्रकार' : 'User Type'}
                </label>
                <Select value={selectedUserType} onValueChange={setSelectedUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === 'hi' ? 'प्रकार चुनें' : 'Select user type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">{language === 'hi' ? 'किसान' : 'Farmer'}</SelectItem>
                    <SelectItem value="officer">{language === 'hi' ? 'अधिकारी' : 'Officer'}</SelectItem>
                    <SelectItem value="government">{language === 'hi' ? 'सरकारी' : 'Government'}</SelectItem>
                    <SelectItem value="ngo">NGO</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === 'hi' ? 'उपयोगकर्ता ID' : 'User ID'}
                </label>
                <Input placeholder="Enter user ID or email" />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                <Eye className="w-4 h-4 mr-2" />
                {language === 'hi' ? 'विवरण देखें' : 'View Details'}
              </Button>
              <Button variant="outline" className="flex-1">
                <Lock className="w-4 h-4 mr-2" />
                {language === 'hi' ? 'निलंबित करें' : 'Suspend'}
              </Button>
              <Button variant="destructive" className="flex-1">
                <Trash2 className="w-4 h-4 mr-2" />
                {language === 'hi' ? 'हटाएं' : 'Delete'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.createAnnouncement}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === 'hi' ? 'लक्षित उपयोगकर्ता' : 'Target Users'}
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'hi' ? 'सभी उपयोगकर्ता' : 'All users'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'hi' ? 'सभी उपयोगकर्ता' : 'All Users'}</SelectItem>
                  <SelectItem value="farmers">{language === 'hi' ? 'केवल किसान' : 'Farmers Only'}</SelectItem>
                  <SelectItem value="officers">{language === 'hi' ? 'केवल अधिकारी' : 'Officers Only'}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{t.announcementText}</label>
              <Textarea 
                placeholder={language === 'hi' ? 'महत्वपूर्ण घोषणा यहां लिखें...' : 'Type important announcement here...'}
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                rows={4}
              />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Bell className="w-4 h-4 mr-2" />
              {t.publishAnnouncement}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeTab === 'content') {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              {t.contentModerationQueue}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentReports.map((report) => (
                <div key={report.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{report.type}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span>Reporter: {report.reporter}</span>
                        <span>Content: {report.reported}</span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={report.status === 'pending' ? 'destructive' : 'default'}>
                        {report.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        {language === 'hi' ? 'समीक्षा करें' : 'Review'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-medium mb-2">{language === 'hi' ? 'लंबित रिपोर्ट' : 'Pending Reports'}</h3>
              <p className="text-2xl font-bold text-orange-600">23</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-medium mb-2">{language === 'hi' ? 'आज की समीक्षा' : 'Reviewed Today'}</h3>
              <p className="text-2xl font-bold text-green-600">47</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-medium mb-2">{language === 'hi' ? 'निष्कासित सामग्री' : 'Removed Content'}</h3>
              <p className="text-2xl font-bold text-red-600">12</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}