export type Area = { slug: string; name: string; county: string; place: string; intro: string; paragraphs: string[]; calls: string[]; nearby: string[]; title: string; faqs: {question: string; answer: string}[]; sources: {label: string; url: string}[]; };
import hoodData from './hoods.json';
export type Hood = { kind: 'hood'; slug: string; name: string; county: string; place?: string; intro: string; hero: string; title: string; description: string; [k: string]: any };
export const city: Area = {
  "intro": "Hydro jetting in Kent, Ohio starts with the property setup: a South End house, a licensed rental and a downtown kitchen can have different drain access and maintenance histories.",
  "paragraphs": [
    "Kent State University's South End mapping project documents railroad-worker homes using historic census records and Sanborn maps. That is useful building context, not proof that a house still has its original sewer. Identify pipe replacements and the cleanout before choosing a cleaning method.",
    "Kent licenses residential rentals through its Health and Community Development departments. In a rental, record which units and fixtures are affected and arrange access with the owner or manager. A shared building drain needs a different access plan from one kitchen branch.",
    "The city treats residential, commercial and industrial wastewater through its sanitary sewer collection system. A problem in a building drain or connecting line is not automatically a public-main blockage. If adjacent properties back up together, notify the utility as well as describing your own symptoms.",
    "For a property using onsite treatment, Portage County Health District oversees permitting and inspections and identifies soils evaluation as part of proper design. Cleaning a house drain does not restore a failed treatment tank or saturated disposal area. Confirm where the pipe discharges first."
  ],
  "faqs": [
    {
      "question": "Does my older Kent house need a camera inspection first?",
      "answer": "A camera inspection is useful when a main drain repeatedly backs up or the pipe condition is unknown. Kent's South End includes historic homes, but renovations and replacements mean house age alone cannot identify the drain material."
    },
    {
      "question": "What should I do if a drain backs up in my Kent rental?",
      "answer": "Identify the affected unit, manager and shared drain access before arranging work. Supply previous drain reports if available."
    },
    {
      "question": "Could my Kent backup involve the public sewer?",
      "answer": "The City of Kent Water Reclamation Division treats wastewater delivered through the sanitary collection system."
    },
    {
      "question": "What if my property uses septic?",
      "answer": "Confirm the connection first. Portage County Health District oversees onsite systems; pipe cleaning is not tank pumping or disposal-field repair."
    },
    {
      "question": "Can jetting repair a cracked line?",
      "answer": "No. It can remove suitable obstructions but cannot seal a crack, correct an offset or rebuild a collapsed section."
    },
    {
      "question": "What should I include in a request?",
      "answer": "Send the address, property type, affected fixtures, rental access contact if relevant, and any prior camera report."
    }
  ],
  "sources": [
    {
      "label": "Kent State South End housing research",
      "url": "https://communitygeography.kent.edu/index.php/2025/08/04/who-lived-here-mapping-kents-south-end/"
    },
    {
      "label": "Kent rental housing programs",
      "url": "https://www.kentohio.gov/living-here/housing/"
    },
    {
      "label": "Kent water reclamation",
      "url": "https://www.kentohio.gov/living-here/utilities/water-and-sewer/"
    },
    {
      "label": "Portage County onsite treatment guidance",
      "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
    }
  ],
  "slug": "kent",
  "name": "Kent",
  "county": "Portage",
  "place": "city",
  "nearby": [
    "stow",
    "streetsboro",
    "ravenna",
    "franklin-township"
  ],
  "calls": [
    "Does a South End house always have old sewer pipe?",
    "Why does a Kent rental need an access plan?",
    "Who treats Kent municipal wastewater?"
  ],
  "title": "Rental access and municipal wastewater"
};
export const hoods = hoodData as unknown as Hood[];
export const areas: any[] = [city, ...hoods];
export const areaBySlug: Record<string, any> = Object.fromEntries(areas.map((a) => [a.slug, a]));
