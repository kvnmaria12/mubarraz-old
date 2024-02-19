import Header from '../components/AboutUs/Header/Header';
import AboutUsPageHomePage from '../components/Home/AboutUsHomePage/AboutUsHomePage';
import Mission from '../components/AboutUs/Mission/Mission';
import PartnerShip from '../components/AboutUs/PartnerShip/PartnerShip';
import Projects from '../components/AboutUs/Projects/Projects';
import WhoAreWe from '../components/AboutUs/WhoAreWe/WhoAreWe';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import OurServicesHomePage from '../components/Home/OurServicesHomePage/OurServicesHomePage';
import About from '../components/AboutUs/About/About';
import Certificates from '../components/Services/Certificates/Certificates';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <NavBar />
      <Header />
      {/* <AboutUsPageHomePage /> */}
      <About />

      {/* <PartnerShip /> */}
      <WhoAreWe />
      {/* <ProjectsDone /> */}
      {/* <OurServicesHomePage /> */}
      <Mission />
      {/* <Projects /> */}
      {/* OEM Certificates */}
      {/* <Certificates title={'OEM AND APPRECIATION CERTIFICATES'} /> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
