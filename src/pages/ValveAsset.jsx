import './ValveAsset.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/ValveAsset/ValveAsset.jpg';

function ValveAsset() {
  return (
    <div className='valve-asset-page'>
      <NavBar />
      <div className='valve-asset-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='valve-asset-page-content'
      >
        <h1>Valve Asset</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='valve-asset-page-content-main'
      >
        <h1>Valve Asset</h1>
        <div className='valve-asset-content'>
          <img src={image} alt='valve-asset-page-image' />
          <h2>
            MOI can also provide services that involve managing the lifecycle of
            valves, including installation, commissioning, operation,
            maintenance, and decommissioning. Our services include inventory
            management, maintenance planning, and cost optimization. Effective
            management of valve assets can help reduce maintenance costs,
            optimize inventory levels, and improve the performance and
            reliability of equipment.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ValveAsset;
