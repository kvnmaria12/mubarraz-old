import NavBar from '../components/NavBar/NavBar';
import Header from '../components/ContactUs/Header/Header';
import Form from '../components/ContactUs/Form/Form';
import GetInTouch from '../components/ContactUs/GetInTouch/GetInTouch';

const ContactUs = () => {
  return (
    <div className='contact-us-page'>
      <NavBar />
      <Header />
      <Form />
      <GetInTouch />
    </div>
  );
};
export default ContactUs;
