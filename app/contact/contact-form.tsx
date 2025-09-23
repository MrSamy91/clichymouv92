'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getEmailData = () => {
    const subjectText = formData.subject ? 
      formData.subject.charAt(0).toUpperCase() + formData.subject.slice(1) : 
      'Demande de contact';
    
    const body = `Bonjour,

Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Cordialement,
${formData.name}`;

    return { subjectText, body };
  };

  const handleGmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { subjectText, body } = getEmailData();
    
    // URL Gmail pré-remplie
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@ClichyMouv.fr&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir Gmail dans un nouvel onglet
    window.open(gmailUrl, '_blank');
  };


  return (
    <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 font-subtitle">
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
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3  !bg-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 !bg-white/20 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 !bg-white/10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white [&>option]:!bg-white/20 [&>option]:text-gray-900"
            required
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="inscription">Inscription aux activités</option>
            <option value="information">Demande d&apos;information</option>
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
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border !bg-white/20 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Écrivez votre message ici..."
            required
          ></textarea>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGmailSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.6L12 11.821l8.764-8H22.364C23.268 3.821 24 4.553 24 5.457z"/>
            </svg>
            Envoyer via Gmail
          </button>
          
        </div>
      </form>
    </div>
  );
}