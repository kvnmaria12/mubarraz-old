import './Projects.css';
import image1 from '/images/AboutUs/Projects/Project4.jpg';
import image2 from '/images/AboutUs/Projects/Project5.jpg';
import image3 from '/images/AboutUs/Projects/Project6.jpg';
import { useNavigate } from 'react-router-dom';
import ScrollToTopOfPage from '../../../utils/scrollToTopOfPage.js';

const Projects = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    ScrollToTopOfPage();
    navigate('/projects');
  };

  return (
    <div className='projects-abouts-us-page'>
      <div className='projects-about-us-page-header'>
        <h2>Our Awesome Projects</h2>
        <h1>We Take All Related Oil & Gas Projects</h1>
        <p>We have listed some of our successfull projects.</p>
      </div>
      <div className='projects-about-us-container'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='projects-about-us-page-project-1 projects-about-us-page-projects'
        >
          <div className='projects-about-us-page-project-1-img'>
            <img loading='lazy' src={image1} alt='project-img' />
          </div>
          <div className='projects-about-us-page-project-content'>
            <h1>Fabrication of Jackets</h1>
            <p>Erection of Scaffolding for the fabrication of Jackets</p>
            <button onClick={handleNavigate}>Read More</button>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2000'
          className='projects-about-us-page-project-2 projects-about-us-page-projects'
        >
          <div className='projects-about-us-page-project-2-img'>
            <img loading='lazy' src={image2} alt='project-img' />
          </div>
          <div className='projects-about-us-page-project-content'>
            <h1>Chemical Testing of Pressure Vessel</h1>
            <p>Erection of Scaffolding for the Pressure Vessel</p>
            <button onClick={handleNavigate}>Read More</button>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='2000'
          className='projects-about-us-page-project-3 projects-about-us-page-projects'
        >
          <div className='projects-about-us-page-project-3-img'>
            <img loading='lazy' src={image3} alt='project-img' />
          </div>
          <div className='projects-about-us-page-project-content'>
            <h1>Fabrication of Accommodation Module</h1>
            <p>Providing skilled personnel for fabrication works</p>
            <button onClick={handleNavigate}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
