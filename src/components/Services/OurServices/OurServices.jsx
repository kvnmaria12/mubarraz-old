import { useState } from 'react';
import './OurServices.css';
import SingleStopValveServices from './SingleStopValveService/SingleStopValveServices';
import SpecializedServices from './SpecializedServices/SpecializedServices';
import UpComingServices from './UpcomingServices/UpComingServices';

const OurServices = () => {
  const [isActive, setIsActive] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function displayContent(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        return <SingleStopValveServices />;
      case 1:
        return <SpecializedServices />;
      case 2:
        return <UpComingServices />;
      default:
        break;
    }
  }

  return (
    <div className='services-page-our-services'>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='services-page-our-services-header'
      >
        <h2>Our Services</h2>
        <h1>Exploration & Production Service for Oil & Gas Operations.</h1>
        <p>We have listed some of services that we offer</p>
      </div>
      <div className='services-page-our-services-buttons'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='services-page-our-services-content-button-1'
        >
          <button
            className={`${selectedIndex === 0 ? 'active' : null}`}
            onClick={() => {
              setSelectedIndex(0);
            }}
          >
            Valve Services
          </button>
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='services-page-our-services-content-button-2'
        >
          <button
            className={`${selectedIndex === 1 ? 'active' : null}`}
            onClick={() => {
              setSelectedIndex(1);
            }}
          >
            Specialized Services
          </button>
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='services-page-our-services-content-button-2'
        >
          <button
            className={`${selectedIndex === 2 ? 'active' : null}`}
            onClick={() => {
              setSelectedIndex(2);
            }}
          >
            Upcoming Services
          </button>
        </div>
      </div>
      <div className='services-page-our-services-content'>
        {/* displayContent Function */}
        {displayContent(selectedIndex)}
      </div>
    </div>
  );
};

export default OurServices;
