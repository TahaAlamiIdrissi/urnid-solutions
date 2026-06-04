import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #818cf8 0%, transparent 50%)`
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4">
            {t('hero.company')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight whitespace-pre-line mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary-600/25">
              {t('hero.ctaProducts')}
            </a>
            <a href="#contact" className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 transition-colors">
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
