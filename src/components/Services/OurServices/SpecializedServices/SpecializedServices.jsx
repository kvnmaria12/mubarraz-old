import SpecializedService from './SpecializedService';
import './SpecializedService.css';
import { specializedServicesData } from '../../../../utils/specializedServicesData';
import SingleStopValveService from '../SingleStopValveService/SingleStopValveService';
const SpecializedServices = () => {
  return (
    <div className='specialized-services'>
      {specializedServicesData.map((data, i) => (
        <SingleStopValveService key={data.id} number={i} {...data} />
      ))}
    </div>
  );
};

export default SpecializedServices;
