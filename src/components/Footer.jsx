import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="URNID SOLUTIONS" className="w-8 h-8" />
              <span className="text-lg font-bold text-white">URNID SOLUTIONS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-primary-400 transition-colors">{t('footer.home')}</a></li>
              <li><a href="#products" className="hover:text-primary-400 transition-colors">{t('footer.productsLink')}</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition-colors">{t('footer.pricingLink')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">{t('footer.about')}</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">{t('footer.contactLink')}</a></li>
              <li><a href="#faq" className="hover:text-primary-400 transition-colors">{t('footer.faqLink')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} URNID SOLUTIONS. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
