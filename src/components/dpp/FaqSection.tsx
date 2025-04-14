
import React from 'react';
import { FileText } from 'lucide-react';
import FaqItem from './FaqItem';

const FaqSection: React.FC = () => {
  return (
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
  );
};

export default FaqSection;
