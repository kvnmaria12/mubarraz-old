import './Home.css';
import Header from './Header';
import SuccessStories from './SuccessStories';

const Home = ({
  homeCategoryValue,
  setHomeCategoryValue,
  setHomeHeaderValue,
  setHomeSuccessValue,
}) => {
  const onChangeHandler = (e) => {
    setHomeCategoryValue(e.target.value);
  };

  const renderSubDropDown = (value) => {
    switch (value) {
      case 'Header':
        return <Header setHomeHeaderValue={setHomeHeaderValue} />;
      case 'Success Stories':
        return <SuccessStories setHomeSuccessValue={setHomeSuccessValue} />;
      default:
        break;
    }
  };

  return (
    <div className='home-dropdown'>
      <label htmlFor='home'>HomePage Category</label>
      <select onChange={onChangeHandler} name='home-dropdown' id='home'>
        <option value=''>Please choose an option</option>
        <option value='Header'>Header</option>
        <option value='Success Stories'>Success Stories</option>
      </select>

      {renderSubDropDown(homeCategoryValue)}
    </div>
  );
};

export default Home;
