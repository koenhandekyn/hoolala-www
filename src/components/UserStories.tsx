import { useTranslation } from '@/hooks/use-translation';

const UserStories = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('userStories.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Stress Story */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('userStories.billingStress.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('userStories.billingStress.description')}
            </p>
          </div>

          {/* Window Damage Story */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('userStories.windowDamage.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('userStories.windowDamage.description')}
            </p>
          </div>

          {/* Service Request Story */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('userStories.serviceRequest.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('userStories.serviceRequest.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStories;
