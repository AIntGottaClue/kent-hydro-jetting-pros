import { SITE_URL, business } from '../lib/site';
import { areas } from '../data/areas';
import { servicePages, guidePages } from '../data/servicePages';
export function GET() {
  const body = `# ${business.name}\n\n> ${business.shortDescription}\n\n## Services\n- Hydro Jetting: ${SITE_URL}/hydro-jetting/\n${servicePages.map((s) => `- ${s.name}: ${SITE_URL}/services/${s.slug}/`).join('\n')}\n\n## Guides\n${guidePages.map((g) => `- ${g.name}: ${SITE_URL}/guides/${g.slug}/`).join('\n')}\n\n## Neighborhoods\n${areas.map((a) => `- ${a.name}, Ohio: ${SITE_URL}/service-areas/${a.slug}/`).join('\n')}\n\n## Contact\n- Phone: ${business.phoneDisplay}\n- ${SITE_URL}/contact/\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
