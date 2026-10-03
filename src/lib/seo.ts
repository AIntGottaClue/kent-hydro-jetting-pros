import { SITE_URL, business, serviceAreas } from './site'

export function plumberSchema(path: string, pageName: string) {
  const pageUrl = `${SITE_URL}${path === '/' ? '' : path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Plumber', 'LocalBusiness'],
        '@id': `${SITE_URL}/#business`,
        name: business.name,
        description: business.description,
        url: SITE_URL,
        telephone: business.phoneE164,
        image: `${SITE_URL}/images/hydro-jetting-hero.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: business.city,
          addressRegion: business.region,
          addressCountry: business.country,
        },
        areaServed: serviceAreas.map((town) => ({
          '@type': 'City',
          name: `${town}, ${business.regionName}`,
        })),
        knowsAbout: [
          'Hydro jetting',
          'Drain cleaning',
          'Grease line jetting',
          'Sewer camera inspection',
          'Root removal from sewer lines',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageName,
        isPartOf: { '@type': 'WebSite', name: business.name, url: SITE_URL },
        about: { '@id': `${SITE_URL}/#business` },
      },
    ],
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
