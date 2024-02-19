import './Header.css';

const Header = () => {
  return (
    <div className='contact-us-page-header'>
      <div className='contact-us-page-header-image'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='contact-us-page-header-content'
      >
        <h3>Contact</h3>
        <h1>Get to know us</h1>
        <p>Contact us and let's make a better future</p>
      </div>
    </div>
  );
};

export default Header;
