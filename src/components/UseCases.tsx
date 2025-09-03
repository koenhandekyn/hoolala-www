import React from 'react';
import { Check } from 'lucide-react';
import ArtworkImage from './ArtworkImage';
import { useTranslation } from '@/hooks/use-translation';

interface UseCaseProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description, benefits }) => {
  return (
    <div className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
      {/* <div className="w-16 h-16 mb-4 mx-auto">
        <ArtworkImage
          src={icon}
          alt={title}
          iconMode={true}
          className="w-full h-full"
        />
      </div> */}
      <h3 className="text-lg font-medium mb-2 text-center">{title}</h3>
      <p className="text-base font-medium text-muted-foreground mb-4 text-center bg-muted/50 py-2 px-3 rounded-lg">{description}</p>

      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UseCases: React.FC = () => {
  const { t } = useTranslation();
  const useCases = [
    {
      title: String(t('useCases.items.0.title')),
      description: String(t('useCases.items.0.description')),
      benefits: (t('useCases.items.0.benefits') as string[])
    },
    {
      title: String(t('useCases.items.1.title')),
      description: String(t('useCases.items.1.description')),
      benefits: (t('useCases.items.1.benefits') as string[])
    },
    {
      title: String(t('useCases.items.2.title')),
      description: String(t('useCases.items.2.description')),
      benefits: (t('useCases.items.2.benefits') as string[])
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            {t('useCases.title')}
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('useCases.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              icon=""
              title={useCase.title}
              description={useCase.description}
              benefits={useCase.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
