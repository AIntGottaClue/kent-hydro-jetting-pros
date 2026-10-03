import { siteConfig } from '../data/siteConfig'

export const SITE_URL = siteConfig.origin

export const business = {
  name: siteConfig.brand,
  description:
    'Kent Hydro Jetting Pros is a hydro jetting company that clears grease, roots, scale and sludge from residential and commercial drain and sewer lines in Kent, Ohio and nearby towns.',
  shortDescription:
    'Hydro jetting for residential and commercial drain and sewer lines in Kent, Ohio and surrounding communities.',
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phoneHref}`,
  phoneE164: siteConfig.phoneHref,
  city: 'Kent',
  region: 'OH',
  regionName: 'Ohio',
  country: 'US',
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hydro-jetting', label: 'Hydro Jetting' },
  { href: '/services', label: 'Services' },
  { href: '/our-process', label: 'Our Process' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const

export const footerServiceLinks = [
  { href: '/hydro-jetting', label: 'Hydro Jetting' },
  { href: '/services/residential-drain-cleaning', label: 'Residential Drain Cleaning' },
  { href: '/services/commercial-grease-lines', label: 'Commercial and Grease Lines' },
  { href: '/services/sewer-camera-inspection', label: 'Sewer Camera Inspection' },
  { href: '/our-process', label: 'Our Process' },
] as const

export const serviceAreas = [
  'Kent',
  'Stow',
  'Ravenna',
  'Streetsboro',
  'Hudson',
  'Tallmadge',
  'Cuyahoga Falls',
  'Munroe Falls',
  'Brimfield',
  'Franklin Township',
  'Rootstown',
  'Aurora',
] as const

export const serviceOptions = [
  'Hydro Jetting',
  'Residential Drain Cleaning',
  'Commercial and Grease Lines',
  'Sewer Camera Inspection',
  'Not sure yet',
] as const
