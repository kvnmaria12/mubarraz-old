import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import SingleStopValveServices from '../components/Services/OurServices/SingleStopValveService/SingleStopValveServices';
import './ValveServices.css';
import Certificates from '../components/Services/Certificates/Certificates';

const ValveServices = () => {
  return (
    <div className='single-stop-services-page'>
      <NavBar />
      <div className='single-stop-services-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='single-stop-services-page-content'
      >
        <h1>Valve Services</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='single-stop-services-page-content-main'
      >
        {/* <h2>Our Services</h2> */}
        {/* <h1>Valve Services</h1> */}
      </div>
      <SingleStopValveServices />
      <Footer />
    </div>
  );
};

export default ValveServices;
