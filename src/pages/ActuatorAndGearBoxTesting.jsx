import './ActuatorAndGearBoxTesting.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/ActuatorAndGearBoxTesting/ActuatorAndGearBoxTesting.jpg';

function ActuatorAndGearBoxTesting() {
  return (
    <div className='actuator-and-gearbox-testing-page'>
      <NavBar />
      <div className='actuator-and-gearbox-testing-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='actuator-and-gearbox-testing-page-content'
      >
        <h1>Actuator and GearBox Testing</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='specialized-services-page-content-main'
      >
        <h1>Actuator and GearBox Testing</h1>
        <div className='acutator-and-gearbox-testing-content'>
          <img src={image} alt='actuator-and-gearbox-testing-image' />
          <h2>
            MOI offers servicing actuators and gearboxes that are used to
            operate valves. We also provide services that can include repair,
            maintenance, and calibration of the actuators and gearboxes to
            ensure they function efficiently and smoothly
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ActuatorAndGearBoxTesting;
