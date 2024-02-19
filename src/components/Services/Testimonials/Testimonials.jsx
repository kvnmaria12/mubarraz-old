import './Testimonials.css';
import { ImQuotesRight } from 'react-icons/im';

const Testimonials = (props) => {
  const { testimonial, img, name } = props;
  return (
    <div className='testimonials'>
      {/* <ImQuotesRight color='#d7b65d' fontSize='22px' /> */}
      <p>{testimonial}</p>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Testimonials;
