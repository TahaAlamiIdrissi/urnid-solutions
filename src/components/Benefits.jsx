import { useTranslation } from 'react-i18next'

export default function Benefits() {
  const { t } = useTranslation()

  const stats = [
    { value: t('benefits.stat1Value'), label: t('benefits.stat1Label'), desc: t('benefits.stat1Desc') },
    { value: t('benefits.stat2Value'), label: t('benefits.stat2Label'), desc: t('benefits.stat2Desc') },
    { value: t('benefits.stat3Value'), label: t('benefits.stat3Label'), desc: t('benefits.stat3Desc') },
  ]

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('benefits.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('benefits.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-8 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <p className="text-4xl sm:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">{s.value}</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.label}</p>
              <p className="text-gray-600 dark:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
