const AboutUs = ({ setAboutAboutusValue }) => {
  const onChangeHandler = (e) => {
    setAboutAboutusValue(e.target.value);
  };

  return (
    <div className='about-sub-header-main'>
      <label htmlFor='about-sub-header'>HomePage Sub-Category</label>
      <select
        onChange={onChangeHandler}
        name='about-sub-header'
        id='about-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='AboutUsImage'>AboutUsImage</option>
      </select>
    </div>
  );
};

export default AboutUs;
