import './OurServicesHomePage.css';
import { MdOutlineOilBarrel } from 'react-icons/md';
import { GiSpanner } from 'react-icons/gi';
import { GoTools } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOfPage from '../../../utils/scrollToTopOfPage';
import { ServicesContext } from '../../../context/ServicesContext';
import { useContext } from 'react';

const OurServicesHomePage = () => {
  const navigate = useNavigate();

  const {
    setIsActuatorClicked,
    setIsValveAutomationClicked,
    setIsOffShoreClicked,
    setIsValveAssetClicked,
    setIsReverseEngClicked,
    setIsMultiPortClicked,
  } = useContext(ServicesContext);

  return (
    <div className='our-services-home-page'>
      <div className='our-service-home-page-container'>
        <h2>Our Services</h2>
        {/* <h1>Exploration & Production Service for Oil & Gas Operations.</h1>
        <p>We have listed some of our services below.</p> */}
      </div>
      <div className='our-services-home-page-card-container'>
        <div
          data-aos='fade-up'
          data-os-delay='50'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-1 card-home-page-services'
          onClick={() => {
            ScrollToTopOfPage();
            // navigate('services/actuator-and-gearbox-testing');
            navigate('/valve-services');
            setIsActuatorClicked(true);
          }}
        >
          <div className='our-services-card-container-image-main-1'>
            {/* <div className='our-services-card-container-image-1'></div> */}
            <div className='our-services-card-container-image-content-1 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>ACTUATOR & GEARBOX SERVICING</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>ACTUATOR & GEARBOX SERVICING</h1>
                  <p>
                    MOI offers servicing actuators and gearboxes that are used
                    to operate valves.We also provide services that can include
                    repair, maintenance, and calibration of the actuators and
                    gearboxes to ensure they function efficiently and smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='70'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-2 card-home-page-services'
          onClick={() => {
            ScrollToTopOfPage();
            // navigate('services/valve-automation');
            navigate('/valve-services');
            setIsValveAutomationClicked(true);
          }}
        >
          <div className='our-services-card-container-image-main-2 '>
            {/* <div className='our-services-card-container-image-2'></div> */}
            <div className='our-services-card-container-image-content-2 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>VALVE AUTOMATION</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>VALVE AUTOMATION</h1>
                  <p>
                    Our services involves automating valves using different
                    types of actuators such as electric,penumatic or hydraulic
                    actuators. The automation can be done on new or exsiting
                    value to improve their performance. Automation of valves can
                    imporve performance, safety and efficiency of operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='80'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-3 card-home-page-services'
          onClick={() => {
            ScrollToTopOfPage();
            navigate('/valve-services');
            setIsOffShoreClicked(true);
            // navigate('services/offshore-mobility');
          }}
        >
          <div className='our-services-card-container-image-main-3'>
            {/* <div className='our-services-card-container-image-3'></div> */}
            <div className='our-services-card-container-image-content-3 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <GoTools className='card-container-icon-svg' />
                  </span>
                  <h1>OFFSHORE MOBILE WORKSHOP FACILITY</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <GoTools className='card-container-icon-svg' />
                  </span>
                  <h1>OFFSHORE MOBILE WORKSHOP FACILITY</h1>
                  <p>
                    MOI also provide services that for the oil and gas industry
                    involves providing a mobile workshop facility for valve
                    repair and maintenance services offshore / Onshore. The
                    mobile workshop is equipped with tools and equipment needed
                    for valve repair and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='90'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-4 card-home-page-services '
          onClick={() => {
            ScrollToTopOfPage();
            // navigate('services/valve-asset');
            navigate('/valve-services');
            setIsValveAssetClicked(true);
          }}
        >
          <div className='our-services-card-container-image-main-4'>
            {/* <div className='our-services-card-container-image-4'></div> */}
            <div className='our-services-card-container-image-content-4 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>VALVE ASSET MANAGEMENT</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <MdOutlineOilBarrel className='card-container-icon-svg' />
                  </span>
                  <h1>VALVE ASSET MANAGEMENT</h1>
                  <p>
                    MOI can also provide services that involve managing the
                    lifecycle of valves, including installation, commissioning,
                    operation, maintenance, and decommissioning. Our services
                    include inventory management, maintenance planning, and cost
                    optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='100'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-5 card-home-page-services '
          onClick={() => {
            ScrollToTopOfPage();
            // navigate('services/reverse-engineering');
            navigate('/valve-services');
            setIsReverseEngClicked(true);
          }}
        >
          <div className='our-services-card-container-image-main-5'>
            {/* <div className='our-services-card-container-image-5'></div> */}
            <div className='our-services-card-container-image-content-5 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <GiSpanner className='card-container-icon-svg' />
                  </span>
                  <h1>REVERSE ENGINEERING ON VALVE COMPONENTS</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <GiSpanner className='card-container-icon-svg' />
                  </span>
                  <h1>REVERSE ENGINEERING ON VALVE COMPONENTS</h1>
                  <p>
                    MOI provide service involves reverse engineering valve
                    components that are no longer available on the market. The
                    service can include 3D modeling, prototyping, and
                    manufacturing of the valve components. Reverse engineering
                    can help ensure that replacement parts are available, even
                    for older equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='110'
          data-aos-duration='1000'
          className='our-services-home-page-card-container-content-6 card-home-page-services'
          onClick={() => {
            ScrollToTopOfPage();
            // navigate('services/multiport-manifold');
            navigate('/valve-services');
            setIsMultiPortClicked(true);
          }}
        >
          <div className='our-services-card-container-image-main-6'>
            {/* <div className='our-services-card-container-image-6'></div> */}
            <div className='our-services-card-container-image-content-6 card-container-flip-main'>
              <div className='the-card'>
                <div className='the-front-card'>
                  <span className='card-container-icon'>
                    <GoTools className='card-container-icon-svg' />
                  </span>
                  <h1>MULTIPORT SELECTOR MANIFOLD (MSM) SERVICING</h1>
                </div>
                <div className='the-back-card'>
                  <span className='card-container-icon'>
                    <GoTools className='card-container-icon-svg' />
                  </span>
                  <h1>MULTIPORT SELECTOR MANIFOLD (MSM) SERVICING</h1>
                  <p>
                    MOI provide Service of MSMs is extremely critical to ensure
                    that they function correctly and help manage the flow of
                    fluids in oil and gas production. Our service entails
                    servicing multiport selector manifolds used in oil and gas
                    production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesHomePage;
