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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="URNID SOLUTIONS" className="w-8 h-8" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">URNID SOLUTIONS</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.key} href={l.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {t(`nav.${l.key}`)}
              </a>
            ))}
            <button onClick={toggleLang} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-2 py-1 border border-gray-300 dark:border-gray-600 rounded">
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="#contact" className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
              {t('nav.getStarted')}
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300">
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

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {links.map(l => (
              <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600">
                {t(`nav.${l.key}`)}
              </a>
            ))}
            <button onClick={toggleLang} className="block py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg">
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
