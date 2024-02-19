import './UpComingServices.css';
import { useState, useRef } from 'react';

const UpComingService = (props) => {
  const { title, content, icon, img } = props;

  const Icon = icon;

  const ref = useRef();

  const [readMore, setReadMore] = useState(false);

  const handleReadMoreBtn = () => {
    setReadMore(!readMore);
    ref?.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='services-upcoming-services'>
      <div
        ref={ref}
        data-aos='fade-up'
        data-os-delay='1000'
        data-aos-duration='900'
        className='card-container-upcoming-service'
        // style={{ height: !readMore ? '100vh' : '' }}
      >
        <img src={img} alt='' />
        <h1>{title}</h1>
        <p>{readMore ? content : content.substring(0, 220) + '...'}</p>
        {/* <span className='card-container-icon'>
          <Icon className='card-container-icon-svg' />
        </span> */}
        <button onClick={handleReadMoreBtn}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default UpComingService;
