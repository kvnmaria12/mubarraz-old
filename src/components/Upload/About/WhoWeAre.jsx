const WhoWeAre = ({ setWhomWeAreValue }) => {
  const onChangeHandler = (e) => {
    setWhomWeAreValue(e.target.value);
  };

  return (
    <div className='who-we-are-sub-header-main'>
      <label htmlFor='who-we-are-sub-header'>HomePage Sub-Category</label>
      <select
        onChange={onChangeHandler}
        name='who-we-are-sub-header'
        id='who-we-are-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='WhoWeAreImage'>WhoWeAreImage</option>
      </select>
    </div>
  );
};

export default WhoWeAre;
