import './AboutUsHomePage.css';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOfPage from '../../../utils/scrollToTopOfPage';
import image from '/images/AboutUs/Header/Header.jpg';
// import image from '/images/HomePage_AboutUS/original.jpg';

const AboutUsPageHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='about-us-home-page'>
      <div className='about-us-home-page-container'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='about-us-home-page-image-section'
        >
          <img
            className='about-us-home-page-image-section-img'
            src={image}
            alt='about-us-home-page-image-section'
          />
        </div>
        <div className='about-us-home-page-info-section'>
          <h2 className='about-us-home-page-info-about-us-h2'>About Us</h2>
          <h1 className='about-us-home-page-info-about-us-h1'>
            Extending Plant Asset Life
          </h1>
          <h2 className='about-us-home-page-info-about-us-h2-part-2'>
            ” Our Approach to Problem Solving In The Oil & Industrial “
          </h2>
          <p className='about-us-home-page-info-about-us-para-1'>
            Welcome to our Mubarraz Oil filed installation LLC (MOI), where we
            have provided top notch services for OIL & GAS, POWER, SENAAT, RO
            industries since 1999. Our company is committed to providing the
            highest level of quality and safety when it comes to troubleshooting
            in every project we undertake.
          </p>
          <p className='about-us-home-page-info-about-us-para-2'>
            Our excellent team of professionals is dedicated to ensuring that
            the oilfield installation project is completed on time, within
            budget and with utmost attention to detail. Having ISO 9001, ISO
            14001 & ISO 45001 certified company, we provide unique solutions by
            understanding every project is unique and ensure all the specific
            needs are met. We are specialized in the following sectors, OIL AND
            GAS, MARINE, SENAAAT, POWER INDUSTRIES and WATER INDUSTRIES
          </p>
          <button
            className='about-us-home-page-info-button'
            onClick={() => {
              ScrollToTopOfPage();
              navigate('/about-us');
            }}
          >
            Read More
          </button>
        </div>
      </div>

      <div
        data-aos='fade-down'
        data-aos-duration='1000'
        className='about-us-points'
      >
        <ul>
          <li> Integrity</li>
        </ul>
        <ul>
          <li> Courage</li>
        </ul>
        <ul>
          <li> Reliability</li>
        </ul>
        <ul>
          <li> We value our people</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPageHomePage;
