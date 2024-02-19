import './Header.css';

const Header = () => {
  return (
    <div className='about-us-page'>
      <div className='about-us-page-header-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='about-us-page-header-content'
      >
        <h3 className='about-us-page-header-h3'>About</h3>
        <h1 className='about-us-page-header-h1'>Get to know us</h1>
        <p className='about-us-page-header-p'>
          Get to know about us and the work we do.
        </p>
      </div>
    </div>
  );
};

export default Header;
