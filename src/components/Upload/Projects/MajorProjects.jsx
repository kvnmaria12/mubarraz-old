const MajorProjects = ({ setMajorProjectsValue }) => {
  const onChangeHandler = (e) => {
    setMajorProjectsValue(e.target.value);
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
        <option value='MajorProjectImage1'>MajorProjectImage1</option>
        <option value='MajorProjectImage2'>MajorProjectImage2</option>
        <option value='MajorProjectImage3'>MajorProjectImage3</option>
        <option value='MajorProjectImage4'>MajorProjectImage4</option>
        <option value='MajorProjectImage5'>MajorProjectImage5</option>
        <option value='MajorProjectImage6'>MajorProjectImage6</option>
        <option value='MajorProjectImage7'>MajorProjectImage7</option>
        <option value='MajorProjectImage8'>MajorProjectImage8</option>
        <option value='MajorProjectImage9'>MajorProjectImage9</option>
        <option value='MajorProjectImage10'>MajorProjectImage10</option>
        <option value='MajorProjectImage11'>MajorProjectImage11</option>
        <option value='MajorProjectImage12'>MajorProjectImage12</option>
      </select>
    </div>
  );
};

export default MajorProjects;
