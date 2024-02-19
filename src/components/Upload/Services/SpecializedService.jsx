const SpecializedService = ({ setSpecializedServiceValue }) => {
  const onChangeHandler = (e) => {
    setSpecializedServiceValue(e.target.value);
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
        <option value='HydraulicBoldImage'>HydraulicBoldImage</option>
        <option value='HydraulicFlushingImage'>HydraulicFlushingImage</option>
        <option value='PipeColdCuttingImage'>PipeColdCuttingImage</option>
        <option value='SteelFabricationImage'>SteelFabricationImage</option>
        <option value='InWeldTestingImage'>InWeldTestingImage</option>
        <option value='MechnaicalLeakImage'>MechnaicalLeakImage</option>
      </select>
    </div>
  );
};

export default SpecializedService;
