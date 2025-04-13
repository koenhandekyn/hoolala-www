
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, Recycle, Clock, Globe, FileCode, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const TimelineItem = ({ date, title, icon, color }: { date: string; title: string; icon: React.ReactNode; color: string }) => (
  <div className="flex mb-8 relative">
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0 z-10`}>
      {icon}
    </div>
    <div className="ml-6">
      <div className="font-medium text-sm text-muted-foreground">{date}</div>
      <div className="font-semibold mb-2">{title}</div>
    </div>
    <div className="absolute left-5 top-10 w-[2px] h-12 bg-border -z-0"></div>
  </div>
);

const BenefitCard = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <Card className="h-full">
    <CardContent className="pt-6">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const FaqItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-6 pb-6 last:border-0 last:pb-0">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              {isOpen ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4 text-primary" />}
            </div>
            <h4 className="text-xl font-bold text-primary tracking-tight flex-1">
              {question}
            </h4>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pl-12">
          <div className="text-muted-foreground bg-soft-gray/50 p-4 rounded-lg leading-relaxed">
            {answer}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const DPPPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="flex flex-wrap items-center gap-3 mt-8 mb-6">
                <Badge variant="outline" className="bg-primary/5 text-primary">Regulatory</Badge>
                <Badge variant="outline" className="bg-secondary/5 text-secondary">EU Initiative</Badge>
                <Badge variant="outline" className="bg-accent/5 text-accent">Sustainability</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EU Digital Product Passport
              </h1>
              
              <div className="flex items-center mb-10 gap-8 flex-wrap">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Implementation: 2026-2028</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">European Union Regulation</span>
                </div>
                <div className="flex items-center">
                  <FileCode className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">Part of Circular Economy Action Plan</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border mb-12">
                  <img 
                    src="/lovable-uploads/1cf5264e-3223-446b-86b4-35fd700b25ea.png" 
                    alt="Digital Product Passport visualization" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">What is the EU Digital Product Passport?</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed">
                  The EU Digital Product Passport (DPP) is a key initiative within the European Union's sustainable product 
                  policy framework, designed to enhance transparency across supply chains. It aims to make product information 
                  accessible throughout the entire lifecycle, from raw material extraction to disposal and recycling.
                </p>
                
                <div className="my-10 p-6 bg-muted/30 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold mb-4">Core Components of the Digital Product Passport</h3>
                  <p className="mb-4">
                    The DPP consists of a unique product identifier and a digital record containing comprehensive data about a 
                    product, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Materials and components used in manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Environmental impact information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Product carbon footprint</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Repair and maintenance instructions</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Disassembly guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>End-of-life recycling protocols</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 mr-2" />
                        <span>Compliance certifications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Recycle className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Who Benefits from Digital Product Passports?</h2>
              </div>
              
              <p className="text-lg mb-8">
                The implementation of Digital Product Passports offers advantages to various stakeholders across the 
                value chain:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <BenefitCard 
                  icon={<FileText className="h-6 w-6 text-primary" />}
                  title="For Manufacturers"
                  items={[
                    "Streamlined regulatory compliance",
                    "Enhanced brand reputation through transparency",
                    "Better inventory and supply chain management",
                    "Improved product quality through data analysis"
                  ]}
                />
                
                <BenefitCard 
                  icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
                  title="For Consumers"
                  items={[
                    "Access to verified product information",
                    "Ability to make more sustainable purchasing decisions",
                    "Better understanding of product maintenance",
                    "Clear end-of-life disposal instructions"
                  ]}
                />
                
                <BenefitCard 
                  icon={<AlertTriangle className="h-6 w-6 text-primary" />}
                  title="For Regulators"
                  items={[
                    "Enhanced market surveillance capabilities",
                    "Easier verification of regulatory compliance",
                    "Better monitoring of waste streams",
                    "Data-driven policy development"
                  ]}
                />
                
                <BenefitCard 
                  icon={<Recycle className="h-6 w-6 text-primary" />}
                  title="For Recyclers"
                  items={[
                    "Detailed information about product composition",
                    "Optimized recycling processes",
                    "Reduced contamination in recycling streams",
                    "Increased recovery rates of valuable materials"
                  ]}
                />
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Implementation Timeline and Scope</h2>
              </div>
              
              <p className="text-lg mb-8">
                The EU's Digital Product Passport initiative is being rolled out progressively, starting with 
                priority product categories:
              </p>
              
              <div className="border-l-2 border-border pl-8 ml-4 relative">
                <TimelineItem 
                  date="2026" 
                  title="Batteries" 
                  icon={<Clock className="h-5 w-5 text-white" />}
                  color="bg-primary"
                />
                <TimelineItem 
                  date="2027" 
                  title="Textiles and Electronics/ICT Equipment" 
                  icon={<Clock className="h-5 w-5 text-white" />}
                  color="bg-primary/80"
                />
                <TimelineItem 
                  date="2028" 
                  title="Furniture and Construction Products" 
                  icon={<Clock className="h-5 w-5 text-white" />}
                  color="bg-primary/60"
                />
                <TimelineItem 
                  date="Beyond 2028" 
                  title="Additional Product Categories" 
                  icon={<Clock className="h-5 w-5 text-white" />}
                  color="bg-primary/40"
                />
              </div>
            </div>
            
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
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">How to Prepare for DPP Implementation</h2>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 mb-8">
                <h3 className="text-xl font-medium mb-5">Strategic Preparation Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Audit Current Systems</h4>
                      <p className="text-sm text-muted-foreground">Evaluate your product information management systems and identify gaps</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Map Supply Chains</h4>
                      <p className="text-sm text-muted-foreground">Create detailed mapping of your product lifecycles and supplier networks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Identify Data Gaps</h4>
                      <p className="text-sm text-muted-foreground">Determine what product information is missing and needs to be collected</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Engage Suppliers</h4>
                      <p className="text-sm text-muted-foreground">Start early collaboration with suppliers on data collection requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Invest in Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">Develop or acquire digital systems capable of managing DPP data effectively</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">6</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Monitor Regulations</h4>
                      <p className="text-sm text-muted-foreground">Stay informed about regulatory developments and implementation timelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                <FaqItem 
                  question="What is the EU Digital Product Passport?"
                  answer={
                    <p>
                      The EU Digital Product Passport (DPP) is a digital record containing comprehensive information about 
                      a product's components, materials, chemical properties, repair and dismantling information, and 
                      environmental footprint. It's a key initiative within the European Green Deal and Circular Economy 
                      Action Plan, designed to enable circular business models through increased transparency across supply chains.
                    </p>
                  }
                />
                
                <FaqItem 
                  question="When will the Digital Product Passport be implemented?"
                  answer={
                    <>
                      <p>
                        The implementation timeline varies by product category, with a phased approach:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Batteries: Starting in 2026</li>
                        <li>Textiles and Electronics/ICT Equipment: From 2027</li>
                        <li>Furniture and Construction Products: From 2028</li>
                        <li>Additional product categories will follow after 2028</li>
                      </ul>
                    </>
                  }
                />
                
                <FaqItem 
                  question="Which products will require a Digital Product Passport?"
                  answer={
                    <>
                      <p>
                        The DPP will initially apply to the following priority product categories:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Batteries</li>
                        <li>Electronics (including smartphones, tablets, and washing machines)</li>
                        <li>Textiles (including clothing and footwear)</li>
                        <li>Furniture</li>
                        <li>Steel</li>
                        <li>Cement</li>
                        <li>Chemicals</li>
                        <li>Construction products</li>
                      </ul>
                      <p className="mt-2">
                        Additional product categories will be added progressively as the implementation advances.
                      </p>
                    </>
                  }
                />
                
                <FaqItem 
                  question="What information will be included in the Digital Product Passport?"
                  answer={
                    <>
                      <p>
                        The DPP will contain comprehensive information about products, including:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Materials and components used in manufacturing</li>
                        <li>Chemical composition and substances of concern</li>
                        <li>Repair and maintenance instructions</li>
                        <li>Disassembly guidelines</li>
                        <li>End-of-life handling information</li>
                        <li>Environmental footprint data (carbon emissions, water usage, etc.)</li>
                        <li>Durability and reusability information</li>
                        <li>Sustainable sourcing information</li>
                        <li>Compliance certifications</li>
                      </ul>
                      <p className="mt-2">
                        The specific information required will vary by product category and will be detailed in delegated acts.
                      </p>
                    </>
                  }
                />
                
                <FaqItem 
                  question="Who will have access to the information in the Digital Product Passport?"
                  answer={
                    <>
                      <p>
                        Access to DPP information will be role-based and tailored to different stakeholders:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-medium">Consumers:</span> Will have access to information relevant for purchasing decisions, product use, maintenance, and proper disposal.</li>
                        <li><span className="font-medium">Businesses:</span> Will have access to relevant information based on their role in the supply chain.</li>
                        <li><span className="font-medium">Regulatory authorities:</span> Will have access to compliance-related information for market surveillance.</li>
                        <li><span className="font-medium">Repair and recycling operators:</span> Will have access to technical information needed for repair services or end-of-life processing.</li>
                      </ul>
                      <p className="mt-2">
                        Some commercially sensitive information may have restricted access to protect intellectual property rights while still providing necessary transparency.
                      </p>
                    </>
                  }
                />
                
                <FaqItem 
                  question="How will the Digital Product Passport be implemented technically?"
                  answer={
                    <>
                      <p>
                        The technical implementation will likely involve:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>A unique product identifier (likely a QR code or RFID tag) physically attached to the product</li>
                        <li>A decentralized data system where information is stored by different actors in the value chain</li>
                        <li>Standardized data formats to ensure interoperability</li>
                        <li>API connections to allow different systems to communicate</li>
                        <li>Role-based access control to manage information visibility</li>
                      </ul>
                      <p className="mt-2">
                        The European Commission is working with stakeholders to develop technical specifications and standards to ensure 
                        a harmonized approach across different sectors.
                      </p>
                    </>
                  }
                />
                
                <FaqItem 
                  question="Which companies must comply with the Digital Product Passport requirements?"
                  answer={
                    <>
                      <p>
                        The DPP requirements will apply to all economic operators placing products from the regulated 
                        categories on the EU market, including:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>EU manufacturers</li>
                        <li>Importers bringing products into the EU market</li>
                        <li>Authorized representatives of non-EU manufacturers</li>
                        <li>Distributors and retailers in certain cases</li>
                      </ul>
                      <p className="mt-2">
                        The requirements will apply to both large corporations and SMEs, although there may be simplified obligations 
                        or transition periods for smaller businesses in some cases.
                      </p>
                    </>
                  }
                />
                
                <FaqItem 
                  question="What are the benefits of implementing the Digital Product Passport?"
                  answer={
                    <>
                      <p>
                        The DPP offers numerous benefits across the value chain:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><span className="font-medium">For manufacturers:</span> Enhanced inventory management, improved product quality through data analysis, streamlined regulatory compliance, and better brand reputation.</li>
                        <li><span className="font-medium">For consumers:</span> Access to verified product information, ability to make more sustainable purchasing decisions, better understanding of product care and maintenance.</li>
                        <li><span className="font-medium">For recyclers:</span> Detailed information about product composition enables more efficient recycling processes and increased recovery of valuable materials.</li>
                        <li><span className="font-medium">For the environment:</span> Promotes circular economy principles, extends product lifespan through better maintenance, and reduces waste through improved recyclability.</li>
                      </ul>
                    </>
                  }
                />
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">Conclusion: The Future of Product Information</h2>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed">
                  The EU Digital Product Passport represents a paradigm shift in how product information is managed and 
                  shared. By centralizing comprehensive product data and making it accessible to all stakeholders, 
                  the DPP aims to accelerate the transition to a circular economy, reduce waste, and empower consumers 
                  to make more sustainable choices.
                </p>
                
                <p className="text-lg leading-relaxed mt-4">
                  As implementation progresses across different sectors, businesses that embrace the DPP concept early 
                  will not only ensure regulatory compliance but may also gain competitive advantages through enhanced 
                  transparency, improved product stewardship, and stronger customer relationships built on trust and 
                  shared sustainability values.
                </p>
              </div>
              
              <div className="mt-12 flex justify-center">
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                >
                  Return to Homepage
                  <ArrowLeft className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DPPPage;
