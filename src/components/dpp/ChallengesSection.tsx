
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ChallengesSection: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
          <AlertTriangle className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold">Challenges and Considerations</h2>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="mb-4 text-lg">
          While the Digital Product Passport offers numerous benefits, businesses face several significant challenges when implementing it:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="border-amber-200 bg-amber-50/30">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                Technical Implementation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Developing data collection systems across complex supply chains</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Integration with existing enterprise resource planning (ERP) systems</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Implementing suitable technological infrastructure, especially for SMEs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 bg-amber-50/30">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                Data Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Standardization of data formats across diverse supply chains</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Ensuring data security and protecting intellectual property</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Verifying the accuracy and reliability of supplied information</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-amber-200 bg-amber-50/30">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                Compliance & Adaptation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>International alignment with trading partners' regulations</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Managing the costs of implementation and compliance</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Adapting business models and processes to new requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 bg-amber-50/30">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                Supply Chain Complexity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Ensuring cooperation from all suppliers, including those outside the EU</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Managing varying levels of digital maturity across the supply chain</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Tracking and updating information throughout complex product lifecycles</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
