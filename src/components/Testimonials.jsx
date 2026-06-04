import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    { quote: t('testimonials.quote1'), name: t('testimonials.name1'), role: t('testimonials.role1') },
    { quote: t('testimonials.quote2'), name: t('testimonials.name2'), role: t('testimonials.role2') },
    { quote: t('testimonials.quote3'), name: t('testimonials.name3'), role: t('testimonials.role3') },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('testimonials.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <svg className="w-8 h-8 text-primary-300 dark:text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t.quote}</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
