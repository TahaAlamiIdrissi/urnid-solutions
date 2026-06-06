import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/taha.alami.idrissi@gmail.com', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch {
      // Fallback: open mailto as a backup
      const name = data.get('name')
      const email = data.get('email')
      const message = data.get('message')
      window.location.href = `mailto:taha.alami.idrissi@gmail.com?subject=Contact URNID - ${name}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#080b1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</p>
        </div>

        {submitted ? (
          <div className="text-center p-8 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-800 dark:text-green-200 font-medium">{t('contact.success')}</p>
          </div>
        ) : (
          <div ref={formRef} className="rounded-2xl border border-gray-200 dark:border-[#1e2140] bg-gray-50 dark:bg-[#0f1225] p-8 shadow-xl shadow-primary-500/5">
            <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.nameLabel')}</label>
                <input
                  type="text" name="name" required placeholder={t('contact.placeholderName')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-[#1e2140] bg-white dark:bg-[#080b1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.emailLabel')}</label>
                <input
                  type="email" name="email" required placeholder={t('contact.placeholderEmail')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-[#1e2140] bg-white dark:bg-[#080b1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{t('contact.messageLabel')}</label>
                <textarea
                  rows={4} name="message" required placeholder={t('contact.placeholderMessage')}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-[#1e2140] bg-white dark:bg-[#080b1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary-500/20 text-sm"
              >
                {t('contact.submit')}
              </button>
            </form>
            <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-6">
              {t('contact.orEmail')}{' '}
              <a href="mailto:taha.alami.idrissi@gmail.com" className="text-primary-500 dark:text-primary-400 hover:underline font-medium">
                taha.alami.idrissi@gmail.com
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
