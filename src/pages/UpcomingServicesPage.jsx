import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import UpComingServices from '../components/Services/OurServices/UpcomingServices/UpComingServices';
import './UpcomingServicesPage.css';

const UpcomingServicesPage = () => {
  return (
    <div className='upcoming-services-page'>
      <NavBar />
      <div className='upcoming-services-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='upcoming-services-page-content'
      >
        <h1>Upcoming Services</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='upcoming-services-page-content-main'
      >
        <h2>Our Services</h2>
        <h1>Upcoming Services.</h1>
      </div>
      <UpComingServices />
      <Footer />
    </div>
  );
};

export default UpcomingServicesPage;
