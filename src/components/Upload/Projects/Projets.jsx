import MajorProjects from './MajorProjects';
import './Projects.css';
import RecentProjects from './RecentProjects';

const Projets = ({
  projectSubValue,
  setProjectsSubValue,
  setMajorProjectsValue,
  setRecentProjectsValue,
}) => {
  const onChangeHandler = (e) => {
    setProjectsSubValue(e.target.value);
  };

  const renderSubDropDown = (value) => {
    switch (value) {
      case 'Major Projects':
        return <MajorProjects setMajorProjectsValue={setMajorProjectsValue} />;
      case 'Minor Projects':
        return (
          <RecentProjects setRecentProjectsValue={setRecentProjectsValue} />
        );
      default:
        break;
    }
  };

  return (
    <div className='home-dropdown'>
      <label htmlFor='home'>HomePage Category</label>
      <select onChange={onChangeHandler} name='home-dropdown' id='home'>
        <option value=''>Please choose an option</option>
        <option value='Major Projects'>Major Projecs</option>
        <option value='Minor Projects'>Minor Projects</option>
      </select>

      {renderSubDropDown(projectSubValue)}
    </div>
  );
};

export default Projets;
