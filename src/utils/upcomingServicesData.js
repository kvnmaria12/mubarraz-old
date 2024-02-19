import { MdOutlineOilBarrel } from 'react-icons/md';
import { GiSpanner } from 'react-icons/gi';

import { GoTools } from 'react-icons/go';
import { v4 as uuidv4 } from 'uuid';

export const upcomingServicesData = [
  {
    id: uuidv4(),
    title: 'ONLINE PSV TESTING / ATEX TREVITEST',
    content: `ATEX TREVITEST and ONLINE PSV TESTING are essential services that aid in ensuring the dependability
and safety of equipment used in hazardous settings.
Since Pressure safety valves (PSVs) are an essential part of many industrial processes, ONLINE PSV
TESTING is significant.
The purpose of ATEX TREVITEST is to ensure that electrical and mechanical equipment used in hazardous
situations complies with the safety requirements established by the ATEX directive of the European
Union. The minimal safety standards for tools and safety measures used in potentially explosive
environments are established by this directive. By lowering the possibility of explosions and other
incidents, ATEX TREVITEST contributes to the safety and dependability of the equipment used in these
settings.`,
    icon: MdOutlineOilBarrel,
    img: '/images/Services/Services/UpcomingServices/UpcomingService1.jpg',
  },
  {
    id: uuidv4(),
    title: 'FUGITIVE EMISSION TEST (FET)',
    content: `These Facilities are crucial in ensuring that equipment does not release dangerous gases into the
atmosphere. This solution can assist firms in adhering to environmental requirements while reducing the
environmental impact of industrial processes`,
    icon: GiSpanner,
    img: '/images/Services/Services/UpcomingServices/UpcomingService2.jpg',
  },
  {
    id: uuidv4(),
    title: 'API TESTING',
    content: `API testing is a service that verifies the compliance of oil and gas equipment with the standards set by
the American Petroleum Institute (API). This type of testing is essential for ensuring the safety and
reliability of equipment used in the oil and gas industry. The API sets the standards for the design,
manufacturing, and testing of various types of equipment used in the industry, including drilling
equipment, wellhead equipment, valves, and pumps.`,
    icon: GoTools,
    img: '/images/Services/Services/UpcomingServices/UpcomingService3.jpg',
  },
  {
    id: uuidv4(),
    title: 'DRILLING AND WELLHEAD EQUIPMENT REPAIR',
    content: `Our service involves repairing and maintaining equipment used in drilling and wellhead operations. The
equipment may include blowout preventers, mud pumps, and other machinery used in drilling and
wellhead operations.
The repair of drilling and wellhead equipment is also an opportunity for companies in the oil and gas
industry to improve their bottom line. By regularly maintaining and repairing their equipment,
companies can reduce downtime, extend equipment life, and improve productivity, resulting in cost
savings and increased profits`,
    icon: MdOutlineOilBarrel,
    img: '/images/Services/Services/UpcomingServices/UpcomingService4.jpg',
  },
  {
    id: uuidv4(),
    title: 'X-MAS TREE REPAIRS AND MODIFICATIONS',
    content: `When it comes to oil and gas industries in UAE X-mas’ trees are critical components of wellhead
equipment that control the flow of oil and gas from the well. They are exposed to harsh environmental
conditions and are subject to wear and tear over time, which can compromise their safety and reliability.
X-mas tree repairs and modifications help to ensure that the equipment remains safe and functional,
reducing the risk of equipment failure and costly downtime`,
    icon: GiSpanner,
    img: '/images/Services/Services/UpcomingServices/UpcomingService5.jpg',
  },
  {
    id: uuidv4(),
    title: 'PIPELINE PRESERVATION SERVICES',
    content: `As we know due to the extreme environmental conditions, they are subjected to, such as corrosion,
erosion, and mechanical degradation, they risk having their structural integrity and safety compromised.
By extending the lifespan of pipelines and preventing these problems, pipeline preservation services
help to lower the need for expensive repairs and replacements.
The effectiveness and productivity of pipeline operations can be increased by using our services for
pipeline preservation. Pipelines can operate at larger capacities and transport oil and gas more
effectively by minimizing downtime and the requirement for repairs. Businesses may ultimately benefit
from cost reductions and greater profitability as a result of this.`,
    icon: GoTools,
    img: '/images/Services/Services/UpcomingServices/UpcomingService6.jpg',
  },
];
