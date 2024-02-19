import './WhoAreWe.css';
import { ImCheckmark } from 'react-icons/im';
import { FaOilCan } from 'react-icons/fa';
import { GiSubmarine } from 'react-icons/gi';
import { TiSpanner } from 'react-icons/ti';
import { MdGasMeter } from 'react-icons/md';
import { IoIosWater } from 'react-icons/io';

import image from '/images/AboutUs/WhoWeAre/WhoWeAre.jpg';

const WhoAreWe = () => {
  return (
    <div className='who-are-we'>
      <div className='who-are-we-container'>
        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          className='who-are-we-part-1'
        >
          <h2>Who We Are</h2>
          <h1>Extending Plant Asset Life</h1>
          <p>
            Mubarraz Oil Field Installation LLC (MOI), provides top notch
            services for OIL & GAS, POWER, SENAAT, RO industries since 1999
          </p>
          <ul>
            <li>
              <FaOilCan style={{ color: '#f77f00', fontSize: '48px' }} />
              {/* Sustainable development */}
              OIL AND GAS
            </li>
            <li>
              <GiSubmarine style={{ color: '#f77f00', fontSize: '48px' }} />
              {/* Reliability */}
              MARINE
            </li>
            <li>
              <TiSpanner style={{ color: '#f77f00', fontSize: '48px' }} />
              {/* Performance */}
              SENAAAT
            </li>
            <li>
              <MdGasMeter style={{ color: '#f77f00', fontSize: '48px' }} />
              {/* Integrity */}
              POWER INDUSTRIES
            </li>
            <li>
              <IoIosWater style={{ color: '#f77f00', fontSize: '48px' }} />
              {/* Improving access to energy */}
              WATER INDUSTRIES
            </li>
          </ul>
        </div>
        <div
          data-aos='fade-down'
          data-aos-duration='1500'
          className='who-are-we-part-2'
        >
          <div className='who-are-we-part-2-img'>
            <img loading='lazy' src={image} alt='oil industry-images' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
