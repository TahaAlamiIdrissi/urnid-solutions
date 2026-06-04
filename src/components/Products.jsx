import { useTranslation } from 'react-i18next'

export default function Products() {
  const { t } = useTranslation()

  const features = ['feat1', 'feat2', 'feat3', 'feat4', 'feat5', 'feat6']

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('products.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('products.subtitle')}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full mb-4">
                {t('products.product1Tag')}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('products.product1Name')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{t('products.product1Desc')}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`products.${f}`)}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                  {t('products.learnMore')}
                </a>
                <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:border-primary-300 transition-colors">
                  {t('products.tryFree')}
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-gray-800 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  <div className="h-20 bg-gray-100 dark:bg-gray-700/50 rounded" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded" />
                    <div className="h-12 bg-gray-100 dark:bg-gray-700/50 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
