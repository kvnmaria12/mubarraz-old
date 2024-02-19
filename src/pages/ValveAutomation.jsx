import './ValveAutomation.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/ValveAutomation/ValveAutomation.jpg';

function ValveAutomation() {
  return (
    <div className='valve-automation-page'>
      <NavBar />
      <div className='valve-automation-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='valve-automation-page-content'
      >
        <h1>Valve Automation</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='valve-automation-page-content-main'
      >
        <h1>Valve Automation</h1>
        <div className='valve-automation-content'>
          <img src={image} alt='valve-automation-page-image' />
          <h2>
            Our service involves automating valves using different types of
            actuators, such as electric, pneumatic, or hydraulic actuators. The
            automation can be done on new or existing valves to improve their
            performance and efficiency. Automation of valves can improve their
            performance, reduce human error, and improve the safety and
            efficiency of operations
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ValveAutomation;
