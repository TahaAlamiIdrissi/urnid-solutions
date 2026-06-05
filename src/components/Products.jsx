import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Products() {
  const { t } = useTranslation()
  const titleRef = useScrollReveal()
  const contentRef = useScrollReveal()

  const features = ['feat1', 'feat2', 'feat3', 'feat4', 'feat5', 'feat6']

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-[#0c0f20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('products.title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('products.subtitle')}</p>
        </div>

        <div
          ref={contentRef}
          className="rounded-2xl border border-gray-200 dark:border-[#1e2140] overflow-hidden bg-white dark:bg-[#0f1225] shadow-xl shadow-primary-500/5"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold rounded-full mb-4">
                {t('products.product1Tag')}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('products.product1Name')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{t('products.product1Desc')}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f, i) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300 group" style={{ animationDelay: `${i * 0.05}s` }}>
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t(`products.${f}`)}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-primary-500/20"
                >
                  {t('products.learnMore')}
                </a>
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all backdrop-blur-sm"
                >
                  {t('products.tryFree')}
                </a>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="bg-gradient-to-br from-primary-500/10 via-accent/5 to-primary-500/5 dark:from-primary-500/5 dark:via-accent/5 dark:to-[#0f1225] p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-xl border border-white/20 dark:border-[#1e2140] bg-white/60 dark:bg-[#0f1225]/80 backdrop-blur-sm p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 bg-gradient-to-r from-primary-400/40 to-primary-500/40 rounded" />
                    <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg bg-gradient-to-b from-primary-400/20 to-primary-500/10 border border-primary-400/10" />
                    <div className="h-20 rounded-lg bg-gradient-to-b from-accent/20 to-accent/10 border border-accent/10" />
                    <div className="h-20 rounded-lg bg-gradient-to-b from-emerald-400/20 to-emerald-500/10 border border-emerald-400/10" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-2.5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-2.5 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
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
