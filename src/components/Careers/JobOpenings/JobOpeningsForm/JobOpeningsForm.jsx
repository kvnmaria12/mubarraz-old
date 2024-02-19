import './JobOpeningsForm.css';

const JobOpeningsForm = () => {
  return (
    <div className='job-openings-form-main'>
      <div className='apply-for-job'>
        <h1>Apply to Us</h1>
      </div>
      <form action='' className='job-openings-form'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='number' placeholder='Number' />
        <input type='file' />
        <textarea
          name=''
          id=''
          cols=''
          rows='5'
          placeholder='Comments'
        ></textarea>
        <button type='button'>Submit</button>
      </form>
    </div>
  );
};

export default JobOpeningsForm;
