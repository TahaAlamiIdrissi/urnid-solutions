import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const { t } = useTranslation()
  const titleRef = useScrollReveal()
  const staggerRef = useScrollReveal()

  const testimonials = [
    { quote: t('testimonials.quote1'), name: t('testimonials.name1'), role: t('testimonials.role1'), delay: 1 },
    { quote: t('testimonials.quote2'), name: t('testimonials.name2'), role: t('testimonials.role2'), delay: 2 },
    { quote: t('testimonials.quote3'), name: t('testimonials.name3'), role: t('testimonials.role3'), delay: 3 },
  ]

  return (
    <section className="py-20 bg-white dark:bg-[#080b1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('testimonials.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('testimonials.subtitle')}</p>
        </div>
        <div ref={staggerRef} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.delay}
              data-delay={t.delay}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-[#0f1225] border border-gray-200 dark:border-[#1e2140] hover:border-primary-400/30 dark:hover:border-primary-400/20 transition-all duration-500"
            >
              <svg className="w-8 h-8 text-primary-300 dark:text-primary-700 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-[#1e2140]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent flex items-center justify-center text-white text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
