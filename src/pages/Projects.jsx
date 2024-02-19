import Header from '../components/Projects/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import ProjectsOverview from '../components/Projects/ProjectsOverview/ProjectsOverview';
import PhotoGallery from '../components/Projects/PhotoGallery/PhotoGallery';
import ProjectsFooter from '../components/Projects/Footer/ProjectsFooter';
import Footer from '../components/Footer/Footer';

const Projects = () => {
  return (
    <div className='projects-page-main'>
      <NavBar />
      <Header />
      <ProjectsOverview />
      {/* <ProjectsDone /> */}
      <PhotoGallery />
      <ProjectsFooter />
      <Footer />
    </div>
  );
};

export default Projects;
