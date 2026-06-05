import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
  }

  const links = [
    { key: 'home', href: '#hero' },
    { key: 'products', href: '#products' },
    { key: 'benefits', href: '#benefits' },
    { key: 'pricing', href: '#pricing' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 dark:bg-[#080b1a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-[#1e2140]/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-2 ring-primary-400/30 group-hover:ring-primary-400/60 transition-all">
                <img src="/images/logo.png" alt="URNID SOLUTIONS" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                URNID SOLUTIONS
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a
                  key={l.key}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-400 after:transition-all hover:after:w-full"
                >
                  {t(`nav.${l.key}`)}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors px-2.5 py-1 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-400"
              >
                {i18n.language === 'en' ? 'FR' : 'EN'}
              </button>
              <a
                href="#contact"
                className="px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
              >
                {t('nav.getStarted')}
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-[#080b1a]/98 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            {links.map(l => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {t(`nav.${l.key}`)}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="text-lg font-medium text-gray-500 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-lg shadow-primary-500/20"
            >
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
