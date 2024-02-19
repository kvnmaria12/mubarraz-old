import './UpComingServices.css';
import { upcomingServicesData } from '../../../../utils/upcomingServicesData';
import UpComingService from './UpComingService';

const UpComingServices = (props) => {
  return (
    <div className='upcoming-services'>
      {upcomingServicesData.map((data) => (
        <UpComingService key={data.id} {...data} />
      ))}
    </div>
  );
};

export default UpComingServices;
