
import React from 'react';
import ArtworkImage from '@/components/ArtworkImage';
import { Card, CardContent } from '@/components/ui/card';

const Summary: React.FC = () => {
  return (
    <div className="bg-white min-h-screen print:bg-white">
      <div className="container mx-auto py-8 px-4 max-w-[210mm] print:max-w-full print:w-[210mm] print:p-[12mm] print:m-0 print:shadow-none">
        {/* Header */}
        <div className="border-b border-border pb-6 mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Hoolala</h1>
          <div className="text-sm text-muted-foreground">
            Product Summary
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Product Overview</h2>
          <p className="text-muted-foreground mb-4">
            Hoolala enables tracking, documentation, and service requests with QR codes or RFID tags. 
            This summary provides an overview of key features and use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 print:grid-cols-2">
            <div>
              <p className="font-medium mb-2">What is Hoolala?</p>
              <p className="text-sm text-muted-foreground mb-4">
                A comprehensive solution that simplifies tracking, documentation, and service 
                management through smart tagging technology. Designed for businesses and individuals
                who need to maintain records and provide excellent service.
              </p>
            </div>
            <div className="flex justify-center">
              <ArtworkImage 
                src="/lovable-uploads/c0ab0a08-2c02-468d-978d-ce9776521950.png" 
                alt="Technician scanning QR code" 
                className="w-48 h-auto print:w-40"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">1. Tag It</div>
                <p className="text-sm text-muted-foreground">
                  Use QR codes (visible) or NFC/RFID (invisible) to label your products for easy identification.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">2. Enrich It</div>
                <p className="text-sm text-muted-foreground">
                  Add photos, notes, documents, and internal metadata to create a complete service history.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">3. Share It</div>
                <p className="text-sm text-muted-foreground">
                  Customers & technicians can scan a QR code or tap an NFC tag to access info or request service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 print:grid-cols-2 print:gap-y-3 print:gap-x-8">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">1</span>
              </div>
              <div>
                <p className="font-medium">Instant Access</p>
                <p className="text-sm text-muted-foreground">Scan a QR code to get all product details and documentation instantly.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">2</span>
              </div>
              <div>
                <p className="font-medium">No More Lost Info</p>
                <p className="text-sm text-muted-foreground">Keep documents & service history in one place, always accessible.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">3</span>
              </div>
              <div>
                <p className="font-medium">10+ Years Archiving</p>
                <p className="text-sm text-muted-foreground">Keep records available long-term for compliance and peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">4</span>
              </div>
              <div>
                <p className="font-medium">Fast Service Handling</p>
                <p className="text-sm text-muted-foreground">Customers can submit requests with one scan, simplifying the process.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">5</span>
              </div>
              <div>
                <p className="font-medium">Secure & Reliable</p>
                <p className="text-sm text-muted-foreground">Your data is stored safely and accessible only to the right people.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                <span className="text-xs font-medium text-primary">6</span>
              </div>
              <div>
                <p className="font-medium">Works on Any Modern Phone</p>
                <p className="text-sm text-muted-foreground">No app needed, just scan and go with any smartphone camera.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h3 className="font-medium mb-2">Manufacturers</h3>
                <p className="text-sm text-muted-foreground mb-2">Track service history for your custom products with ease.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  <li>Instant access to original specs</li>
                  <li>Complete installation notes</li>
                  <li>Streamlined warranty claims</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h3 className="font-medium mb-2">Contractors</h3>
                <p className="text-sm text-muted-foreground mb-2">Simplify post-installation support with smart tagging.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  <li>Document installations properly</li>
                  <li>Reduce support call time</li>
                  <li>Build customer loyalty</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h3 className="font-medium mb-2">Service Teams</h3>
                <p className="text-sm text-muted-foreground mb-2">Provide fast, reliable support with instant access.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  <li>Prepare for service calls better</li>
                  <li>Reduce diagnostic time</li>
                  <li>Access complete service history</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h3 className="font-medium mb-2">Homeowners</h3>
                <p className="text-sm text-muted-foreground mb-2">Keep appliance manuals, warranties, and service history accessible.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  <li>Find documentation quickly</li>
                  <li>Request service effortlessly</li>
                  <li>Track maintenance history</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Page break after use cases */}
        <div className="hidden print:block print:page-break-after"></div>

        {/* Footer - positioned at bottom of second page */}
        <div className="mt-auto pt-6 border-t border-border text-center text-sm text-muted-foreground print:fixed print:bottom-[12mm] print:left-[12mm] print:right-[12mm] print:w-[calc(210mm-24mm)]">
          <p>For more information, visit our website or contact us directly.</p>
          <p className="mt-2">© 2025 Hoolala. All rights reserved.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            width: 210mm;
            height: 297mm;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .container {
            padding: 12mm !important;
            max-width: 210mm !important;
            position: relative !important;
            min-height: 297mm !important; 
          }
          .print\\:page-break-after {
            page-break-after: always;
            break-after: page;
            height: 0;
          }
          .print\\:fixed {
            position: fixed !important;
          }
        }
      `}} />
    </div>
  );
};

export default Summary;
