import React from 'react';
import { QrCode, FileText, Share2, Nfc } from 'lucide-react';
import ArtworkImage from './ArtworkImage';
import { useTranslation } from '@/hooks/use-translation';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="relative">
      {number < 3 && (
        <div className="absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block hidden"></div>
      )}

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 z-10">
          {icon}
        </div>

        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-medium mb-4">
          {number}
        </span>

        <h3 className="text-xl font-medium mb-2 text-center">{title}</h3>
        <p className="text-sm text-muted-foreground text-center max-w-xs">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-xs font-medium">{t('howItWorks.title')}</span>
          </div>

          <h2 className="mb-6">
            {t('howItWorks.subtitle')}
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            <i>Wazzat?</i> {t('howItWorks.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          <Step
            number={1}
            icon={<div className="flex items-center gap-1"><QrCode className="h-6 w-6 text-primary" /><Nfc className="h-6 w-6 text-primary" /></div>}
            title={t('howItWorks.steps.tag.title')}
            description={t('howItWorks.steps.tag.description')}
          />

          <Step
            number={2}
            icon={<FileText className="h-8 w-8 text-primary" />}
            title={t('howItWorks.steps.link.title')}
            description={t('howItWorks.steps.link.description')}
          />

          <Step
            number={3}
            icon={<Share2 className="h-8 w-8 text-primary" />}
            title={t('howItWorks.steps.track.title')}
            description={t('howItWorks.steps.track.description')}
          />
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="mb-6 w-full">
                    <ArtworkImage
                      src="/lovable-uploads/qr_code_heater.png"
                      alt="Water heater with QR code"
                      className="w-full max-w-[280px] aspect-square mx-auto rounded-xl"
                    />
                  </div>

                  <div className="w-full text-center">
                    <h3 className="text-2xl font-medium mb-4">{t('howItWorks.tracking.qr.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('howItWorks.tracking.qr.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-1">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="mb-6 w-full">
                    <ArtworkImage
                      src="/lovable-uploads/nfc_door.png"
                      alt="Water heater with NFC tag"
                      className="w-full max-w-[280px] aspect-square mx-auto"
                    />
                  </div>

                  <div className="w-full text-center">
                    <h3 className="text-2xl font-medium mb-4">{t('howItWorks.tracking.nfc.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('howItWorks.tracking.nfc.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
