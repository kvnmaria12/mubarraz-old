const SuccessStories = ({ setHomeSuccessValue }) => {
  const onChangeHandler = (e) => {
    setHomeSuccessValue(e.target.value);
  };

  return (
    <div className='home-sub-success-stories-main'>
      <label htmlFor='home-sub-success-stories'>HomePage Sub-Category</label>
      <select
        onChange={onChangeHandler}
        name='home-sub-success-stories'
        id='home-sub-success-stories'
      >
        <option value=''>Please choose an option</option>
        <option value='SuccessStoriesImage1'>SuccessStoriesImage1</option>
        <option value='SuccessStoriesImage2'>SuccessStoriesImage2</option>
        <option value='SuccessStoriesImage3'>SuccessStoriesImage3</option>
      </select>
    </div>
  );
};

export default SuccessStories;
