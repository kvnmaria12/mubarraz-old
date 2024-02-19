import './MultiPortManifold.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/MultiPortManifold/MultiPortManifold.jpg';

function MultiPortManifold() {
  return (
    <div className='multi-port-page'>
      <NavBar />
      <div className='multi-port-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='multi-port-page-content'
      >
        <h1>MultiPort Manifold</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='multi-port-page-content-main'
      >
        <h1>MultiPort Manifold</h1>
        <div className='multi-port-content'>
          <img src={image} alt='multi-port-page-image' />
          <h2>
            MOI provide Service of MSMs is extremely critical to ensure that
            they function correctly and help manage the flow of fluids in oil
            and gas production. Our service entails servicing multiport selector
            manifolds used in oil and gas production which includes
            Refurbishment, maintenance, Painting and calibration of the
            manifold.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MultiPortManifold;
