import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  This Cookie Policy explains how Wazzat uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. What are Cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>

                <h3 className="text-xl font-medium mb-2">3.1 Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are strictly necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                </p>

                <h3 className="text-xl font-medium mb-2">3.2 Performance Cookies</h3>
                <p className="mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                </p>

                <h3 className="text-xl font-medium mb-2">3.3 Functional Cookies</h3>
                <p className="mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>

                <h3 className="text-xl font-medium mb-2">3.4 Targeting Cookies</h3>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. How to Control Cookies</h2>
                <p>
                  You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>
                <p>
                  Cookies can remain on your computer or mobile device for different periods of time. Some cookies are "session cookies," meaning they exist only while your browser is open. Others are "persistent cookies," meaning they survive after your browser is closed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please contact us at:<br />
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

export default CookiePolicy;
