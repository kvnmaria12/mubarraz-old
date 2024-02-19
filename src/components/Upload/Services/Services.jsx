import SpecializedService from './SpecializedService';
import UpComingService from './UpComingService';
import ValveService from './ValveService';

const Services = ({
  servicesSubValue,
  setServicesSubValue,
  setValveServiceValue,
  setSpecializedServiceValue,
  setUpcomingServiceValue,
}) => {
  const onChangeHandler = (e) => {
    setServicesSubValue(e.target.value);
  };

  const renderSubDropDown = (value) => {
    switch (value) {
      case 'Valve Service':
        return <ValveService setValveServiceValue={setValveServiceValue} />;
      case 'Specialized Service':
        return (
          <SpecializedService
            setSpecializedServiceValue={setSpecializedServiceValue}
          />
        );
      case 'UpComing Service':
        return (
          <UpComingService setUpcomingServiceValue={setUpcomingServiceValue} />
        );
      default:
        break;
    }
  };

  return (
    <div className='services-dropdown'>
      <label htmlFor='services'>Services Category</label>
      <select onChange={onChangeHandler} name='services-dropdown' id='home'>
        <option value=''>Please choose an option</option>
        <option value='Valve Service'>Valve Service</option>
        <option value='Specialized Service'> Specialized Service</option>
        <option value='UpComing Service'> UpComing Service</option>
      </select>

      {renderSubDropDown(servicesSubValue)}
    </div>
  );
};

export default Services;
