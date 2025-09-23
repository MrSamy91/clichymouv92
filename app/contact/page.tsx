import { Metadata } from 'next';
import ContactForm from './contact-form';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Contact - ClichyMouv',
  description: 'Contactez l\'association ClichyMouv pour plus d\'informations sur nos activités',
};

export default function ContactPage() {
  return (
    <div>
      <HeroSection 
        description="Nous sommes là pour répondre à toutes vos questions sur nos activités et services. N'hésitez pas à nous contacter !"
        showLogo={true}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 font-subtitle">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-indigo-600 text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-subtitle">Adresse</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Avenue de la République<br />
                      92110 Clichy-la-Garenne<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-indigo-600 text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-subtitle">Téléphone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +33 1 47 37 92 92
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-indigo-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-subtitle">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      contact@ClichyMouv.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}