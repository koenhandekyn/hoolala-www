import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials') || {};

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {testimonials.title || "What Our Customers Say"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {testimonials.subtitle || "Discover how Wazzat makes work easier"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(testimonials.items || []).map((testimonial: any, index: number) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
