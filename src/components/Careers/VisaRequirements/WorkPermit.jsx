import './WorkPermit.css';
import NavBar from '../../NavBar/NavBar';
import scrollToTopOfPage from '../../../utils/scrollToTopOfPage';

const WorkPermit = () => {
  scrollToTopOfPage();

  return (
    <>
      <NavBar />
      <div className='work-permit'>
        <div className='work-permit-img'></div>
        <div className='work-permit-header-content'>
          <h1>Work Permit</h1>
        </div>

        <div className='work-permit-main-content'>
          <h1>Work Permit</h1>
          <p>The following documents will be required for visa processing:</p>
          <ol>
            <li>
              <p>
                A colour copy of your passport is required. Ensure that your
                passport is still valid for at least 6 months prior to your
                arrival and that you have sufficient blank visa pages.
              </p>
            </li>
            <li>
              <p>
                A colour copy of your current residence visa page under your
                husband sponsorship.
              </p>
            </li>
            <li>
              <p>A colour copy of your husband's passport</p>
            </li>
            <li>
              <p>
                A colour copy of your husband's current residence visa page.
              </p>
            </li>
            <li>
              <p>
                Scanned coloured passport sized photographs (white background)
              </p>
            </li>
            <li>
              <p>Mother's Maiden Name</p>
            </li>
            <li>
              <p>
                Provide an original NOC letter in Arabic signed by your husband.
              </p>
            </li>
            <li>
              <p>
                Letter issued by your husband's employer addressed to Ministry
                Of Labour confirming the employment of your spouse. This letter
                must be in Arabic.
              </p>
            </li>
            <li>
              <p>
                Permanent street/postal address from home country & contact
                numbers.
              </p>
            </li>
            <li>
              <p>
                You will be required to have your Qualification Certificate
                ATTESTED by the U.A.E. Embassy of your respective country. For
                Non Degree/Certificate holders, original High School certificate
                will need to be Attested. Please view the for more information
                on getting your documents Attested.
              </p>
            </li>
            <li>
              <p>
                (Any certificate/diploma be in any language other than English
                or Arabic, please ensure to have the institution or university
                translate it into English before getting it ATTESTED by the
                U.A.E. Embassy of your respective country
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WorkPermit;
