import logo from '../../assets/NewLogo2.png';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';

import './NavBar.css';

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [isServicesClicked, setIsServicesClicked] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <div className={`nav-bar-container ${mobile ? 'mobile-layout' : ''}`}>
      <div className={`nav-bar ${mobile ? 'mobile-layout' : ''} `}>
        <div className='nav-bar-img'>
          <NavLink to='/'>
            <img
              className='muboins-logo-image'
              src={logo}
              alt='muboins-logo-image'
            />
          </NavLink>
          <div className='logo-text'>
            <h1 className='muboins-logo-h1'>Extending Plant Asset Life </h1>
          </div>
          <button
            className={`mobile-menu-icon ${mobile ? 'close' : ''}`}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
        <div className='container'>
          <div className='scroll'>
            <div className='right-to-left'>
              <p>
                Welcome to our Mubarraz Oil filed installation LLC (MOI)
                MUBOINS, where we have provided top notch services for OIL &
                GAS, POWER, SENAAT, RO industries since 1999.
              </p>
            </div>
          </div>
        </div>
        <div className={`nav-elements ${mobile ? 'mobile-layout' : ''}`}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about-us'>About Us</NavLink>
            </li>
            <li onMouseOver={() => setIsHover(!isHover)}>
              <NavLink onClick={() => setIsServicesClicked(!isServicesClicked)}>
                Services
              </NavLink>

              {/* {mobile ? (
                <>
                  <AiOutlineUp
                    className='sevice-down-arrow'
                    style={{
                      color: '#ffb109',
                      fontSize: '22px',
                      cursor: 'pointer',
                      marginTop: '2px',
                    }}
                  />
                </>
              ) : (
                <>
                  <AiOutlineDown
                    className='sevice-down-arrow'
                    style={{
                      color: '#ffb109',
                      fontSize: '22px',
                      cursor: 'pointer',
                      marginTop: '2px',
                    }}
                  />
                </>
              )} */}
            </li>
            {mobile ? (
              <li>
                {isServicesClicked && (
                  <div className='is-services-clicked-div'>
                    <div>
                      <Link to='/valve-services'>Valve Services</Link>
                    </div>
                    <div>
                      <Link to='/specialized-services'>
                        Specialized Services
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              ''
            )}

            <li>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/careers'>Career</NavLink>
            </li>
            <li className='contact-us-nav-bar'>
              <NavLink to='/contact-us'>Contact Us</NavLink>
            </li>
            <li>
              <span className='span-icon'>
                <a href='tel:+971 25504004'>
                  <FaMobileAlt />
                </a>
              </span>
            </li>
            <li>
              <span className='span-icon'>
                <a href='mailto:info@muboins.ae'>
                  <AiOutlineMail />
                </a>
              </span>
            </li>
          </ul>
          {/* <div className='contact-us-icons'>
            <div className='contact-us-mobile contact-us'>
              <FaMobileAlt />
              <p>+971 25504004</p>
            </div>
            <div className='contact-us-email contact-us'>
              <AiOutlineMail />
              <p>info@muboins.ae</p>
            </div>
          </div> */}
        </div>
      </div>
      {isHover && (
        <div
          className='hover-services'
          onMouseLeave={() => setIsHover(!isHover)}
        >
          <div className='services-list'>
            <div
              onMouseOver={() => setSelectedIndex(0)}
              onClick={() => navigate('/valve-services')}
              className={`services-list-1 services-list-item ${
                selectedIndex === 0 ? 'active' : ''
              }`}
            >
              <h2> Valve Services</h2>
            </div>
            <div
              className={`services-list-2 services-list-item ${
                selectedIndex === 1 ? 'active' : ''
              }`}
            >
              <h2
                onClick={() => navigate('/specialized-services')}
                onMouseOver={() => setSelectedIndex(1)}
              >
                Specialized Services
              </h2>
            </div>

            {/* <div
              className={`services-list-3 services-list-item ${
                selectedIndex === 2 ? 'active' : ''
              }`}
            >
              <h2
                onClick={() => navigate('/upcoming-services')}
                onMouseOver={() => setSelectedIndex(2)}
              >
                Upcoming Services
              </h2>
            </div> */}
          </div>

          {/* services details */}
          {/* <div className='servies-detail'>
            {selectedIndex === 0 && (
              <div className='single-stop-service-detail'>
                <div className='single-stop-service-1'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-2'>
                  <h2>Actuator & Gearbox Servicing</h2>
                </div>
                <div className='single-stop-service-3'>
                  <h2>Valve Automation.</h2>
                </div>
                <div className='single-stop-service-4'>
                  <h2>Offshore Mobile workshop facility.</h2>
                </div>
                <div className='single-stop-service-5'>
                  <h2>Valve Asset Management</h2>
                </div>
                <div className='single-stop-service-6'>
                  <h2>Reverse engineering on valve components</h2>
                </div>
                <div className='single-stop-service-7'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-8'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-9'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-10'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-11'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='single-stop-service-12'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
              </div>
            )}
            {selectedIndex === 1 && (
              <div className='specialized-service-detail'>
                <div className='specialized-service-1'>
                  <h2>Repair & testing of all type of Valves</h2>
                </div>
                <div className='specialized-service-2'>
                  <h2>Actuator & Gearbox Servicing</h2>
                </div>
                <div className='specialized-service-3'>
                  <h2>Valve Automation.</h2>
                </div>
                <div className='specialized-service-4'>
                  <h2>Offshore Mobile workshop facility.</h2>
                </div>
                <div className='specialized-service-5'>
                  <h2>Valve Asset Management</h2>
                </div>
                <div className='specialized-service-6'>
                  <h2>Reverse engineering on valve components</h2>
                </div>
              </div>
            )}
            {selectedIndex === 2 && (
              <div className='specialized-service-detail'>
                <div className='specialized-service-1'>
                  <h2>Online PSV Testing / Atex Trevitest</h2>
                </div>
                <div className='specialized-service-2'>
                  <h2>FUGITIVE EMISSION TEST (FET) Facility</h2>
                </div>
                <div className='specialized-service-3'>
                  <h2>API Testing</h2>
                </div>
                <div className='specialized-service-4'>
                  <h2>Drilling and Wellhead Equipment Repair</h2>
                </div>
                <div className='specialized-service-5'>
                  <h2> X-MAS Tree Repairs and Modifications</h2>
                </div>
                <div className='specialized-service-6'>
                  <h2>Pipeline reservation services</h2>
                </div>
              </div>
            )}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default NavBar;
