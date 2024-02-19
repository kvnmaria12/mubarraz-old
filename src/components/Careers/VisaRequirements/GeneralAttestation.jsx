import './GeneralAttestation.css';
import NavBar from '../../../components/NavBar/NavBar';
import scrollToTopOfPage from '../../../utils/scrollToTopOfPage';

const GeneralAttestation = () => {
  scrollToTopOfPage();

  return (
    <>
      <NavBar />
      <div className='general-attestation'>
        <div className='general-attestation-img'></div>
        <div className='general-attestation-header-content'>
          <h1>General Attestation</h1>
        </div>

        <div className='general-attestation-main-content'>
          <h1>General Attestation</h1>
          <p>The following documents will be required for visa processing:</p>
          <ol>
            <li>
              <p>
                The candidate is to have the original certificate
                attested/authenticated by a solicitor or notary public in his or
                her country of origin.
              </p>
            </li>
            <li>
              <p>
                The original certification is then to be attested/authenticated
                by the Ministry/Department of Foreign Affairs in the candidate's
                country of origin (some countries such as South Africa require
                that documents be attested/authenticated by the
                Ministry/Department of Education prior to this).
              </p>
            </li>
            <li>
              <p>
                Documents are then to be attested by the U.A.E. embassy in the
                candidate's country of origin.
              </p>
            </li>
            <li>
              <p>
                The attested documents are then to be couriered to the MOI HR
                department for further processing.
              </p>
            </li>
            <li>
              <p>
                Only on receipt of the attested certification and other
                documentation required will the company submit an application
                for the visa.
              </p>
            </li>
            <li>
              <p>
                This information is provided as a guide. Candidates are advised
                to contact the Ministry/Department of Foreign Affairs and U.A.E.
                Embassy in his country of origin to check the procedure and
                processing fees. If there is no U.A.E. Embassy in their country
                of origin, candidates are advised to contact the closest
                neighbouring country's U.A.E. Embassy.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default GeneralAttestation;
