import './EmployeeBenefits.css';
import image from '/images/CareersPage/EmployeeBenefits/EmployeeBenefits.jpg';
import { ImCheckmark } from 'react-icons/im';

const EmployeeBenefits = () => {
  return (
    <div className='employee-benefits-main'>
      <div className='employee-benefits-content'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='employee-benefits-content-img'
        >
          <img src={image} alt='employee-benefits-image' />
        </div>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='employee-benefits-header'
        >
          <h1>Employment Standards</h1>
          <ul>
            <li>
              <ImCheckmark className='check-mark' />
              Fair remuneration and benefits based on our employee grading
              system
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Efficient internal communications
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Encouragement of innovative thinking
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Fairness in the workplace
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Consistent performance appraisals
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Recognition of top achievement
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Personal development and training
            </li>
            <li>
              <ImCheckmark className='check-mark' />
              Construction Risk Management responsibility
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBenefits;
