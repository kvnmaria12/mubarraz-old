import './ReverseEngineering.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import image from '/images/ReverseEngineering/ReverseEngineering.jpg';

function ReverseEngineering() {
  return (
    <div className='reverse-engineering-page'>
      <NavBar />
      <div className='reverse-engineering-page-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='reverse-engineering-page-content'
      >
        <h1>Reverse-Engineering</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='reverse-engineering-page-content-main'
      >
        <h1>Reverse-Engineering</h1>
        <div className='reverse-engineering-content'>
          <img src={image} alt='reverse-engineering-page-image' />
          <h2>
            MOI provide service involves reverse engineering valve components
            that are no longer available on the market. The service can include
            3D modeling, prototyping, and manufacturing of the valve components.
            Reverse engineering can help ensure that replacement parts are
            available, even for older equipment that may no longer be
            manufactured.
          </h2>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReverseEngineering;
