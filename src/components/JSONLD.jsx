import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function JSONLD() {
  const { i18n } = useTranslation()
  const isFrench = i18n.language === 'fr'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'URNID SOLUTIONS',
    legalName: 'URNID SOLUTIONS SARL AU',
    alternateName: 'URNID SOLUTIONS',
    url: 'https://urnid-solutions.com/',
    logo: 'https://urnid-solutions.com/images/logo.png',
    description: isFrench
      ? 'Créateur de logiciels SaaS pour les PME marocaines'
      : 'SaaS software creator for Moroccan SMEs',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Taha Alami Idrissi'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '150, Avenue Haj Omar Riffi, 1er étage, Appt 03',
      addressLocality: 'Casablanca',
      addressRegion: 'Grand Casablanca',
      postalCode: '20000',
      addressCountry: 'MA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'taha.alami.idrissi@gmail.com',
      contactType: 'sales'
    },
    identifier: '003983857000034',
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'ElectroStock',
        description: isFrench
          ? 'Logiciel de gestion de stock pour les professionnels des fournitures électriques'
          : 'Stock management software for electrical supply professionals',
        url: 'https://urnid-solutions.com/#products',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'MAD',
          price: '800',
          offerCount: '1'
        }
      }
    ],
    knowsAbout: ['SaaS', 'Gestion de stock', 'Stock Management', 'Logiciel professionnel'],
    areaServed: 'MA',
    sameAs: [
      'https://urnid-solutions.com/'
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
