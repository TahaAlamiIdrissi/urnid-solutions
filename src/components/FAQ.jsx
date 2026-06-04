import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { faqItems } from '../utils/constants'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('faq.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('faq.subtitle')}</p>
        </div>
        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = open === item
            return (
              <div key={item} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : item)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white pr-4">{t(`faq.${item}`)}</span>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t(`faq.a${item.slice(1)}`)}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
