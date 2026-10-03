export type Area = {
  slug: string;
  name: string;
  county: string;
  place: string; // "city", "township", "village"
  intro: string;
  paragraphs: string[];
  calls: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: 'kent', name: 'Kent', county: 'Portage', place: 'city',
    intro: 'Kent is our home base. We clear drain and sewer lines for homes, rentals and businesses across the city.',
    paragraphs: [
      'Kent mixes older neighborhoods near downtown with newer homes toward the edges of the city, and the Cuyahoga River runs through the middle of it. That mix means a wide range of sewer pipe ages, materials and conditions, so we look at the line before deciding how to clean it.',
      'Student rentals, multi-unit buildings and downtown restaurants put steady demand on shared lines. Kitchens that run all day build grease on pipe walls, and rental properties often go through tenant turnover with a slow main drain no one has dealt with yet. Hydro jetting removes that buildup from the pipe walls instead of poking a hole through it.',
      'Because we are based here, Kent is where we can be most flexible about scheduling. Send a request with your address and what the drain is doing, and we will follow up.',
    ],
    calls: ['Slow main drains in older homes near downtown', 'Grease buildup in restaurant and food service lines', 'Rental and multi-unit properties with repeat backups'],
    nearby: ['stow', 'streetsboro', 'ravenna', 'franklin-township'],
  },
  {
    slug: 'stow', name: 'Stow', county: 'Summit', place: 'city',
    intro: 'We provide hydro jetting for Stow homes and businesses, from older sewer laterals to busy commercial kitchens.',
    paragraphs: [
      'Stow sits just southwest of Kent in Summit County, with long-established residential streets and busy commercial corridors close together. Older homes can have aging lateral lines where roots and scale narrow the pipe over time, while newer subdivisions tend to see grease and debris problems in kitchen and laundry lines.',
      'For homeowners, recurring slow drains that come back soon after snaking are a common reason to call. For businesses along the shopping and dining corridors, scheduled maintenance jetting helps keep grease lines clear before they back up during service hours.',
      'When access allows, we run a camera through the line first so the plan is based on what is actually in the pipe.',
    ],
    calls: ['Roots in older sewer laterals', 'Recurring clogs that return after snaking', 'Maintenance jetting for restaurants and retail kitchens'],
    nearby: ['kent', 'tallmadge', 'munroe-falls', 'hudson'],
  },
  {
    slug: 'ravenna', name: 'Ravenna', county: 'Portage', place: 'city',
    intro: 'Ravenna is the Portage County seat, and we handle hydro jetting for its homes, rentals and downtown businesses.',
    paragraphs: [
      'Ravenna has a historic center with older buildings and a long stretch of established neighborhoods around it. Older construction often means older sewer pipe, and older pipe tends to collect roots, scale and sediment at joints and low spots.',
      'Downtown storefronts, offices and small restaurants share the same concern as homes: a line that keeps slowing down is usually carrying buildup on the walls. Jetting scours the full inside of the pipe, and a follow-up camera pass shows the result.',
      'If you are east of Kent and unsure whether we cover your street, include the address in your request and we will confirm.',
    ],
    calls: ['Older sewer pipe with scale and sediment', 'Downtown storefront and small kitchen lines', 'Basement floor drains that back up in heavy use'],
    nearby: ['kent', 'rootstown', 'brimfield', 'streetsboro'],
  },
  {
    slug: 'streetsboro', name: 'Streetsboro', county: 'Portage', place: 'city',
    intro: 'Streetsboro homes, warehouses and restaurants rely on clear drain lines. We handle residential and commercial jetting here.',
    paragraphs: [
      'Streetsboro has grown with a mix of newer residential developments, commercial strips and light industrial properties near the highway. Newer homes still develop grease, soap and debris buildup in kitchen and laundry lines, and sometimes construction debris or roots show up in lines that have not been cleaned before.',
      'Restaurants and food service businesses along the commercial corridors are the most common commercial calls. Grease lines need regular attention, and a maintenance schedule built from what the camera shows is usually better than waiting for a backup.',
      'Floor and trench drains at commercial and light industrial properties can be jetted as well. Tell us what the drain serves when you send your request.',
    ],
    calls: ['Grease lines at restaurants and food service sites', 'Debris and buildup in newer residential lines', 'Floor and trench drains at commercial properties'],
    nearby: ['kent', 'hudson', 'ravenna', 'aurora'],
  },
  {
    slug: 'hudson', name: 'Hudson', county: 'Summit', place: 'city',
    intro: 'Hydro jetting for Hudson homes and businesses, including larger residential properties and downtown restaurants.',
    paragraphs: [
      'Hudson has a historic downtown, established neighborhoods and plenty of larger residential properties with long sewer laterals. A longer line has more room for roots, offsets and buildup, and it is harder to judge by symptoms alone, which is why a camera inspection before jetting is useful.',
      'Mature trees are part of the landscape here, and roots finding their way into joints is a regular cause of slow drains and repeat backups. With the right nozzle, jetting cuts and flushes the roots, and the camera shows how they are getting in so you know what to expect.',
      'Downtown restaurants and shops have their own demands, especially on grease lines. We can set up maintenance jetting around your hours.',
    ],
    calls: ['Tree roots in long residential laterals', 'Camera inspection before and after jetting', 'Maintenance jetting for downtown kitchens'],
    nearby: ['stow', 'streetsboro', 'tallmadge', 'aurora'],
  },
  {
    slug: 'tallmadge', name: 'Tallmadge', county: 'Summit', place: 'city',
    intro: 'We clear sewer and drain lines for Tallmadge homes and businesses with high-pressure hydro jetting.',
    paragraphs: [
      'Tallmadge is a mostly residential city in Summit County with a historic circle at its center and neighborhoods of varying ages spreading out from it. Homes from different eras mean different pipe materials, and each reacts differently to buildup, roots and age.',
      'A frequent call here is a basement floor drain or main line that gurgles or backs up when several fixtures run at once. That pattern usually points to buildup further down the line rather than a single clogged fixture, which is the kind of problem jetting is built for.',
      'We match nozzle and pressure to the pipe material and condition, and if the camera shows damage that jetting could make worse, we will talk through it with you first.',
    ],
    calls: ['Gurgling fixtures and floor drain backups', 'Mixed pipe materials in older and newer homes', 'Light commercial lines along main roads'],
    nearby: ['stow', 'cuyahoga-falls', 'munroe-falls', 'hudson'],
  },
  {
    slug: 'cuyahoga-falls', name: 'Cuyahoga Falls', county: 'Summit', place: 'city',
    intro: 'Hydro jetting for Cuyahoga Falls homes, rentals and downtown businesses, along the Cuyahoga River.',
    paragraphs: [
      'Cuyahoga Falls is one of the larger communities we serve, with a busy downtown, many established neighborhoods and a good number of rental and multi-unit properties. The older parts of the city may have older sewer pipe that collects scale and roots.',
      'Restaurants and bars downtown generate grease that builds on pipe walls over time. Jetting removes it from the walls themselves, and a maintenance schedule keeps the line from reaching the point of a backup during a busy night.',
      'For homeowners, repeat clogs are the usual reason to call. If snaking helps for a few weeks and then the drain slows again, the buildup is probably still on the pipe walls.',
    ],
    calls: ['Grease lines at downtown restaurants', 'Rental and multi-unit properties', 'Repeat clogs after snaking in older homes'],
    nearby: ['munroe-falls', 'tallmadge', 'stow', 'kent'],
  },
  {
    slug: 'munroe-falls', name: 'Munroe Falls', county: 'Summit', place: 'city',
    intro: 'We serve Munroe Falls homes and small businesses with hydro jetting and sewer camera inspection.',
    paragraphs: [
      'Munroe Falls is a small city between Kent and Cuyahoga Falls, close to the Cuyahoga River. Mostly residential streets, a few commercial properties and a mix of home ages make for a wide range of line conditions in a small area.',
      'Homeowners here most often call about slow main drains, roots in lateral lines and floor drains that back up. Because the area is compact, we can often cover Munroe Falls on the same trip as nearby work in Kent or Stow.',
      'A camera pass before jetting shows what is causing the problem, and one after shows the result.',
    ],
    calls: ['Slow main drains in residential streets', 'Roots in lateral lines', 'Floor drain backups'],
    nearby: ['kent', 'stow', 'cuyahoga-falls', 'tallmadge'],
  },
  {
    slug: 'brimfield', name: 'Brimfield', county: 'Portage', place: 'township',
    intro: 'Hydro jetting for Brimfield homes and businesses between Kent and Ravenna.',
    paragraphs: [
      'Brimfield is a township in Portage County between Kent and Ravenna, with residential neighborhoods and commercial properties along the main road through it. Some properties here connect to public sewer and others do not, so tell us what your property uses when you send a request.',
      'For homes on a sewer lateral, the common issues are roots and slow main drains. For commercial properties, grease lines and floor drains are the usual calls. We will tell you honestly whether jetting is the right fit once we know your setup.',
      'We are close by in Kent, so Brimfield is within our regular service range.',
    ],
    calls: ['Slow main drains and root problems on sewer laterals', 'Commercial grease lines along the main road', 'Floor drains at businesses'],
    nearby: ['kent', 'ravenna', 'franklin-township', 'rootstown'],
  },
  {
    slug: 'franklin-township', name: 'Franklin Township', county: 'Portage', place: 'township',
    intro: 'We provide hydro jetting in Franklin Township, just outside Kent in Portage County.',
    paragraphs: [
      'Franklin Township borders Kent and mixes residential neighborhoods with open land and commercial properties. Because of that mix, line conditions and setups vary a lot from one property to the next.',
      'If your property is on a sewer line, we can camera inspect and jet it. If you are not sure what your property connects to, say so in your request and we will help you sort out whether jetting applies before anything is scheduled.',
      'Calls here often involve slow drains that keep returning, roots in older laterals and grease lines at small commercial sites.',
    ],
    calls: ['Recurring slow drains', 'Roots in older laterals', 'Grease lines at small commercial sites'],
    nearby: ['kent', 'brimfield', 'ravenna', 'rootstown'],
  },
  {
    slug: 'rootstown', name: 'Rootstown', county: 'Portage', place: 'township',
    intro: 'Hydro jetting for Rootstown homes and businesses south of Ravenna and Kent.',
    paragraphs: [
      'Rootstown is a township in Portage County with a mix of residential properties, farmland and a few commercial sites. Some properties here are on public sewer and others are not, so details matter when you ask about service.',
      'For properties that do have a sewer or drain line we can reach, we jet and inspect it the same way we would in Kent. Mature trees on larger lots can mean roots in lateral lines, and long runs of pipe are harder to diagnose without a camera.',
      'Include your address and describe what the drain is doing, and we will confirm whether we can help.',
    ],
    calls: ['Roots on larger residential lots', 'Long lateral runs that are hard to diagnose', 'Commercial and institutional drain lines'],
    nearby: ['ravenna', 'kent', 'brimfield', 'franklin-township'],
  },
  {
    slug: 'aurora', name: 'Aurora', county: 'Portage', place: 'city',
    intro: 'Hydro jetting for Aurora homes and businesses, including larger properties and busy kitchens.',
    paragraphs: [
      'Aurora is in the northern part of Portage County, with newer residential developments, larger homes and commercial corridors. Larger homes tend to have more fixtures and longer drain runs, and that adds more places for buildup to collect.',
      'Newer construction does not rule out drain problems. Grease, soap residue, wipes and construction debris can all build up, and roots can still find their way into laterals as landscaping matures.',
      'Restaurants and food service businesses are served the same way as elsewhere: camera first when access allows, jetting matched to the pipe, and a follow-up pass to confirm the result.',
    ],
    calls: ['Buildup in long drain runs at larger homes', 'Roots as landscaping matures', 'Restaurant and food service grease lines'],
    nearby: ['streetsboro', 'hudson', 'kent', 'ravenna'],
  },
];

export const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
