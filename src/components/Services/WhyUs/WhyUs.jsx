import './WhyUs.css';
import image from '/images/Services/Header/Header.jpg';

const WhyUs = () => {
  return (
    <div className='services-page-why-us'>
      <div className='services-page-why-us-container'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='services-page-why-us-image-section'
        >
          <img src={image} alt='about-us-home-page-image-section' />
        </div>
        <div
          data-aos='fade-down'
          data-aos-duration='1000'
          className='services-page-why-us-right-info-section'
        >
          <h2>About Us</h2>
          <h1>Extending Plant Asset Life.</h1>
          <p>
            Welcome to our Mubarraz Oil filed installation LLC (MOI), where we
            have provided top notch services for OIL & GAS, POWER, SENAAT, RO
            industries since 1999. Our company is committed to providing the
            highest level of quality and safety when it comes to troubleshooting
            in every project we undertake.
          </p>
          {/* <button className='about-us-home-page-info-button'>Read More</button> */}
          <div className='services-page-why-us-right-info-section-bottom'>
            <div className='services-page-why-us-right-info-section-bottom-1'>
              <h1>Reliability</h1>
              <p>Building lasting customer relationships</p>
            </div>
            <div className='services-page-why-us-right-info-section-bottom-1'>
              <h1>Integrity</h1>
              <p>To build trust through excellence and courage</p>
            </div>
            <div className='services-page-why-us-right-info-section-bottom-1'>
              <h1>Care for people</h1>
              <p>Ensure success, growth of employees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
