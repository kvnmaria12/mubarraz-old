import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import SpecializedServices from '../components/Services/OurServices/SpecializedServices/SpecializedServices';
import './SpecializedServicesPage.css';

const SpecializedServicesPage = () => {
  return (
    <div className='specialized-services-page'>
      <NavBar />
      <div className='specialized-services-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='specialized-services-page-content'
      >
        <h1>Specialized Services</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='specialized-services-page-content-main'
      >
        <h2>Our Services</h2>
        <h1>Specialized Services</h1>
      </div>
      <SpecializedServices />
      <Footer />
    </div>
  );
};

export default SpecializedServicesPage;
