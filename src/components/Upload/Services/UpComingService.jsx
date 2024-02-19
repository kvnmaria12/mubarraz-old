const UpComingService = ({ setUpcomingServiceValue }) => {
  const onChangeHandler = (e) => {
    setUpcomingServiceValue(e.target.value);
  };

  return (
    <div className='upcoming-sub-header-main'>
      <label htmlFor='upcoming-sub-header'>HomePage Sub-Category</label>
      <select
        onChange={onChangeHandler}
        name='upcoming-sub-header'
        id='upcoming-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='OnlinePSVImage'>OnlinePSVImage</option>
        <option value='FugitiveImage'>FugitiveImage</option>
        <option value='APITestingImage'>APITestingImage</option>
        <option value='DrillingImage'>DrillingImage</option>
        <option value='XMasTreeImage'>XMasTreeImage</option>
        <option value='PipeLineImage'>PipeLineImage</option>
      </select>
    </div>
  );
};

export default UpComingService;
