import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 dark:bg-[#050712] text-gray-300">
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden ring-2 ring-primary-400/30">
                <img src="/images/logo.png" alt="URNID SOLUTIONS" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-white">URNID SOLUTIONS</span>
            </a>
            <p className="text-gray-400 text-sm mb-4 max-w-md">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.home')}</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.productsLink')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.pricingLink')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.about')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.contactLink')}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.faqLink')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 dark:border-[#1e2140]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} URNID SOLUTIONS. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
