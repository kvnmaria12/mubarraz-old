import './Header.css';

const Header = () => {
  return (
    <div className='products-page'>
      <div className='projects-page-header-image'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='projects-page-header-content'
      >
        <h3>Our Projects</h3>
        <h1>Some Latest Project</h1>
        <p>See some of our latest successfull projects.</p>
      </div>
    </div>
  );
};

export default Header;
