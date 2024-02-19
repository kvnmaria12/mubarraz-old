import { useState } from 'react';
import './ProjectsOverview.css';

const MajorProject = (props) => {
  const { img, title, endUser, client, scope, role, year, jobNumber } = props;

  const [readMore, setIsReadMore] = useState(false);

  const handleReadMoreBtn = () => {
    setIsReadMore(!readMore);
  };

  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      className='projects-page-project-done-main'
    >
      <div className='projects-page-project-done-content-img'>
        <img loading='lazy' src={img} alt='project-img' />
      </div>
      <div className='projects-page-project-done-content'>
        <h1>{title}</h1>
        {/* <h2>
          <strong>Client</strong>: {client}
        </h2> */}
        <p>
          <strong>End User</strong>: {endUser}
        </p>
        <p>
          <strong>Client</strong>: {client}
        </p>
        <p>
          <strong>Scope of Work</strong>: {scope}
        </p>
        <p>
          <strong>Job Number</strong>: {jobNumber}
        </p>
        {/* <p>
          <strong>Year</strong>: {year}
        </p> */}
        {/* {readMore && <></>} */}

        {/* <button onClick={handleReadMoreBtn}>
          {readMore ? 'Show Less' : 'Read More'}
        </button> */}
      </div>
    </div>
  );
};

export default MajorProject;
