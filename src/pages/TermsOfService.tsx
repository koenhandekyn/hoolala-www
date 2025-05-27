import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Wazzat's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p>
                  Wazzat provides a platform for creating and managing digital product passports, including QR code and NFC tag management, documentation storage, and service request handling.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p>
                  To use our services, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p>
                  Our services are provided on a one-time payment basis. Prices are subject to change with notice. All payments are non-refundable unless required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="list-disc pl-6">
                  <li>Provide accurate information</li>
                  <li>Use the service legally and ethically</li>
                  <li>Not misuse or abuse the service</li>
                  <li>Not attempt to reverse engineer the service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by Wazzat and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Wazzat shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of Belgium, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p>
                  For any questions about these Terms of Service, please contact us at:<br />
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

export default TermsOfService;
