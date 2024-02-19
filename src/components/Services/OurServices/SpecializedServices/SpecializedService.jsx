import './SpecializedService.css';
import { useState } from 'react';

const SpecializedService = (props) => {
  const { title, content, icon, img } = props;

  const Icon = icon;

  const [readMore, setReadMore] = useState(false);

  const handleReadMoreBtn = () => {
    setReadMore(!readMore);
  };
  return (
    <div className='services-specialized-services'>
      <div
        data-aos='fade-up'
        data-os-delay='1000'
        data-aos-duration='900'
        className='card-container-specialized-service'
        style={{ height: !readMore ? '100vh' : '' }}
      >
        <h1>{title}</h1>
        <p>{readMore ? content : content.substring(0, 220) + '...'}.</p>
        <span className='card-container-icon'>
          <Icon />
        </span>
        <button onClick={handleReadMoreBtn}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default SpecializedService;
