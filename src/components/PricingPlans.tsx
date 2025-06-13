import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const PricingTable: React.FC = () => {
  const { t } = useTranslation();
  const pricingTiers = [
    { range: "1-3", price: "Free Trial", history: "1 year" },
    { range: "4-50", price: "€5", history: "10 years" },
    { range: "51-100", price: "€4", history: "10 years" },
    { range: "101-500", price: "€2", history: "10 years" },
    { range: "501-1000", price: "€1", history: "10 years" },
    { range: "1001-5000", price: "€0.75", history: "10 years" },
    { range: "5001-10000", price: "€0.60", history: "10 years" },
    { range: "10000+", price: "€0.50", history: "10 years" }
  ];

  return (
    <section id="pricing" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6">
            {t('pricing.title')}
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left">{t('pricing.table.points')}</th>
                  <th className="py-4 px-6 text-left">{t('pricing.table.price')}</th>
                  <th className="py-4 px-6 text-left">{t('pricing.table.history')}</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-6">{tier.range}</td>
                    <td className="py-4 px-6 font-medium">{tier.price}</td>
                    <td className="py-4 px-6">{tier.history}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto italic text-sm">
            {t('pricing.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
