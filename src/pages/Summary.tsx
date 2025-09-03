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
    <div className="">
      <div className="container mx-auto py-8 max-w-[210mm] border-b border-border pb-6 mb-8 flex justify-between items-center print:hidden" >
        <div className="flex items-center gap-4">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-4xl font-bold text-primary hover:text-primary/90 transition-colors">
            <i>Wazzat?</i>
          </Link>

        </div>
        <div className="print:hidden">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="bg-white px-8 mt-8 container mx-auto py-8 px-4 max-w-[210mm] print:max-w-full print:w-[210mm] print:pt-[12mm] print:pr-[12mm] print:pb-[12mm] print:pl-[12mm] print:m-0">
        {/* Header */}
        {/* Introduction */}
        <div className="mb-4">
          <div className="flex flex-row items-start gap-4 mt-2 justify-between pt-0">
            <div className="flex-1">
              <p className="text-xl font-semibold text-foreground mb-4 leading-tight">
                <HtmlContent>{t('summary.overview.description')}</HtmlContent>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {t('summary.overview.what.description')}
              </p>
            </div>
            <div className="shrink-0">
              <ArtworkImage
                src="/lovable-uploads/hero.png"
                alt="Technician scanning QR code"
                className="w-48 h-auto print:w-48"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-6">
          <div className="grid grid-cols-1 grid-cols-3 gap-6 ">
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
              <CardContent className="p-2">
                <div className="font-medium mb-2">
                  {t('summary.howItWorks.steps.tag.title')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('summary.howItWorks.steps.tag.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
              <CardContent className="p-2">
                <div className="font-medium mb-2">
                  {t('summary.howItWorks.steps.enrich.title')}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('summary.howItWorks.steps.enrich.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
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
        <div className="mb-6">
          {/* <h2 className="text-2xl font-semibold mb-4">
            <HtmlContent>{t('summary.features.title')}</HtmlContent>
          </h2> */}
          <div className="grid grid-cols-1 grid-cols-2 gap-x-12 gap-y-4">
            {(() => {
              const items = t('summary.features.items');
              console.log('Features items:', items);
              if (!Array.isArray(items)) return null;
              return items.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 border border-border">
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
        <div className="mb-6">
          <div className="grid grid-cols-1 grid-cols-3 gap-6">
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
              <CardContent className="p-2">
                <h5 className="font-medium mb-2">
                  {t('summary.useCases.manufacturers.title')}
                </h5>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  {(t('summary.useCases.manufacturers.benefits') as string[]).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
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
            <Card className="border border-border rounded-lg p-4 bg-primary/10">
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
        <div className="pt-4 border-t border-border text-center text-sm text-muted-foreground leading-tight">
          <p className="leading-tight m-0 font-mono text-xs">
            {t('summary.footer.visit')} https://www.wazzat.com {t('summary.footer.contact')} info@wazzat.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
