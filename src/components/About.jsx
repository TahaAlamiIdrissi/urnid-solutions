import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const values = [
    { title: t('about.value1Title'), desc: t('about.value1Desc') },
    { title: t('about.value2Title'), desc: t('about.value2Desc') },
    { title: t('about.value3Title'), desc: t('about.value3Desc') },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {t('about.desc')}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{v.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
