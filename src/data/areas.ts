export type Area = { slug: string; name: string; county: string; place: string; intro: string; paragraphs: string[]; calls: string[]; nearby: string[]; title: string; faqs: {question: string; answer: string}[]; sources: {label: string; url: string}[]; };
export const areas: Area[] = [
  {
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
  },
  {
    "intro": "Hydro jetting in Stow, Ohio should account for older subdivisions as well as later housing. The city plan documents a range of home ages, while Summit County provides sanitary sewer service.",
    "paragraphs": [
      "Stow's comprehensive plan reports that half its housing units in the study period were built before 1980. This is dated planning evidence, not a description of every street today. Renovation records and a camera provide better evidence of the drain now in place.",
      "The city names Summit County Department of Sanitary Sewer Services as the sanitary provider. Stow's water department is a different contact. Distinguish a water-supply complaint from wastewater that cannot leave a building.",
      "In a detached home, identify the private cleanout and changed plumbing from additions. In a multi-unit building, confirm which units share the affected section. A kitchen branch that slows during dishwashing and a lowest-level fixture that backs up during several fixtures' use need different access checks.",
      "For onsite treatment, Summit County Public Health uses site and soil evaluation to decide what new or replacement system can fit the lot. Cleaning cannot fix a failed disposal area. Stow Building and Engineering oversee construction; check the scope if a cleaning inspection leads to replacement or excavation."
    ],
    "faqs": [
      {
        "question": "Is hydro jetting suitable for an older Stow home?",
        "answer": "It may be suitable if the line is sound. Stow's plan documents homes from different eras, so check pipe condition and repair history before selecting high-pressure cleaning."
      },
      {
        "question": "Who should I call if several Stow homes have sewer backups?",
        "answer": "The city names Summit County Department of Sanitary Sewer Services, separately from its water department."
      },
      {
        "question": "What if several homes back up together?",
        "answer": "Tell the county sanitary operator and describe the timing. A public-system issue is not automatically a private drain blockage."
      },
      {
        "question": "Does jetting solve a wet septic area?",
        "answer": "No. Site and soil performance require a separate onsite assessment."
      },
      {
        "question": "Who checks construction requirements?",
        "answer": "Stow Building and Engineering can identify requirements for a proposed repair or excavation."
      },
      {
        "question": "What should a property manager send?",
        "answer": "Include units affected, access arrangements, prior camera footage and whether symptoms follow rain or ordinary fixture use."
      }
    ],
    "sources": [
      {
        "label": "Stow housing plan",
        "url": "https://www.stowohio.gov/DocumentCenter/View/3452"
      },
      {
        "label": "Stow utility and building contacts",
        "url": "https://www.stowohio.gov/299/New-Residents"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "stow",
    "name": "Stow",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "kent",
      "tallmadge",
      "munroe-falls",
      "hudson"
    ],
    "calls": [
      "Why ask when a Stow house was built?",
      "Who provides Stow sanitary sewer?",
      "What if several homes back up together?"
    ],
    "title": "Housing eras and the county sewer operator"
  },
  {
    "intro": "Hydro jetting in Ravenna, Ohio should distinguish a Main Street historic building from the municipal wastewater system. Downtown history provides context, but the private drain needs its own inspection.",
    "paragraphs": [
      "Ravenna's historic district follows Main Street into nearby neighborhoods and includes surviving Riddle Block buildings. In a converted storefront or older house, find where later plumbing joins the earlier building drain. Historic designation does not identify pipe material.",
      "The city's wastewater page dates its first sewers and treatment plant to 1907 and documents later replacements. That dates municipal development, not an individual lateral. The current facility serves residential and commercial customers.",
      "For a downtown kitchen, distinguish the branch drain, grease-control equipment and building sewer. Arrange entry through occupied business space with the manager. Servicing a grease trap is not the same task as cleaning downstream pipe.",
      "Outside a confirmed municipal connection, Portage County Health District is the source for onsite sewage permitting, inspections and soil evaluation. A house-pipe blockage and a saturated disposal area need different responses. If several properties back up together after rain, report the shared pattern to the utility."
    ],
    "faqs": [
      {
        "question": "Should I inspect the drain before jetting an older Ravenna home?",
        "answer": "A camera inspection can help when the material or condition is unknown. Ravenna's historic building stock does not prove that each private drain still has its original pipe."
      },
      {
        "question": "Could a backup at my Ravenna home involve the city sewer?",
        "answer": "Ravenna Water Reclamation Facility serves residential and commercial customers on its collection system."
      },
      {
        "question": "How should a Main Street business prepare?",
        "answer": "Identify the drain, grease-control setup and building sewer access; arrange entry with the manager."
      },
      {
        "question": "Who handles onsite treatment?",
        "answer": "Portage County Health District publishes permitting, inspection and soil-evaluation guidance."
      },
      {
        "question": "Can jetting restore poor soil absorption?",
        "answer": "No. Cleaning a pipe cannot change the receiving soil or repair a failed treatment area."
      },
      {
        "question": "What if neighboring properties are affected?",
        "answer": "Notify the utility. One private drain service should not be assumed to resolve a shared main problem."
      }
    ],
    "sources": [
      {
        "label": "Ravenna historic district",
        "url": "https://www.ravennaoh.gov/departments/building/historic-district/"
      },
      {
        "label": "Ravenna wastewater history",
        "url": "https://www.ravennaoh.gov/departments/utilities/waste-water/"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      }
    ],
    "slug": "ravenna",
    "name": "Ravenna",
    "county": "Portage",
    "place": "city",
    "nearby": [
      "kent",
      "rootstown",
      "brimfield",
      "streetsboro"
    ],
    "calls": [
      "Does a historic Ravenna address prove clay pipe?",
      "Who treats municipal wastewater?",
      "How should a Main Street business prepare?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Streetsboro, Ohio is not only a new-home issue. The adopted 2024 master plan documents homes from several decades, apartments and manufactured housing, each with different access needs.",
    "paragraphs": [
      "Streetsboro's 2023/2024 master plan describes a large group of homes built between 1960 and 1999 alongside newer construction. It also documents apartments and manufactured housing. Do not assume every drain is new pipe or has its own exterior cleanout.",
      "The city directs sanitary sewer and septic inquiries to Portage County Water Resources. Confirm the address and actual connection first. Portage County Health District separately oversees onsite treatment permitting and inspections.",
      "In an apartment building, determine whether the blockage serves one unit, a stack or the shared building drain. At a manufactured-home property, identify where the home's plumbing joins a shared collection line and who controls access. Property type matters more than a citywide cleaning schedule.",
      "County health guidance treats soils evaluation as part of onsite system design. Rain-linked wastewater backups, runoff outside and treatment-area problems are different symptoms. County rules also list connection permits for the Streetsboro sanitary district; a new connection is separate from cleaning an existing drain."
    ],
    "faqs": [
      {
        "question": "Does a newer Streetsboro house still need a drain inspection?",
        "answer": "Yes, an inspection can still be useful for a recurring backup. Newer construction does not rule out damage or buildup, and Streetsboro's housing also includes homes from earlier decades."
      },
      {
        "question": "Who should arrange access if my Streetsboro home uses a shared drain?",
        "answer": "The owner or manager may control a shared collection line and its access points."
      },
      {
        "question": "Where do I check a sanitary connection?",
        "answer": "The city directs sewer and septic inquiries to Portage County Water Resources. Provide the street address."
      },
      {
        "question": "Who handles onsite treatment permitting?",
        "answer": "Portage County Health District provides the onsite treatment permitting and inspection guidance."
      },
      {
        "question": "Is adding a connection part of drain cleaning?",
        "answer": "No. County rules list connection permits for the Streetsboro district; scope that work separately."
      },
      {
        "question": "Does a newer house rule out damaged pipe?",
        "answer": "No. Age does not establish condition. Inspection should distinguish buildup from damage."
      }
    ],
    "sources": [
      {
        "label": "Streetsboro master plan, housing pages 23 to 24",
        "url": "https://storage.googleapis.com/proudcity/streetsborooh/2024/05/StreetsboroMasterPlan_FINAL-2024-0515.reduced.pdf"
      },
      {
        "label": "Streetsboro sanitary contact",
        "url": "https://www.cityofstreetsboro.com/question/who-do-i-contact-about-a-septic-system-or-sanitary-sewer/"
      },
      {
        "label": "Portage County sanitary connection rules",
        "url": "https://www.portagecounty-oh.gov/water-resources/pages/rules-and-regulations"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      }
    ],
    "slug": "streetsboro",
    "name": "Streetsboro",
    "county": "Portage",
    "place": "city",
    "nearby": [
      "kent",
      "hudson",
      "ravenna",
      "aurora"
    ],
    "calls": [
      "Are Streetsboro homes all new construction?",
      "Why identify apartments or manufactured homes?",
      "Where do I check a sanitary connection?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Hudson, Ohio should separate a private blockage from wet-weather stress on the public system. The city documents preserved historic homes and inflow-and-infiltration problems in sanitary sewers.",
    "paragraphs": [
      "Hudson's preservation guidance describes historic homes and the downtown district. Old buildings can have later plumbing replacements; review repair history rather than selecting a cleaning method from architectural age. Access through historic materials needs planning.",
      "Hudson transferred its sanitary sewer system to Summit County in 2016 and directs sanitary service requests to the county operator. The city water provider should not be assumed to handle a public sanitary complaint.",
      "The city's explanation of August 2024 flooding describes inflow through improper connections, groundwater infiltration through deficient pipes and flooded pumping equipment. A rain-linked backup may involve the collection system. Cleaning one private lateral cannot restore a pump station or remove excess groundwater from the network.",
      "For onsite treatment, Summit County Public Health requires parcel-specific site and soil evaluation for new or replacement systems. Hudson also requires approval when work changes historic building materials or appearance. That is not a blanket permit statement for routine drain cleaning; check the scope if inspection leads to exterior or structural repairs."
    ],
    "faqs": [
      {
        "question": "Who operates Hudson sanitary sewers?",
        "answer": "Summit County operates the transferred system; the city directs service requests to that department."
      },
      {
        "question": "Why does my Hudson basement back up when it rains?",
        "answer": "Hudson documents inflow, infiltration and pumping problems during the August 2024 flooding. Timing can distinguish a network concern from a private blockage."
      },
      {
        "question": "Can jetting fix a public pump failure?",
        "answer": "No. Cleaning a private drain does not restore public equipment."
      },
      {
        "question": "Does historic status require approval for all cleaning?",
        "answer": "The published preservation rule concerns changes to building materials or appearance. Do not extend it into an unsupported cleaning rule."
      },
      {
        "question": "What if inspection leads to exterior repair?",
        "answer": "Check city construction and historic-review requirements for that exact scope."
      },
      {
        "question": "Where does septic soil evaluation fit?",
        "answer": "The county health authority evaluates which onsite system can be installed. Pipe cleaning cannot replace that process."
      }
    ],
    "sources": [
      {
        "label": "Hudson sewer operator and wet-weather explanation",
        "url": "https://www.hudson.oh.us/822/Sewer"
      },
      {
        "label": "Hudson preservation requirements",
        "url": "https://www.hudson.oh.us/846/Historic-Preservation"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "hudson",
    "name": "Hudson",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "stow",
      "streetsboro",
      "tallmadge",
      "aurora"
    ],
    "calls": [
      "Who operates Hudson sanitary sewers?",
      "Why mention rainfall in a request?",
      "Can jetting fix a public pump failure?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Tallmadge, Ohio needs a sewer-district check before a cleaning plan. The city has two sanitary sewer districts and also identifies properties with septic systems.",
    "paragraphs": [
      "Tallmadge's 2017 Comprehensive Plan describes a housing mix dominated by detached homes and notes that newer homes are generally larger than older ones. Its figures describe the plan period, not a current housing count. Ask about additions and replaced pipe rather than inferring material from the house's age.",
      "The city lists District I as city-maintained and District II as county-owned and operated. A city utility bill alone does not settle who maintains the public sewer, because Tallmadge also bills connected District II residents. Give the full address when reporting a possible public-main problem.",
      "The city also publishes septic guidance. Summit County Public Health requires site and soil evaluation for new or replacement onsite systems and issues installation and alteration permits. A pipe blockage and a treatment-area problem need different assessments; cleaning cannot change soil absorption.",
      "Tallmadge explains that rain and melted snow become runoff and that storm drains discharge untreated to waterways. A house sewer, street catch basin and driveway culvert are different systems. Record whether the problem follows rainfall, indoor fixture use or both."
    ],
    "faqs": [
      {
        "question": "Who should I call about a public sewer backup in Tallmadge?",
        "answer": "District I public sewers are city-maintained; District II public sewers are county-operated. The right utility contact depends on the address."
      },
      {
        "question": "Does my Tallmadge utility bill tell me who maintains the sewer?",
        "answer": "Not by itself. Tallmadge also bills connected District II residents even though the county operates that system."
      },
      {
        "question": "Is my Tallmadge home on public sewer or septic?",
        "answer": "Check your property records or ask the utility about your address. Tallmadge has both sanitary sewer districts and properties with septic systems, so a city address alone does not settle the connection."
      },
      {
        "question": "Who should I contact if my Tallmadge septic system needs replacing?",
        "answer": "For a Summit County property, Summit County Public Health handles site and soil evaluation and installation or alteration permits. Confirm the exact parcel jurisdiction."
      },
      {
        "question": "Does a rain-linked backup always need jetting?",
        "answer": "No. Outside runoff, a private blockage and a public-system problem can need different responses."
      },
      {
        "question": "Can wastewater be diverted into a storm drain?",
        "answer": "No. Tallmadge explains that storm drains discharge runoff untreated. A sanitary blockage should not be diverted into that system."
      }
    ],
    "sources": [
      {
        "label": "Tallmadge 2017 housing plan",
        "url": "https://www.tallmadgeoh.gov/DocumentCenter/View/1336/Tallmadge-Comprehensive-Plan-2017-Update"
      },
      {
        "label": "Tallmadge sewer districts and septic guidance",
        "url": "https://tallmadgeoh.gov/723/Sewer-Services"
      },
      {
        "label": "Tallmadge runoff guidance",
        "url": "https://tallmadgeoh.gov/292/Storm-Water-Management"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "tallmadge",
    "name": "Tallmadge",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "stow",
      "cuyahoga-falls",
      "munroe-falls",
      "hudson"
    ],
    "calls": [
      "Why does the Tallmadge sewer district matter?",
      "Can the city bill identify the operator?",
      "Is every Tallmadge home on sanitary sewer?"
    ],
    "title": "Two sewer districts, different responsibilities"
  },
  {
    "intro": "Hydro jetting in Cuyahoga Falls, Ohio should include a clean-water connection check, not only drain buildup. The city has a stormwater inspection program for inflow and infiltration entering sanitary sewers.",
    "paragraphs": [
      "The city's downtown historic guidance recognizes nineteenth- and twentieth-century development. Historic commercial buildings and houses can have different access constraints, but their setting does not prove the age of the drain below them.",
      "The city stormwater program identifies improper connections and clean-water sources entering sanitary sewers on private property. Buyers and sellers must sign a stormwater inspection disclosure when a house is sold. A previous report can be useful evidence when investigating repeat wet-weather symptoms.",
      "The city says identified code violations must be repaired within 180 days after inspection. Jetting does not correct an improper connection. A cleaned pipe still has the wrong configuration if runoff enters where it should not.",
      "Describe rainfall or snowmelt timing and whether the issue is indoors or outside. A clogged branch, a sanitary lateral and stormwater inflow are different questions. Onsite system replacement in county health jurisdiction separately requires site and soil evaluation; a city name is not a soil diagnosis."
    ],
    "faqs": [
      {
        "question": "Could a stormwater connection be causing my Cuyahoga Falls backup?",
        "answer": "It identifies clean-water inflow, infiltration and improper sanitary connections on private property."
      },
      {
        "question": "Should I check the stormwater report when buying a Cuyahoga Falls home?",
        "answer": "The city says both buyer and seller must sign the stormwater inspection disclosure."
      },
      {
        "question": "Can jetting fix an improper connection?",
        "answer": "No. Cleaning and correcting the connection are separate tasks."
      },
      {
        "question": "What happens after a violation is identified?",
        "answer": "The city inspection page states that violations must be repaired within 180 days after inspection."
      },
      {
        "question": "Does a historic building have original sewer pipe?",
        "answer": "Not necessarily. Historic development evidence does not establish each private drain material."
      },
      {
        "question": "What should I send about a rain-linked backup?",
        "answer": "Provide the address, affected fixtures, rainfall timing and any city inspection or disclosure record."
      }
    ],
    "sources": [
      {
        "label": "Cuyahoga Falls stormwater inspection",
        "url": "https://www.cityofcf.com/services/stormwater-inspection"
      },
      {
        "label": "Cuyahoga Falls historic guidance",
        "url": "https://www.cityofcf.com/laws/downtown-historic-design-guidelines"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "cuyahoga-falls",
    "name": "Cuyahoga Falls",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "munroe-falls",
      "tallmadge",
      "stow",
      "kent"
    ],
    "calls": [
      "What is the city stormwater inspection for?",
      "Is there a disclosure when a house is sold?",
      "Can jetting fix an improper connection?"
    ],
    "title": "Clean-water connections and repeat backups"
  },
  {
    "intro": "Hydro jetting in Munroe Falls, Ohio begins by separating city water and stormwater from county-operated sanitary service. Give the address and the exact indoor fixture or outside drain affected.",
    "paragraphs": [
      "Munroe Falls lists its Water Division for public water and stormwater, while Summit County provides sanitary sewer service. Those are different systems even when charges relate to water use. A slow sink and a road catch basin retaining runoff need different investigations.",
      "For the building, collect any addition, renovation or pipe-replacement records. We do not assign a house age, lateral material or root problem from the city name. A camera report and cleanout location are useful property-specific evidence.",
      "If the lowest fixture backs up after several fixtures run, record the pattern and ask whether neighboring properties are affected. A shared sanitary complaint should reach the county operator; cleaning one private drain cannot correct all public network problems.",
      "The city Planning Commission reviews development and public or private utility proposals. If the task changes to altered utility work, identify the review scope first. Onsite treatment within county health jurisdiction requires separate site and soil evaluation for new or replacement systems; cleaning does not restore a failed disposal area."
    ],
    "faqs": [
      {
        "question": "Who handles sanitary sewer here?",
        "answer": "Summit County provides sanitary service. Munroe Falls handles public water and stormwater under its Water Division."
      },
      {
        "question": "Should I call Munroe Falls or the county about a sewer backup?",
        "answer": "No. The utility guide describes separate responsibilities."
      },
      {
        "question": "What if several properties back up together?",
        "answer": "Report the shared pattern and timing to the county sanitary operator."
      },
      {
        "question": "Is a street drain the same as a house sewer?",
        "answer": "No. Specify outside runoff versus wastewater from indoor fixtures."
      },
      {
        "question": "Who reviews changed utility development?",
        "answer": "The city Planning Commission lists public and private utilities among its responsibilities. Confirm the scope with the city."
      },
      {
        "question": "Can jetting repair a septic disposal area?",
        "answer": "No. Site and soil performance are treatment questions, not problems solved by pipe cleaning."
      }
    ],
    "sources": [
      {
        "label": "Munroe Falls utility responsibilities",
        "url": "https://munroefalls.com/1366/Utility-Services"
      },
      {
        "label": "Munroe Falls development review",
        "url": "https://munroefalls.com/176/Planning-Commission"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "munroe-falls",
    "name": "Munroe Falls",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "kent",
      "stow",
      "cuyahoga-falls",
      "tallmadge"
    ],
    "calls": [
      "Who handles sanitary sewer here?",
      "Does the city water bill settle a sanitary problem?",
      "What if several properties back up together?"
    ],
    "title": "City water, county sanitary sewer"
  },
  {
    "intro": "Hydro jetting in Brimfield Township, Ohio starts with a utility check. The township lists multiple water suppliers, county sanitary sewer service and a separate health contact for septic systems.",
    "paragraphs": [
      "Brimfield lists Portage County, Aqua Ohio, Kent and Tallmadge water service, as well as wells, depending on location. A water supplier or township mailing address does not identify where wastewater goes.",
      "The township names Portage County Water and Sewer for public sewer and Portage County Health District for septic issues. Confirm the actual setup first. Cleaning an accessible house pipe is not tank pumping or disposal-area repair.",
      "County health guidance identifies soils evaluation, siting and design as essential to onsite treatment. Use parcel system records rather than assuming township-wide soil behavior. Describe wet ground near a treatment area separately from a slow indoor fixture.",
      "For a residence or commercial kitchen, specify what the drain carries and where the cleanout is. Building age and pipe material remain property-specific. County rules list permits for regional sanitary connections; a new connection or altered system is separate from clearing an existing line."
    ],
    "faqs": [
      {
        "question": "Is my Brimfield home on public sewer or septic?",
        "answer": "No. The township lists several suppliers and wells, so verify the wastewater connection separately."
      },
      {
        "question": "Who provides public sanitary sewer?",
        "answer": "The township names Portage County Water and Sewer."
      },
      {
        "question": "Where do septic questions go?",
        "answer": "Brimfield directs them to Portage County Health District."
      },
      {
        "question": "Does jetting replace septic pumping?",
        "answer": "No. Pipe cleaning, tank pumping and disposal-area repair are different tasks."
      },
      {
        "question": "Can the township name tell you my soil type?",
        "answer": "No. County health guidance calls for parcel-specific soils evaluation in onsite design."
      },
      {
        "question": "What if I need a new sanitary connection?",
        "answer": "Scope it separately and check the county connection requirements."
      }
    ],
    "sources": [
      {
        "label": "Brimfield utility guide",
        "url": "https://brimfieldohio.gov/community/sewer-water/"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      },
      {
        "label": "Portage County sanitary connection rules",
        "url": "https://www.portagecounty-oh.gov/water-resources/pages/rules-and-regulations"
      }
    ],
    "slug": "brimfield",
    "name": "Brimfield",
    "county": "Portage",
    "place": "township",
    "nearby": [
      "kent",
      "ravenna",
      "franklin-township",
      "rootstown"
    ],
    "calls": [
      "Does a Brimfield water supplier prove sewer service?",
      "Who provides public sanitary sewer?",
      "Where do septic questions go?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Franklin Township, Portage County, Ohio needs the parcel connection and access details. Township zoning, county sewer rules and health-district onsite requirements have different roles.",
    "paragraphs": [
      "Franklin Township directs owners to its zoning map to establish the parcel district. The township name is not evidence of house age, pipe material or a sanitary connection. Bring renovation records and previous camera footage where available.",
      "Portage County publishes building-sewer and sanitary connection rules, while the health district oversees onsite treatment permitting and inspections. Verify the setup rather than assuming every township lot uses septic.",
      "County health guidance identifies soils evaluation as part of proper onsite design. A blockage in the house pipe and a soil-absorption problem are different diagnoses. Record whether the problem follows rainfall, ordinary indoor use or both.",
      "Franklin says interior remodeling does not require a zoning certificate unless structural changes are made. That does not settle plumbing or sewer requirements for a repair. The township directs right-of-way permits to the County Engineer, so a repair crossing a road boundary needs a scope check separate from private cleanout access."
    ],
    "faqs": [
      {
        "question": "How do I check whether my Franklin Township home uses septic?",
        "answer": "Do not assume so. Check the actual property connection and county records."
      },
      {
        "question": "Who should I contact about septic trouble in Franklin Township?",
        "answer": "Portage County Health District publishes the permitting, inspection and soil guidance."
      },
      {
        "question": "Do I need separate approval if my Franklin Township drain needs repair?",
        "answer": "No. Township zoning and county sanitary requirements address different scopes."
      },
      {
        "question": "Who handles right-of-way permits?",
        "answer": "The township directs these to the Portage County Engineer."
      },
      {
        "question": "Can jetting fix poor soil absorption?",
        "answer": "No. Cleaning a pipe cannot change disposal-area soil performance."
      },
      {
        "question": "What helps plan access?",
        "answer": "Send the address, cleanout location, symptoms and previous repairs, including whether a road crossing is proposed."
      }
    ],
    "sources": [
      {
        "label": "Franklin Township zoning and right-of-way guidance",
        "url": "https://www.franklintownshipohio.org/zoning-faq"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      },
      {
        "label": "Portage County sanitary connection rules",
        "url": "https://www.portagecounty-oh.gov/water-resources/pages/rules-and-regulations"
      }
    ],
    "slug": "franklin-township",
    "name": "Franklin Township",
    "county": "Portage",
    "place": "township",
    "nearby": [
      "kent",
      "brimfield",
      "ravenna",
      "rootstown"
    ],
    "calls": [
      "Is every township home on septic?",
      "Who oversees onsite treatment?",
      "Does zoning approval replace a sewer permit?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Rootstown Township, Ohio needs a sewer-versus-septic check. Its land-use plan documents dispersed housing, development on State Route 44 and separate county wastewater responsibilities.",
    "paragraphs": [
      "Rootstown's plan addendum describes 1990s residential growth alongside older housing, lower-density areas and commercial development on State Route 44. It is historical planning evidence, not a current claim about the age or sewer availability of a specific property.",
      "The plan identifies county Water Resources for sanitary sewers and the health department for septic systems. Confirm today's connection at the exact address; older utility-growth discussion is not a current service map.",
      "County health guidance treats soils evaluation as part of onsite siting and design. Describe wet ground, treatment alarms or recent pumping separately from slow indoor fixtures. Cleaning the house pipe cannot rebuild a failed disposal area.",
      "A commercial kitchen on State Route 44 and a house on a residential parcel can need different cleanout access. Identify the affected section, entry contact and any camera findings. If the task changes to repair or a new connection, confirm county and township requirements for that scope."
    ],
    "faqs": [
      {
        "question": "How can I check whether my Rootstown home has public sewer?",
        "answer": "No. Confirm current service at the exact address with county Water Resources."
      },
      {
        "question": "What should I include when requesting service at a Rootstown home or business?",
        "answer": "Send the address, property type, affected drain and cleanout access. Rootstown's plan describes both residential land and commercial development along State Route 44, so access should be checked for the property rather than assumed."
      },
      {
        "question": "Who handles onsite treatment?",
        "answer": "Portage County Health District provides permitting and inspection guidance."
      },
      {
        "question": "What if the septic area is wet but the pipe is clear?",
        "answer": "That may involve the treatment system or soil. Jetting the house pipe does not restore soil absorption."
      },
      {
        "question": "Should I send a past camera report?",
        "answer": "Yes. It may show whether buildup or damage caused the previous stoppage."
      },
      {
        "question": "Is a new connection part of cleaning?",
        "answer": "No. County connection requirements and township scope checks are separate."
      }
    ],
    "sources": [
      {
        "label": "Rootstown land-use plan addendum",
        "url": "https://rootstowntwp.com/ComprehensivePlan.html"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      },
      {
        "label": "Portage County sanitary connection rules",
        "url": "https://www.portagecounty-oh.gov/water-resources/pages/rules-and-regulations"
      }
    ],
    "slug": "rootstown",
    "name": "Rootstown",
    "county": "Portage",
    "place": "township",
    "nearby": [
      "ravenna",
      "kent",
      "brimfield",
      "franklin-township"
    ],
    "calls": [
      "Does an old plan prove sewer is available today?",
      "Why mention State Route 44?",
      "Who handles onsite treatment?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  },
  {
    "intro": "Hydro jetting in Aurora, Ohio starts with where wastewater goes. The city describes sanitary service on opposite sides of State Route 43 and also recognizes homes with onsite treatment.",
    "paragraphs": [
      "With few exceptions, Aurora says sewers east of State Route 43 flow to the Central plant and those west flow to the Westerly plant. This network context is useful for a suspected public-main problem, but does not locate a private drain obstruction.",
      "The city wastewater history documents infrastructure expansion during the 1990s. That does not establish the installation date or material of a particular lateral. Ask for pipe-replacement records rather than assuming all homes have the same setup.",
      "Aurora identifies Portage County Health District as the overseer of septic systems. A city address alone is not proof of a sanitary connection. Onsite properties need the tank and cleanout location checked; drain cleaning is not tank pumping.",
      "County health guidance includes soils evaluation and system design. A wet disposal area and a blocked kitchen branch need different evidence. For a commercial address, identify grease-control equipment and the building drain; any repair or connection change must be scoped separately."
    ],
    "faqs": [
      {
        "question": "How can I check the sewer connection at my Aurora home?",
        "answer": "Aurora uses it to describe the general Central/Westerly split, with exceptions. Verify the exact address."
      },
      {
        "question": "Is every house connected to sewer?",
        "answer": "Do not assume so. The city also publishes onsite treatment guidance."
      },
      {
        "question": "Who oversees Aurora septic systems?",
        "answer": "The city identifies Portage County Health District."
      },
      {
        "question": "Do plant dates tell me my pipe age?",
        "answer": "No. Public infrastructure history does not establish private lateral condition."
      },
      {
        "question": "Can jetting fix a saturated disposal area?",
        "answer": "No. Soil and treatment design are different questions from pipe cleaning."
      },
      {
        "question": "What should a commercial property send?",
        "answer": "Include the address, affected drain, access contact, grease-control setup and previous camera findings."
      }
    ],
    "sources": [
      {
        "label": "Aurora wastewater geography",
        "url": "https://www.auroraoh.com/departments/wastewater.php"
      },
      {
        "label": "Aurora onsite treatment jurisdiction",
        "url": "https://www.auroraoh.com/departments/septic_cleaning/index.php"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      }
    ],
    "slug": "aurora",
    "name": "Aurora",
    "county": "Portage",
    "place": "city",
    "nearby": [
      "streetsboro",
      "hudson",
      "kent",
      "ravenna"
    ],
    "calls": [
      "Does State Route 43 matter for wastewater?",
      "Is every house connected to sewer?",
      "Who oversees Aurora septic systems?"
    ],
    "title": "Drain access and local wastewater responsibilities"
  }
];
export const areaBySlug: Record<string, Area> = Object.fromEntries(areas.map(a => [a.slug, a]));
