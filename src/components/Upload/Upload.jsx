import './Upload.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Projets from './Projects/Projets';

const Upload = () => {
  const [file, setFile] = useState();
  const [selecteValue, setSelectedValue] = useState('');

  // HomePage State Value
  const [homeCategoryValue, setHomeCategoryValue] = useState('');
  const [homeSubCategoryValue, setHomeSubCategoryValue] = useState('');
  const [homeImageValue, setHomeImageValue] = useState('');

  // About us State Value
  const [aboutSubValue, setAboutSubValue] = useState('');
  const [aboutAboutUsValue, setAboutAboutusValue] = useState('');
  const [whomWeAreValue, setWhomWeAreValue] = useState('');

  // Services State
  const [servicesSubValue, setServicesSubValue] = useState('');
  const [valveServiceValue, setValveServiceValue] = useState('');
  const [specializedServiceValue, setSpecializedServiceValue] = useState('');
  const [upcomingServiceValue, setUpcomingServiceValue] = useState('');

  // Projects State
  const [projectSubValue, setProjectsSubValue] = useState('');
  const [majoreProjectsValue, setMajorProjectsValue] = useState('');
  const [recentProjectsValue, setRecentProjectsValue] = useState('');

  const sendData = (homeValue, aboutValue, servicesValue, projectsValue) => {
    let apiData = {};

    if (homeValue !== '') {
      apiData = {
        homeHeader: homeHeaderValue,
      };
    }
  };

  const onFileChangeHandler = async (e) => {
    setFile(e.target.files[0]);

    const imageName = {
      imageName: 'header.png',
    };

    const response = await axios.post(
      'http://localhost:5000/imageName',
      imageName
    );

    console.log(response);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(file);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('description', description);

    try {
      const reponse = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const responseData = await reponse.json();

      console.log(responseData);

      //   const result = await axios.post('', formData);
    } catch (error) {
      console.log(error);
    }
  };

  const selectHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  const renderSelect = (value) => {
    switch (value) {
      case 'Home':
        return (
          <Home
            homeCategoryValue={homeCategoryValue}
            setHomeCategoryValue={setHomeCategoryValue}
            setHomeSubCategoryValue={setHomeSubCategoryValue}
            homeImageValue={homeImageValue}
          />
        );

      case 'About':
        return (
          <About
            aboutSubValue={aboutSubValue}
            setAboutSubValue={setAboutSubValue}
            setAboutAboutusValue={setAboutAboutusValue}
            setWhomWeAreValue={setWhomWeAreValue}
            setSpecializedServiceValue={setSpecializedServiceValue}
          />
        );
      case 'Services':
        return (
          <Services
            servicesSubValue={servicesSubValue}
            setServicesSubValue={setServicesSubValue}
            setValveServiceValue={setValveServiceValue}
            setSpecializedServiceValue={setSpecializedServiceValue}
            setUpcomingServiceValue={setUpcomingServiceValue}
          />
        );
      case 'Projects':
        return (
          <Projets
            projectSubValue={projectSubValue}
            setProjectsSubValue={setProjectsSubValue}
            setMajorProjectsValue={setMajorProjectsValue}
            setRecentProjectsValue={setRecentProjectsValue}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className='upload'>
      <h1>Upload File</h1>
      <form
        method='post'
        encType='multipart/form-data'
        className='submit-form'
        onSubmit={submitHandler}
      >
        <label htmlFor='page'>Please Select Page</label>
        <select onChange={selectHandler} name='page' id='page'>
          <option value=''>Please choose an option</option>
          <option value='Home'>Home</option>
          <option value='About'>About</option>
          <option value='Services'>Services</option>
          <option value='Projects'>Projects</option>
        </select>

        {renderSelect(selecteValue)}
        {/* <input
          id='file'
          onChange={onFileChangeHandler}
          type='file'
          accept='image/*'
        ></input>
        <label htmlFor='description'>Description</label>
        <input
          id='description'
          onChange={(e) => setDescription(e.target.value)}
          type='text'
        ></input> */}
        {/* <button className='btn' type='submit'>
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Upload;
