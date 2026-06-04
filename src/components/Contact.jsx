import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
        </div>
        {submitted ? (
          <div className="text-center p-8 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-800 dark:text-green-200 font-medium">{t('contact.success')}</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.nameLabel')}</label>
                <input type="text" required placeholder={t('contact.placeholderName')} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.emailLabel')}</label>
                <input type="email" required placeholder={t('contact.placeholderEmail')} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.messageLabel')}</label>
                <textarea rows={4} required placeholder={t('contact.placeholderMessage')} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-sm resize-none" />
              </div>
              <button type="submit" className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm">
                {t('contact.submit')}
              </button>
            </form>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
              {t('contact.orEmail')}{' '}
              <a href="mailto:contact@urnidsolutions.com" className="text-primary-600 dark:text-primary-400 hover:underline">contact@urnidsolutions.com</a>
            </p>
          </>
        )}
      </div>
    </section>
  )
}
