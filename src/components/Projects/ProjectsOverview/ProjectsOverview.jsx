import './ProjectsOverview.css';
import MajorProjects from './MajorProjects';
import RecentProjects from './RecentProjects';
import { useState } from 'react';

const ProjectsOverview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function displayContent(selectedIndex) {
    switch (selectedIndex) {
      case 0:
        return <MajorProjects />;
      case 1:
        return <RecentProjects />;
      default:
        break;
    }
  }

  return (
    <div className='projects-overview-section'>
      <div className='projects-overview-header-container'>
        <h1>Our Projects</h1>
        {/* <h1>MOI has done many projects around the world</h1>
        <p>Some of our successfull projects are listed below.</p> */}
        {/* <div className='projects-overview-header-container-buttons'>
          <button
            className={`${selectedIndex === 0 ? 'active' : null}`}
            onClick={() => {
              setSelectedIndex(0);
            }}
          >
            Major Projects
          </button>
          <button
            className={`${selectedIndex === 1 ? 'active' : null}`}
            onClick={() => {
              setSelectedIndex(1);
            }}
          >
            Recent Projects
          </button>
        </div> */}
      </div>
      <div className='projects-overview-header-container-buttons'>
        <button
          onClick={() => setSelectedIndex(0)}
          className={selectedIndex == 0 ? 'active' : 's'}
        >
          Valve Projects
        </button>
        <button
          onClick={() => setSelectedIndex(1)}
          className={selectedIndex == 1 ? 'active' : ''}
        >
          Specialized Projects
        </button>
      </div>
      <div className='projects-page-projects-done-container'>
        {displayContent(selectedIndex)}
        {/* <MajorProjects /> */}
        {/* <RecentProjects /> */}
      </div>
    </div>
  );
};

export default ProjectsOverview;
