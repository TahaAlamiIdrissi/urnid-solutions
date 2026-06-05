import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { faqItems } from '../utils/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(null)
  const titleRef = useScrollReveal()
  const listRef = useScrollReveal()

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-[#0c0f20]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('faq.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('faq.subtitle')}</p>
        </div>
        <div ref={listRef} className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = open === item
            return (
              <div
                key={item}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white dark:bg-[#0f1225] border-primary-400/30 dark:border-primary-400/20 shadow-lg shadow-primary-500/5'
                    : 'bg-white/80 dark:bg-[#0f1225]/80 border-gray-200 dark:border-[#1e2140] hover:border-gray-300 dark:hover:border-[#282d50]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white pr-4">
                    {t(`faq.${item}`)}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-primary-500' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {t(`faq.a${item.slice(1)}`)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
