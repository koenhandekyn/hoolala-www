import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  Wazzat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Data Controller</h2>
                <p>
                  Wazzat<br />
                  [Company Address]<br />
                  Belgium<br />
                  VAT: [VAT Number]<br />
                  Email: info@wazzat.app
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-2">3.1 Personal Information</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Company information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">3.2 Usage Data</h3>
                <ul className="list-disc pl-6">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Usage patterns</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
                <p>We process your personal data based on:</p>
                <ul className="list-disc pl-6">
                  <li>Contractual necessity</li>
                  <li>Legal obligations</li>
                  <li>Legitimate interests</li>
                  <li>Your consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p>Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p>
                  For any questions about this Privacy Policy or our data practices, please contact us at:<br />
                  Email: info@wazzat.app
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
