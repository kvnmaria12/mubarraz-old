import './ImageLoader.css';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import { loaderImages } from '../../../utils/loaderImages';
import NavBar from '../../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOfPage from '../../../utils/scrollToTopOfPage';

const ImageLoader = () => {
  const navigate = useNavigate();

  return (
    <div className='image-loader-main-page'>
      <NavBar />
      <div className='image-zoom-loader'>
        <Zoom scale={1.4} indicators={false} duration={1500} arrows={false}>
          {loaderImages.map((img, index) => (
            <div key={index} style={{ width: '100%' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100vh',
                  filter: 'brightness(60%)',
                }}
                className='image-loader-img'
                alt='Slide Image'
                loading='lazy'
                src={img}
              />
            </div>
          ))}
        </Zoom>
      </div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='image-loader-main-page-content'
      >
        {/* <h3 className='image-loader-main-page-h3'>Innovative Technology</h3> */}
        {/* <h1 className='image-loader-main-page-h1'>
          Welcome to Mubarraz Oil Field (MOI)
        </h1> */}
        <p className='image-loader-main-page-p'>
          Welcome to Mubarraz Oil Field Installation(MOI)
          {/* where we have
          been providing top-notch services for the OIL & GAS, POWER, SENAAT,
          and RO industries since 1999. Our company is committed to delivering
          the highest level of quality and safety in every project we undertake. */}
        </p>
        <button
          className='image-loader-main-page-button'
          onClick={() => {
            navigate('/about-us');
            ScrollToTopOfPage();
          }}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default ImageLoader;
