import './WhoAreWe.css';
import image from '/images/CareersPage/WhoAreWe/WhoWeAre.jpg';

const WhoAreWe = () => {
  return (
    <div className='careers-page-who-are-we'>
      <div
        data-aos='fade-down'
        data-aos-duration='1000'
        className='careers-page-who-are-we-header'
      >
        <h2>Who we are</h2>
        <h1>Providing affordable and reliable energy</h1>
        {/* <p>
          Fusce tellus leo elementum in tortor id volutpat pellentesque ipsum
          luctus Curabitur laoree.
        </p> */}
      </div>
      <div className='careers-page-who-are-we-content'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='careers-page-who-are-we-content-left'
        >
          <img src={image} alt='image' />
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='careers-page-who-are-we-content-right'
        >
          <h1>Who we are</h1>
          <p>
            MOI operates in Abu Dhabi and Dubai in the United Arab Emirates and
            we have, in the years since our beginnings, contributed spectacular
            landmarks to these regions. Our vision is to be the best
            construction company in our geographical area of operation and
            despite the challenges that such an aspiration may hold, we are
            dedicated to achieving it.
          </p>
          <br />
          <p>
            MOI adopts Recruitment and Selection processes founded on best
            practice procedures whilst encouraging the optimization of available
            resources, the promotion of career development and strict compliance
            to U.A.E. Labour Law. We are committed to developing innovative
            recruitment practices in our approach to providing strategic
            recruitment solutions - well-designed employee engagement and
            induction programs ensure that the transitions of new recruits into
            valued members of the MOI team are as seamless as possible.
          </p>
          <br />
          <p>
            MOI has received multiple accolades establishing ourselves as a
            recognized leader in the U.A.E construction industry. A significant
            contributor to this accomplishment lies in our employment standards
            which, first and foremost, ensure the success, growth and happiness
            of our most important resource, our employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
