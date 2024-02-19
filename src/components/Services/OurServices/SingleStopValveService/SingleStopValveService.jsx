import { useState, useRef, useEffect, useContext } from 'react';
import './SingleStopValveService.css';
import { ServicesContext } from '../../../../context/ServicesContext';

const SingleStopValveService = (props) => {
  const {
    isActuatorClicked,
    setIsActuatorClicked,
    isValveAutomationClicked,
    setIsValveAutomationClicked,
    isOffShoreClicked,
    setIsOffShoreClicked,
    isValveAssetClicked,
    setIsValveAssetClicked,
    isReverseEngClicked,
    setIsReverseEngClicked,
    isMultiPortClicked,
    setIsMultiPortClicked,
  } = useContext(ServicesContext);

  const { id, title, content, icon, img, number } = props;

  const [isActive, setIsActive] = useState(false);

  const ref = useRef();

  const Icon = icon;

  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    // scrollIntoView function definition
    function scrollToView(
      number,
      numberIndex,
      setIsActive,
      isClicked,
      setIsClicked
    ) {
      if (number === numberIndex) {
        if (isClicked) {
          setIsActive(true);
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsClicked(false);
      }
    }
    // Actuator
    scrollToView(
      number,
      1,
      setIsActive,
      isActuatorClicked,
      setIsActuatorClicked
    );

    // valve automatio
    scrollToView(
      number,
      2,
      setIsActive,
      isValveAutomationClicked,
      setIsValveAutomationClicked
    );

    // offShore
    scrollToView(
      number,
      3,
      setIsActive,
      isOffShoreClicked,
      setIsOffShoreClicked
    );

    // valveAsset
    scrollToView(
      number,
      4,
      setIsActive,
      isValveAssetClicked,
      setIsValveAssetClicked
    );

    // reverse  engineering
    scrollToView(
      number,
      5,
      setIsActive,
      isReverseEngClicked,
      setIsReverseEngClicked
    );

    // multiport
    scrollToView(
      number,
      6,
      setIsActive,
      isMultiPortClicked,
      setIsMultiPortClicked
    );
  }, []);

  const handleReadMoreBtn = (id) => {
    setReadMore(!readMore);
    ref?.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='services-single-stop-services'>
      {/* <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: '18px' }}>
        {number + 1}
      </h1> */}
      <div
        ref={ref}
        // data-aos='fade-right'
        // data-os-delay='500'
        // data-aos-duration='600'
        className={`card-container-single-stop-service ${
          isActive ? 'active' : ''
        }`}
      >
        <img loading='lazy' src={img} alt='' />
        <h1>{title}</h1>
        <p>{readMore ? content : content.substring(0, 130) + '...'}</p>
        {/* <span className='card-container-icon'>
          <Icon className='card-container-icon-svg' />
        </span> */}
        <button onClick={() => handleReadMoreBtn(id)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default SingleStopValveService;
