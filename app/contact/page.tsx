import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Clichymouv92',
  description: 'Contactez l\'association Clichymouv92 pour plus d\'informations sur nos activités',
};

export default async function ContactPage() {
  return (
    <div>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Contactez-nous
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-indigo-600 text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Adresse</h4>
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
                    <h4 className="font-semibold text-gray-900 dark:text-white">Téléphone</h4>
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
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      contact@clichymouv92.fr
                    </p>
                  </div>
                </div>

                
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Envoyez-nous un message
              </h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="inscription">Inscription aux activités</option>
                    <option value="information">Demande d'information</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Écrivez votre message ici..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Comment nous trouver
            </h3>
            <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Carte interactive Google Maps<br />
                <span className="text-sm">(Intégration à venir)</span>
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Métro ligne 13 - Station Mairie de Clichy<br />
                Bus 54, 138, 174 - Arrêt République
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Clichymouv92. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}