import './VisaRequirement.css';
import visaImage from '/images/CareersPage/Visa/visa-image.jpg';

import { useNavigate } from 'react-router-dom';

const VisaRequirements = () => {
  const navigate = useNavigate();

  return (
    <div className='visa-requirements'>
      {/* <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='visa-requirements-image'
      >
        <img src={visaImage} alt='visa-image' />
      </div> */}
      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='visa-requirement-header'
      >
        <h1>Visa Requirements</h1>
        <p>
          All foreign Nationals wishing to work in the U.A.E require an
          Employment Visa or Work Permit which is issued by the Immigration
          Department after the approval from Ministry of Labour and Social
          Affairs.
        </p>
      </div>

      {/* content */}
      <div className='visa-requirement-content'>
        <div
          data-aos='fade-up'
          data-os-delay='1000'
          data-aos-duration='900'
          className='visa-requirement-content-page card-home-page-visa'
        >
          <h1>Employment Visa</h1>
          <p>
            New employment visa's are applicable to those being employed in the
            U.A.E for the first time, or who have not been employed in the U.A.E
            for the past 6 months. Employment visas are issued by the
            Immigration Department to all foreign nationals.
          </p>
          <button onClick={() => navigate('/emp-visa')}>Read More</button>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='3000'
          data-aos-duration='1400'
          className='visa-requirement-content-page card-home-page-visa'
        >
          <h1>
            Work Permit - for those currently in the U.A.E on spouse/family
            sponsorship
          </h1>
          <p>
            Work Permits can only be are processed for females who are currently
            residing in the U.A.E under the sponsorship of a spouse or parent.
          </p>
          <button
            className='work-permit-button'
            onClick={() => navigate('/work-permit')}
          >
            Read More
          </button>
        </div>
        <div
          data-aos='fade-up'
          data-os-delay='5000'
          data-aos-duration='1800'
          className='visa-requirement-content-page card-home-page-visa'
        >
          <h1>General Attestation Procedure</h1>
          <p>
            A prerequisite for any visa application is that a candidate have
            his/her highest educational qualification attested by the U.A.E.
            embassy in his/her country of origin. This is compulsory in order
            for any U.A.E based company to process an employment visa for the
            candidate.
          </p>
          <button onClick={() => navigate('/general-attestation')}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirements;
