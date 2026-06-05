import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { t } = useTranslation()
  const titleRef = useScrollReveal()
  const staggerRef = useScrollReveal()

  const values = [
    { title: t('about.value1Title'), desc: t('about.value1Desc'), delay: 1 },
    { title: t('about.value2Title'), desc: t('about.value2Desc'), delay: 2 },
    { title: t('about.value3Title'), desc: t('about.value3Desc'), delay: 3 },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#080b1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          {t('about.desc')}
        </p>
        <div ref={staggerRef} className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.delay}
              data-delay={v.delay}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#0f1225] border border-gray-200 dark:border-[#1e2140] hover:border-primary-400/30 dark:hover:border-primary-400/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
