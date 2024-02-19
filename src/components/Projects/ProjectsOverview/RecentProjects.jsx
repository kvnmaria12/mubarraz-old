import { recentProjectsData } from '../../../utils/recentProjectsData';
import RecentProject from './RecentProject';

const RecentProjects = () => {
  return (
    <>
      {recentProjectsData.map((value) => (
        <RecentProject key={value.id} {...value} />
      ))}
    </>
  );
};

export default RecentProjects;
