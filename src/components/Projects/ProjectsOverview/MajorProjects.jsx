import { majorProjectsData } from '../../../utils/majorProjectsData';
import MajorProject from './MajorProject';

const MajorProjects = () => {
  return (
    <>
      {majorProjectsData.map((value) => (
        <MajorProject key={value.id} {...value} />
      ))}
    </>
  );
};

export default MajorProjects;
