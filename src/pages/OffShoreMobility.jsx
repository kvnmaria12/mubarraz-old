import './OffShoreMobility.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/OffShoreMobility/OffShoreMobility.jpg';

function OffShoreMobility() {
  return (
    <div className='offshore-mobility-page'>
      <NavBar />
      <div className='offshore-mobility-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='offshore-mobility-page-content'
      >
        <h1>OffShore Mobility</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='offshore-mobility-page-content-main'
      >
        <h1>OffShore Mobility</h1>
        <div className='offshore-mobility-content'>
          <img src={image} alt='offshore-mobility-page-image' />
          <h2>
            MOI also provide services that for the oil and gas industry involves
            providing a mobile workshop facility for valve repair and
            maintenance services offshore / Onshore. The mobile workshop is
            equipped with tools and equipment needed for valve repair and
            maintenance and can be mobilized to different locations
            offshore/Onshore.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OffShoreMobility;
