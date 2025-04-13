
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DPPPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              EU Digital Product Passport Overview
            </h1>
            
            <div className="prose prose-slate max-w-none">
              <h2>What is the EU Digital Product Passport?</h2>
              <p>
                The EU Digital Product Passport (DPP) is a key initiative within the European Union's sustainable product 
                policy framework, designed to enhance transparency across supply chains. It aims to make product information 
                accessible throughout the entire lifecycle, from raw material extraction to disposal and recycling.
              </p>
              
              <h2>Core Components of the Digital Product Passport</h2>
              <p>
                The DPP consists of a unique product identifier and a digital record containing comprehensive data about a 
                product, including:
              </p>
              <ul>
                <li>Materials and components used in manufacturing</li>
                <li>Environmental impact information</li>
                <li>Product carbon footprint</li>
                <li>Repair and maintenance instructions</li>
                <li>Disassembly guidelines</li>
                <li>End-of-life recycling protocols</li>
                <li>Compliance certifications</li>
              </ul>
              
              <h2>Who Benefits from Digital Product Passports?</h2>
              <p>
                The implementation of Digital Product Passports offers advantages to various stakeholders across the 
                value chain:
              </p>
              <h3>For Manufacturers</h3>
              <ul>
                <li>Streamlined regulatory compliance</li>
                <li>Enhanced brand reputation through transparency</li>
                <li>Better inventory and supply chain management</li>
                <li>Improved product quality through data analysis</li>
              </ul>
              
              <h3>For Consumers</h3>
              <ul>
                <li>Access to verified product information</li>
                <li>Ability to make more sustainable purchasing decisions</li>
                <li>Better understanding of product maintenance requirements</li>
                <li>Clear end-of-life disposal instructions</li>
              </ul>
              
              <h3>For Regulators</h3>
              <ul>
                <li>Enhanced market surveillance capabilities</li>
                <li>Easier verification of regulatory compliance</li>
                <li>Better monitoring of waste streams</li>
                <li>Data-driven policy development</li>
              </ul>
              
              <h3>For Recyclers</h3>
              <ul>
                <li>Detailed information about product composition</li>
                <li>Optimized recycling processes</li>
                <li>Reduced contamination in recycling streams</li>
                <li>Increased recovery rates of valuable materials</li>
              </ul>
              
              <h2>Implementation Timeline and Scope</h2>
              <p>
                The EU's Digital Product Passport initiative is being rolled out progressively, starting with 
                priority product categories:
              </p>
              <ul>
                <li>Batteries (2026)</li>
                <li>Textiles (2027)</li>
                <li>Electronics and ICT equipment (2027)</li>
                <li>Furniture (2028)</li>
                <li>Construction products (2028)</li>
                <li>Additional product categories to follow</li>
              </ul>
              
              <h2>Challenges and Considerations</h2>
              <p>
                While the DPP offers numerous benefits, implementation faces several challenges:
              </p>
              <ul>
                <li>Data standardization across diverse supply chains</li>
                <li>Technical infrastructure requirements, particularly for SMEs</li>
                <li>Data security and intellectual property protection</li>
                <li>Verification methods for supplied information</li>
                <li>International alignment with trading partners</li>
              </ul>
              
              <h2>How to Prepare for DPP Implementation</h2>
              <p>
                Organizations can take proactive steps to prepare for Digital Product Passport requirements:
              </p>
              <ul>
                <li>Audit current product information management systems</li>
                <li>Map product lifecycles and supply chains</li>
                <li>Identify data gaps in product information</li>
                <li>Collaborate with suppliers on data collection</li>
                <li>Invest in digital systems capable of managing DPP data</li>
                <li>Monitor regulatory developments and implementation timelines</li>
              </ul>
              
              <h2>Conclusion: The Future of Product Information</h2>
              <p>
                The EU Digital Product Passport represents a paradigm shift in how product information is managed and 
                shared. By centralizing comprehensive product data and making it accessible to all stakeholders, 
                the DPP aims to accelerate the transition to a circular economy, reduce waste, and empower consumers 
                to make more sustainable choices.
              </p>
              
              <p>
                As implementation progresses across different sectors, businesses that embrace the DPP concept early 
                will not only ensure regulatory compliance but may also gain competitive advantages through enhanced 
                transparency, improved product stewardship, and stronger customer relationships built on trust and 
                shared sustainability values.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DPPPage;
