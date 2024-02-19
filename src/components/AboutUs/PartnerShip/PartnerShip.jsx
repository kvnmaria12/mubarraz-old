import './PartnerShip.css';

const PartnerShip = () => {
  return (
    <div className='partnership'>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='partnership-part-1'
      >
        <h2>
          Trusted by 30,000 world-class brands and organizations of all sizes
        </h2>
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='partnership-part-2'
      >
        <div className='partnership-part-2-images'>
          <img
            loading='lazy'
            src='https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/Client-2.png'
            alt='parternship-img-1'
          />
          <img
            loading='lazy'
            src='https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/Client-3.png'
            alt='parternship-img-1'
          />
          <img
            loading='lazy'
            src='https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/Client-4.png'
            alt='parternship-img-1'
          />
          <img
            src='https://web.moxcreative.com/oeelco/wp-content/uploads/sites/6/2023/01/Client-5.png'
            alt='parternship-img-1'
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
