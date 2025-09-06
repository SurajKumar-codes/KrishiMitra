import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Brain, TrendingUp, Droplets, Thermometer, Wind, Calendar } from 'lucide-react';

interface AIRecommendationEngineProps {
  language: string;
  userProfile: any;
}

export function AIRecommendationEngine({ language, userProfile }: AIRecommendationEngineProps) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confidence, setConfidence] = useState(0);

  const translations = {
    en: {
      title: 'AI-Powered Recommendations',
      analyzing: 'Analyzing your farm data...',
      confidence: 'Confidence Level',
      factors: 'Key Factors Analyzed',
      weather: 'Weather Patterns',
      soil: 'Soil Conditions',
      market: 'Market Trends',
      seasonal: 'Seasonal Patterns',
      priority: 'Priority',
      implement: 'Implement Now'
    },
    hi: {
      title: 'AI-संचालित सुझाव',
      analyzing: 'आपके खेत का डेटा विश्लेषण कर रहे हैं...',
      confidence: 'विश्वसनीयता स्तर',
      factors: 'मुख्य विश्लेषित कारक',
      weather: 'मौसम पैटर्न',
      soil: 'मिट्टी की स्थिति',
      market: 'बाजार ट्रेंड्स',
      seasonal: 'मौसमी पैटर्न',
      priority: 'प्राथमिकता',
      implement: 'अभी लागू करें'
    }
  };

  const t = translations[language];

  // Mock AI recommendation generation
  useEffect(() => {
    const generateRecommendations = () => {
      setLoading(true);
      
      // Simulate AI processing
      setTimeout(() => {
        const mockRecommendations = [
          {
            id: 1,
            category: 'crop_planning',
            title: language === 'hi' ? 'मक्का की बुआई की सिफारिश' : 'Maize Sowing Recommendation',
            description: language === 'hi' 
              ? 'आपकी मिट्टी और मौसम के अनुसार मक्का की बुआई सबसे उपयुक्त है'
              : 'Based on your soil and weather conditions, maize sowing is most suitable',
            confidence: 94,
            priority: 'high',
            factors: ['weather', 'soil', 'market'],
            expectedYield: '15% increase',
            implementation: language === 'hi' 
              ? 'अगले 7 दिनों में बुआई करें' 
              : 'Sow within next 7 days'
          },
          {
            id: 2,
            category: 'fertilizer',
            title: language === 'hi' ? 'जैविक उर्वरक का उपयोग' : 'Organic Fertilizer Usage',
            description: language === 'hi'
              ? 'कंपोस्ट और वर्मी कंपोस्ट का उपयोग मिट्टी की गुणवत्ता सुधारेगा'
              : 'Compost and vermicompost will improve soil quality',
            confidence: 87,
            priority: 'medium',
            factors: ['soil', 'seasonal'],
            expectedYield: '8% cost reduction',
            implementation: language === 'hi'
              ? 'तत्काल लागू करें'
              : 'Implement immediately'
          },
          {
            id: 3,
            category: 'irrigation',
            title: language === 'hi' ? 'ड्रिप सिंचाई सिस्टम' : 'Drip Irrigation System',
            description: language === 'hi'
              ? 'पानी की बचत के लिए ड्रिप सिंचाई सबसे अच्छा विकल्प है'
              : 'Drip irrigation is the best option for water conservation',
            confidence: 91,
            priority: 'high',
            factors: ['weather', 'water_availability'],
            expectedYield: '25% water savings',
            implementation: language === 'hi'
              ? 'इस महीने सेटअप करें'
              : 'Setup this month'
          }
        ];

        setRecommendations(mockRecommendations);
        setConfidence(91);
        setLoading(false);
      }, 2500);
    };

    generateRecommendations();
  }, [language, userProfile]);

  const getFactorIcon = (factor) => {
    switch (factor) {
      case 'weather': return <Thermometer className="w-4 h-4" />;
      case 'soil': return <Droplets className="w-4 h-4" />;
      case 'market': return <TrendingUp className="w-4 h-4" />;
      case 'seasonal': return <Calendar className="w-4 h-4" />;
      case 'water_availability': return <Wind className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-600" />
          {t.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{t.analyzing}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Confidence Level */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{t.confidence}</span>
                <span className="text-purple-600 font-bold">{confidence}%</span>
              </div>
              <Progress value={confidence} className="w-full" />
            </div>

            {/* Key Factors */}
            <div>
              <h4 className="font-medium mb-3">{t.factors}</h4>
              <div className="flex flex-wrap gap-2">
                {['weather', 'soil', 'market', 'seasonal'].map((factor) => (
                  <div key={factor} className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1">
                    {getFactorIcon(factor)}
                    <span className="text-sm capitalize">{t[factor]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{rec.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                    </div>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {t.priority}: {rec.priority}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">{t.confidence}: </span>
                      <span className="font-medium">{rec.confidence}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Expected: </span>
                      <span className="font-medium text-green-600">{rec.expectedYield}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {rec.factors.map((factor) => (
                        <div key={factor} className="flex items-center space-x-1 text-xs text-gray-500">
                          {getFactorIcon(factor)}
                        </div>
                      ))}
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      {t.implement}
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                    <strong>Implementation:</strong> {rec.implementation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}