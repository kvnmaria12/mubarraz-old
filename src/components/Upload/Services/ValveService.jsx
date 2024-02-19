const ValveService = ({ setValveServiceValue }) => {
  const onChangeHandler = (e) => {
    setValveServiceValue(e.target.value);
  };

  return (
    <div className='valve-service-sub-header-main'>
      <label htmlFor='valve-service-sub-header'>
        Services Page Sub-Category
      </label>
      <select
        onChange={onChangeHandler}
        name='valve-service-sub-header'
        id='valve-service-sub-header'
      >
        <option value=''>Please choose an option</option>
        <option value='RepairAndTestingImage'>RepairAndTestingImage</option>
        <option value='ActuatorAndGearBoxImage'>ActuatorAndGearBoxImage</option>
        <option value='ValveAutomationImage'>ValveAutomationImage</option>
        <option value='OffShoreMobileImage'>OffShoreMobileImage</option>
        <option value='ValveAssesmentImage'>ValveAssesmentImage</option>
        <option value='ReverseEngineeringImage'>ReverseEngineeringImage</option>
        <option value='MultiPortImage'>MultiPortImage</option>
        <option value='OnSiteRepairImage'>OnSiteRepairImage</option>
        <option value='StructuralEquipmentImage'>
          StructuralEquipmentImage
        </option>
        <option value='PressureTestingImage'>PressureTestingImage</option>
        <option value='EISupportImage'>EISupportImage</option>
        <option value='TechnicalSupportImage'>TechnicalSupportImage</option>
        <option value='OEMRepresentationImage'>OEMRepresentationImage</option>
        <option value='CryogenicImage'>CryogenicImage</option>
        <option value='OEMSparePartsImage'>OEMSparePartsImage</option>
      </select>
    </div>
  );
};

export default ValveService;
