import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import EmploymentVisa from './components/Careers/VisaRequirements/EmploymentVisa';
import WorkPermit from './components/Careers/VisaRequirements/WorkPermit';
import GeneralAttestation from './components/Careers/VisaRequirements/GeneralAttestation';
import { Routes, Route } from 'react-router-dom';
import ValveServices from './pages/ValveServices';
import UpcomingServicesPage from './pages/UpcomingServicesPage';
import SpecializedServicesPage from './pages/SpecializedServicesPage';
import ActuatorAndGearBoxTesting from './pages/ActuatorAndGearBoxTesting';
import ValveAutomation from './pages/ValveAutomation';
import OffShoreMobility from './pages/OffShoreMobility';
import ValveAsset from './pages/ValveAsset';
import ReverseEngineering from './pages/ReverseEngineering';
import MultiPortManifold from './pages/MultiPortManifold';
import { useState } from 'react';
import { ServicesContext } from './context/ServicesContext';

function App() {
  const [isActuatorClicked, setIsActuatorClicked] = useState(false);
  const [isValveAutomationClicked, setIsValveAutomationClicked] =
    useState(false);
  const [isOffShoreClicked, setIsOffShoreClicked] = useState(false);
  const [isValveAssetClicked, setIsValveAssetClicked] = useState(false);

  const [isReverseEngClicked, setIsReverseEngClicked] = useState(false);

  const [isMultiPortClicked, setIsMultiPortClicked] = useState(false);

  return (
    <ServicesContext.Provider
      value={{
        isActuatorClicked,
        setIsActuatorClicked,
        isValveAutomationClicked,
        setIsValveAutomationClicked,
        isOffShoreClicked,
        setIsOffShoreClicked,
        isValveAssetClicked,
        setIsValveAssetClicked,
        isReverseEngClicked,
        setIsReverseEngClicked,
        isMultiPortClicked,
        setIsMultiPortClicked,
      }}
    >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about-us' element={<AboutUs />}></Route>
        {/* <Route path='services' element={<Services />}></Route> */}
        <Route path='projects' element={<Projects />}></Route>
        <Route path='careers' element={<Careers />}></Route>
        <Route path='contact-us' element={<ContactUs />}></Route>
        <Route path='emp-visa' element={<EmploymentVisa />}></Route>
        <Route path='work-permit' element={<WorkPermit />}></Route>
        <Route
          path='general-attestation'
          element={<GeneralAttestation />}
        ></Route>
        <Route path='valve-services' element={<ValveServices />}></Route>
        <Route
          path='specialized-services'
          element={<SpecializedServicesPage />}
        ></Route>
        <Route
          path='upcoming-services'
          element={<UpcomingServicesPage />}
        ></Route>
        <Route
          path='services/actuator-and-gearbox-testing'
          element={<ActuatorAndGearBoxTesting />}
        ></Route>
        <Route
          path='services/valve-automation'
          element={<ValveAutomation />}
        ></Route>
        <Route
          path='services/offshore-mobility'
          element={<OffShoreMobility />}
        ></Route>
        <Route path='services/valve-asset' element={<ValveAsset />}></Route>
        <Route
          path='services/reverse-engineering'
          element={<ReverseEngineering />}
        ></Route>
        <Route
          path='services/multiport-manifold'
          element={<MultiPortManifold />}
        ></Route>
      </Routes>
    </ServicesContext.Provider>
  );
}

export default App;
