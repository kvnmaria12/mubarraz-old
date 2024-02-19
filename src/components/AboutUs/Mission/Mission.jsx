import './Mission.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { IoIosPeople } from 'react-icons/io';
import { missionImages } from '../../../utils/missionImages';

const Mission = () => {
  return (
    <div className='mission'>
      <div className='mission-container'>
        <div
          data-aos='fade-right'
          data-aos-duration='1500'
          className='mission-container-left'
        >
          <Fade autoplay={true} duration={1000} arrows={false}>
            {missionImages.map((image, index) => {
              return (
                <div key={index} className='each-slide'>
                  <div>
                    <img loading='lazy' style={{}} src={image} alt='images' />
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1500'
          className='mission-container-right'
        >
          <div className='mission-container-right-top'>
            <span>
              <IoIosPeople
                className='mission-icon'
                style={{ fontSize: '62px', color: '#f77f00' }}
              />
            </span>
            <h2>MOI Vision</h2>
            <p>
              MOI Vision is committed to providing the highest level of quality
              and safety when it comes to troubleshooting in every project we
              undertake. Our range of services includes everything from site
              preparation and excavation to pipeline installation and
              maintenance of valves including flange management Services. We
              also specialize in Cryogenic Valve testing, API Services ensuring
              that your operations run smoothly and efficiently.
            </p>
          </div>
          {/* <div className='mission-container-right-bottom'>
            <span>
              <ImEarth style={{ fontSize: '62px' }} />
            </span>
            <h2>Muboins Misson</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget cursus mi, sed placerat erat. Duis porta posuere nulla, quis
              iaculis nulla. Curabitur sagittis efficitur nibh quis consectetur.
              Morbi sit amet accumsan tortor. Ut pulvinar non enim sed sagittis.
              Ut vehicula lacinia libero, blandit varius nulla vehicula non.
              Fusce maximus sapien eros, at dapibus nisl volutpat vitae.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;
