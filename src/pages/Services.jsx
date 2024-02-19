import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Services/Header/Header';
import OurServices from '../components/Services/OurServices/OurServices';
import Testimony from '../components/Services/Testimonials/Testimony';
import WhyUs from '../components/Services/WhyUs/WhyUs';
import Footer from '../components/Footer/Footer';
import Certificates from '../components/Services/Certificates/Certificates';

const ServicesPage = () => {
  return (
    <div className='services-page'>
      <NavBar />
      <Header />
      <OurServices />
      <SuccessRate />
      <Certificates />
      <Footer />
    </div>
  );
};

export default ServicesPage;
