import { useTranslation } from 'react-i18next'
import { pricingPlans } from '../utils/constants'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('pricing.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('pricing.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-white dark:bg-gray-900 ring-2 ring-primary-500 shadow-xl scale-105' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm'}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  {t('pricing.popular')}
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t(`pricing.${plan.nameKey}`)}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{t(`pricing.${plan.descKey}`)}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{t(`pricing.${plan.priceKey}`)}</span>
                {plan.perKey && <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">{t(`pricing.${plan.perKey}`)}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`pricing.${f}`)}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${plan.popular ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                {t('pricing.cta')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
