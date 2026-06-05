import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const { t } = useTranslation()
  const titleRef = useScrollReveal()
  const subtitleRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-[#080b1a] dark:via-[#0c1030] dark:to-[#080b1a]" />
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 animate-mesh"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 50%)',
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-primary-400/10 dark:bg-primary-400/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl animate-float-slow" style={{ animationDelay: '-5s' }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p
            ref={titleRef}
            className="text-primary-500 dark:text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4"
          >
            {t('hero.company')}
          </p>
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-primary-200 dark:to-accent-light bg-clip-text text-transparent"
          >
            {t('hero.title')}
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            {t('hero.subtitle')}
          </p>
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 animate-glow"
            >
              {t('hero.ctaProducts')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-primary-500/10"
            >
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors animate-float"
        style={{ animationDuration: '3s' }}
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
