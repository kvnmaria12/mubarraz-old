import { singleStopValveServicesData } from '../../../../utils/singleStopValveServicesData';
import SingleStopValveService from './SingleStopValveService';
import './SingleStopValveService.css';

const SingleStopValveServices = () => {
  return (
    <div className='single-stop-services'>
      {singleStopValveServicesData.map((data, i) => {
        return <SingleStopValveService key={data.id} number={i} {...data} />;
      })}
    </div>
  );
};

export default SingleStopValveServices;
