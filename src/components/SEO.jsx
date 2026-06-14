import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function SEO() {
  const { i18n } = useTranslation()
  const isFrench = i18n.language === 'fr'
  const lang = isFrench ? 'fr' : 'en'

  const title = isFrench
    ? 'URNID SOLUTIONS — Solutions SaaS sur mesure pour les professionnels au Maroc'
    : 'URNID SOLUTIONS — Custom SaaS Solutions for Professionals in Morocco'

  const description = isFrench
    ? 'URNID SOLUTIONS crée des logiciels SaaS simples et modernes pour les PME marocaines. Découvrez ElectroStock, notre solution de gestion de stock pour les professionnels de l\'électricité.'
    : 'URNID SOLUTIONS builds simple, modern SaaS software for Moroccan SMEs. Discover ElectroStock, our stock management solution for electrical professionals.'

  const ogUrl = isFrench
    ? 'https://urnid-solutions.com/'
    : 'https://urnid-solutions.com/?lang=en'

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:locale" content={isFrench ? 'fr_FR' : 'en_US'} />
      <link rel="canonical" href="https://urnid-solutions.com/" />
      <link rel="alternate" href="https://urnid-solutions.com/" hreflang="fr" />
      <link rel="alternate" href="https://urnid-solutions.com/?lang=en" hreflang="en" />
      <link rel="alternate" href="https://urnid-solutions.com/" hreflang="x-default" />
    </Helmet>
  )
}
