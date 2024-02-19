import AboutUsPageHomePage from '../components/Home/AboutUsHomePage/AboutUsHomePage';
import Footer from '../components/Footer/Footer';
import ImageLoader from '../components/Home/ImageLoader/ImageLoader';
import NavBar from '../components/NavBar/NavBar';
import OurServicesHomePage from '../components/Home/OurServicesHomePage/OurServicesHomePage';
import SuccessStories from '../components/Home/SuccessStories/SuccessStories';
import CardContainer from '../components/Home/CardContainerHomePage/CardContainer';
import Upload from '../components/Upload/Upload';
const Home = () => {
  return (
    <div className='home-page'>
      <NavBar />
      <ImageLoader />
      <CardContainer />
      {/* <AboutUsPageHomePage /> */}
      <OurServicesHomePage />
      <SuccessStories />
      <Footer />
      {/* <Upload /> */}
    </div>
  );
};

export default Home;
