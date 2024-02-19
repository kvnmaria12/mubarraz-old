import './SingleCertificate.css';

const SingleCertificate = ({ img, certificateName }) => {
  return (
    <div className='single-certificate'>
      <img src={img} alt={certificateName} />
    </div>
  );
};

export default SingleCertificate;
