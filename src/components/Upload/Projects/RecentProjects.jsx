const RecentProjects = ({ setRecentProjectsValue }) => {
  const onChangeHandler = (e) => {
    setRecentProjectsValue(e.target.value);
  };

  return (
    <div className='specialized-service-sub-header-main'>
      <label htmlFor='specialized-service-sub-header'>
        Services Page Sub-Category
      </label>
      <select
        onChange={onChangeHandler}
        name='specialized-service-sub-header'
        id='specialized-service-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='MinorProjectImage1'>MinorProjectImage1</option>
        <option value='MinorProjectImage2'>MinorProjectImage2</option>
        <option value='MinorProjectImage3'>MinorProjectImage3</option>
        <option value='MinorProjectImage4'>MinorProjectImage4</option>
        <option value='MinorProjectImage5'>MinorProjectImage5</option>
        <option value='MinorProjectImage6'>MinorProjectImage6</option>
        <option value='MinorProjectImage7'>MinorProjectImage7</option>
        <option value='MinorProjectImage8'>MinorProjectImage8</option>
        <option value='MinorProjectImage9'>MinorProjectImage9</option>
        <option value='MinorProjectImage10'>MinorProjectImage10</option>
      </select>
    </div>
  );
};

export default RecentProjects;
