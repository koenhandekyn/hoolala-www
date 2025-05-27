import React from 'react';
import ArtworkImage from '@/components/ArtworkImage';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { HtmlContent } from '@/components/HtmlContent';
import '@/styles/print.css'; // Import the print styles

const Summary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-2 print:pt-0">
      <div className="bg-white px-8 mt-8 container mx-auto py-8 px-4 max-w-[210mm] print:max-w-full print:w-[210mm] print:p-[12mm] print:m-0 print:shadow-none">
        {/* Header */}
        <div className="border-b border-border pb-6 mb-8 flex justify-between items-center print:hidden" >
          <div className="flex items-center gap-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-4xl font-bold text-primary hover:text-primary/90 transition-colors">
              <i>Wazzat?</i>
            </Link>

          </div>
          <div className="print:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-start gap-8 mt-6 print:grid print:grid-cols-12 print:gap-8">
            <div className="flex-1 print:col-span-8">
              <p className="text-muted-foreground mb-4">
                <HtmlContent>{t('summary.overview.description')}</HtmlContent>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {t('summary.overview.what.description')}
              </p>
            </div>
            <div className="shrink-0 print:col-span-4 print:justify-self-end">
              <ArtworkImage
                src="/lovable-uploads/c0ab0a08-2c02-468d-978d-ce9776521950.png"
                alt="Technician scanning QR code"
                className="w-48 h-auto print:w-48"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">
                  {t('summary.howItWorks.steps.tag.title')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('summary.howItWorks.steps.tag.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">
                  {t('summary.howItWorks.steps.enrich.title')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('summary.howItWorks.steps.enrich.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <div className="font-medium mb-2">
                  {t('summary.howItWorks.steps.share.title')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('summary.howItWorks.steps.share.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          {/* <h2 className="text-2xl font-semibold mb-4">
            <HtmlContent>{t('summary.features.title')}</HtmlContent>
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 print:grid-cols-2 print:gap-y-3 print:gap-x-8">
            {(() => {
              const items = t('summary.features.items');
              console.log('Features items:', items);
              if (!Array.isArray(items)) return null;
              return items.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 print:bg-muted">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {feature.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>


        {/* Use Cases */}
        <div className="mb-8 print:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h5 className="font-medium mb-2">
                  {t('summary.useCases.manufacturers.title')}
                </h5>
                {/* <p className="text-sm text-muted-foreground mb-2">
                  <HtmlContent>{t('summary.useCases.manufacturers.description')}</HtmlContent>
                </p> */}
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  {(t('summary.useCases.manufacturers.benefits') as string[]).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h5 className="font-medium mb-2">
                  {t('summary.useCases.contractors.title')}
                </h5>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  {(t('summary.useCases.contractors.benefits') as string[]).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 print:shadow-none">
              <CardContent className="p-2">
                <h5 className="font-medium mb-2">
                  {t('summary.useCases.serviceTeams.title')}
                </h5>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  {(t('summary.useCases.serviceTeams.benefits') as string[]).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer - positioned at bottom of second page */}
        <div className="pt-1 border-t border-border text-center text-sm text-muted-foreground leading-tight print:fixed print:bottom-[12mm] print:left-[12mm] print:right-[12mm] print:w-[calc(210mm-24mm)]">
          <p className="leading-tight m-0 font-mono text-xs">
            {t('summary.footer.visit')} https://www.wazzat.com {t('summary.footer.contact')} info@wazzat.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
