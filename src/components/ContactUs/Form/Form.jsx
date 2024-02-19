import { useState } from 'react';
import './Form.css';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (checkForUserDetails()) {
      const userFormDetails = {
        userName: name,
        userEmail: email,
        userNumber: phone,
        userMessage: message,
        userNameCompany: company,
        userSubject: subject,
      };

      console.log(userFormDetails);
      sendMail();
      setName('');
      setPhone(0);
      setEmail('');

      setMessage('');
    } else {
      // ScrollToTopOfPage();
      toast.error('Please add all fields', {
        duration: 3000,
        position: 'top-center',
        style: { background: 'red', color: 'white', fontSize: '16px' },
      });
    }
  };

  function checkForUserDetails() {
    if (
      name === '' ||
      phone === 0 ||
      email === '' ||
      company === '' ||
      subject === '' ||
      message === ''
    ) {
      return false;
    }
    return true;
  }

  function sendMail() {
    const overAllDetails = {
      userName: name,
      phone: phone,
      email: email,
      company: message,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_l97mekb',
        'template_ef1703i',
        overAllDetails,
        'rXTv-yz9u6uQz_3UR'
      )
      .then(
        (result) => {
          toast.success('MUBOINS TEAM WILL CONTACT YOU SOON', {
            duration: 3000,
            position: 'top-center',
            style: {
              background: 'black',
              color: 'white',
              fontSize: '16px',
            },
          });
          console.log('result', result);
        },
        (error) => {
          toast.error('There is some error in our email service');
          console.error('error', error);
        }
      );
  }

  const preventKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className='contact-us-page-container'>
      <div
        data-aos='fade-left'
        data-aos-duration='1000'
        className='contact-us-page-content'
      >
        <h2>Contact Us</h2>
        <h1>Please let us know your query</h1>
        {/* <p>
          Fusce tellus leo elementum in tortor id volutpat pellentesque ipsum
          luctus Curabitur laoree.
        </p> */}
      </div>
      <div className='contact-us-page-img'></div>

      <div className='contact-us-page-container-main'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='contact-us-page-info-container'
        >
          <h1>Message us, we will be in touch shortly</h1>
          <p>We will get back to you shortly.</p>
        </div>
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='contact-us-page-form-container'
        >
          <form
            onSubmit={submitHandler}
            onKeyDown={preventKeyDownHandler}
            className='contact-us-page-form'
          >
            <div className='name-phone-parent-container'>
              <div className='input-name-container'>
                <label className='inline' htmlFor='name'>
                  Name
                </label>
                <input
                  placeholder='Name'
                  type='text'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='input-phone-container'>
                <label className='inline' htmlFor='name'>
                  Phone
                </label>
                <input
                  placeholder='Phone'
                  type='number'
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className='email-company-parent-container'>
              <div className='input-email-container'>
                <label className='inline' htmlFor='name'>
                  Email
                </label>
                <input
                  placeholder='Email'
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='input-company-container'>
                <label className='inline' htmlFor='name'>
                  Company
                </label>
                <input
                  placeholder='Company'
                  type='text'
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div className='subject-container'>
              <label htmlFor='name'>Subject</label>
              <input
                placeholder='Subject'
                type='text'
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className='text-area-container'>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='Message'
                name=''
                id=''
                cols='10'
                rows='10'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className='button-container'>
              <button className='submit-button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Form;
