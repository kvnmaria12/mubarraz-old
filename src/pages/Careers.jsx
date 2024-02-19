import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Careers/Header/Header';
import WhoAreWe from '../components/Careers/WhoAreWe/WhoAreWe';
import EmployeeBenefits from '../components/Careers/EmployeeBenefits/EmployeeBenefits';
import VisaRequirements from '../components/Careers/VisaRequirements/VisaRequirements';
import Footer from '../components/Footer/Footer';
import JobOpeningsHeader from '../components/Careers/JobOpenings/JobOpeningsHeader/JobOpeningsHeader';
import JobOpeningsList from '../components/Careers/JobOpenings/JobOpeningsList/JobOpeningsList';
import JobOpeningsForm from '../components/Careers/JobOpenings/JobOpeningsForm/JobOpeningsForm';

const Careers = () => {
  return (
    <div className='careers-page'>
      <NavBar />
      <Header />
      {/* <WhoAreWe /> */}
      <JobOpeningsHeader />
      <JobOpeningsList />
      <JobOpeningsForm />
      {/* <EmployeeBenefits /> */}
      {/* <VisaRequirements /> */}
      <Footer />
    </div>
  );
};

export default Careers;
