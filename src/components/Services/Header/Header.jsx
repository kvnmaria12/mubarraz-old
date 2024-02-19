import './Header.css';

const Header = () => {
  return (
    <div className='services-page-header'>
      <div className='services-page-header-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='services-page-header-content'
      >
        <h1 className='services-page-header-h1'>Our Services</h1>
        <p className='services-page-header-p'>
          We are providing a list of services in oil and gas industry.
        </p>
      </div>
    </div>
  );
};

export default Header;
