const Header = ({ setHomeHeaderValue }) => {
  const onChangeHandler = (e) => {
    setHomeHeaderValue(e.target.value);
  };

  return (
    <div className='home-sub-header-main'>
      <label htmlFor='home-sub-header'>HomePage Sub-Category</label>
      <select
        onChange={onChangeHandler}
        name='home-sub-header'
        id='home-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='HeaderImage1'>HeaderImage1</option>
        <option value='HeaderImage2'>HeaderImage2</option>
        <option value='HeaderImage3'>HeaderImage3</option>
        <option value='HeaderImage4'>HeaderImage4</option>
      </select>
    </div>
  );
};

export default Header;
