
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, Recycle, Clock, Globe, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TimelineItem = ({ date, title, icon, color }: { date: string; title: string; icon: React.ReactNode; color: string }) => (
  <div className="flex mb-8 relative">
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center flex-shrink-0 z-10`}>
      {icon}
    </div>
    <div className="ml-6">
      <div className="font-medium text-sm text-muted-foreground">{date}</div>
      <div className="font-semibold mb-2">{title}</div>
    </div>
    {/* Vertical connecting line */}
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
                <p className="mb-4">
                  While the DPP offers numerous benefits, implementation faces several challenges:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Data standardization across diverse supply chains</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Technical infrastructure requirements, particularly for SMEs</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Data security and intellectual property protection</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Verification methods for supplied information</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>International alignment with trading partners</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">How to Prepare for DPP Implementation</h2>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <p className="mb-4">
                  Organizations can take proactive steps to prepare for Digital Product Passport requirements:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">1</span>
                    </div>
                    <span>Audit current product information management systems</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">2</span>
                    </div>
                    <span>Map product lifecycles and supply chains</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">3</span>
                    </div>
                    <span>Identify data gaps in product information</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">4</span>
                    </div>
                    <span>Collaborate with suppliers on data collection</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">5</span>
                    </div>
                    <span>Invest in digital systems capable of managing DPP data</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xs font-semibold text-primary">6</span>
                    </div>
                    <span>Monitor regulatory developments and implementation timelines</span>
                  </div>
                </div>
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
