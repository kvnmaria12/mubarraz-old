import './About.css';
import AboutUs from './AboutUs';
import WhoWeAre from './WhoWeAre';

const About = ({
  aboutSubValue,
  setAboutSubValue,
  setAboutAboutusValue,
  setWhomWeAreValue,
}) => {
  const onChangeHandler = (e) => {
    setAboutSubValue(e.target.value);
  };

  const renderSubDropDown = (value) => {
    switch (value) {
      case 'About Us':
        return <AboutUs setAboutAboutusValue={setAboutAboutusValue} />;
      case 'Whom We Are':
        return <WhoWeAre setWhomWeAreValue={setWhomWeAreValue} />;
      default:
        break;
    }
  };

  return (
    <div className='about-dropdown'>
      <label htmlFor='about'>HomePage Category</label>
      <select onChange={onChangeHandler} name='about-dropdown' id='about'>
        <option value=''>Please choose an option</option>
        <option value='About Us'>About Us</option>
        <option value='Whom We Are'>Whome We Are</option>
      </select>

      {renderSubDropDown(aboutSubValue)}
    </div>
  );
};

export default About;
