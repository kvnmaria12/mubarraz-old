import './ProjectsFooter.css';

const ProjectsFooter = () => {
  return (
    <div className='projects-page-footer'>
      {/* <div className='projects-page-footer-header'>
        <h3>Gallery</h3>
        <h1>Some of our latest Project Gallery</h1>
        <p>Some of our recent projects photo gallery</p>
      </div> */}
      <div className='projects-page-footer-img'></div>
      <div
        data-aos='fade-right'
        data-aos-duration='1000'
        className='projects-page-footer-content'
      >
        <h3>WORK WITH US</h3>
        <h1>Let's collaborate to ensure a better future</h1>
        <p>Come Join us and let's ensure a better future.</p>
      </div>
    </div>
  );
};

export default ProjectsFooter;
