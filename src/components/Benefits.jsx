import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Benefits() {
  const { t } = useTranslation()
  const titleRef = useScrollReveal()
  const staggerRef = useScrollReveal()

  const stats = [
    { value: t('benefits.stat1Value'), label: t('benefits.stat1Label'), desc: t('benefits.stat1Desc'), delay: 1 },
    { value: t('benefits.stat2Value'), label: t('benefits.stat2Label'), desc: t('benefits.stat2Desc'), delay: 2 },
    { value: t('benefits.stat3Value'), label: t('benefits.stat3Label'), desc: t('benefits.stat3Desc'), delay: 3 },
  ]

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-[#080b1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('benefits.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('benefits.subtitle')}</p>
        </div>
        <div ref={staggerRef} className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.delay}
              data-delay={s.delay}
              className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-[#0f1225] border border-gray-200 dark:border-[#1e2140] hover:border-primary-400/30 dark:hover:border-primary-400/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5"
            >
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent mb-2">
                {s.value}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{s.label}</p>
              <p className="text-gray-600 dark:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
