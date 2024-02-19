import './EmploymentVisa.css';
import NavBar from '../../NavBar/NavBar';
import scrollToTopOfPage from '../../../utils/scrollToTopOfPage';

const EmploymentVisa = () => {
  scrollToTopOfPage();
  return (
    <>
      <NavBar />
      <div className='employment-visa'>
        <div className='employment-visa-img'></div>
        <div className='employment-visa-header-content'>
          <h1>Employment Visa</h1>
        </div>

        <div className='employment-visa-main-content'>
          <h1>Employment Visa</h1>
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
                Scanned coloured passport sized photographs (white background)
                of you and your dependants (U.A.E. based dependants only).
              </p>
            </li>
            <li>
              <p>Mother's maiden name</p>
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
                will need to be Attested. Please view the General Procedure for
                more information on getting your documents Attested.
              </p>
            </li>
            <li>
              <p>
                (Any certificate/diploma be in any language other than English
                or Arabic, please ensure to have the institution or university
                translate it into English before getting it ATTESTED by the
                U.A.E. Embassy of your respective country)
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default EmploymentVisa;
