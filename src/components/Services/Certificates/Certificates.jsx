import { aemPhotos } from '../../../utils/aemPhotos';
import SingleCertificate from './SingleCertificate';
import './SingleCertificate.css';

const Certificates = ({ title }) => {
  return (
    <div className='certificates'>
      <div className='cerfiticate-header'>
        <h1>{title ? title : 'Certificates'}</h1>
      </div>

      <div
        className='certificates-main'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        {aemPhotos.map((data) => {
          return <SingleCertificate key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Certificates;
