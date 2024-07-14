import React, { useState, useEffect } from 'react';
// Import an icon or use a div-based hamburger icon
import { FiMenu, FiX } from 'react-icons/fi'; // Importing FiX
import logo from './logo.svg';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';

import {originalPath} from '../../../other/constants'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // const menuItems = ["CASE STUDIES", "ABOUT US", "NEWS", "VIDEOS", "CONTACT US"];
  const menuItems = [
    { title: "GET INVOLVED", path: `${originalPath}/get-involved` },
    { title: "WHO WE ARE", path: `${originalPath}/who-we-are` },
    { title: "OUR TEAM", path: `${originalPath}/our-team` },
    // { title: "PRESS RELEASES", path: `${originalPath}/press-releases` },
    { title: "SERMONS", path :`${originalPath}/sermons`},
    // { title: "PUBLICATIONS", path: `${originalPath}/blah3` },
  
    // Add other menu items with their respective paths
    { title: "CONTACT US", path: `${originalPath}/contact-us` },
    { title: "GIVE", path: `${originalPath}/give`}

  ];

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle a class on the body
    // if (!isMenuOpen) {
    //   document.body.classList.add('no-scroll');
    // } else {
    //   document.body.classList.remove('no-scroll');
    // }
  };

  useEffect(() => {
    // Function to run when the effect is applied or cleaned up
    const toggleBodyScroll = () => {
      if (isMenuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    // Call the function
    toggleBodyScroll();

    // Cleanup function to be called when the component is unmounted or before the effect runs again
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]); 

  // Updated isActive function
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div>
      <header>
        <nav>
          <a href={`${originalPath}`} className="logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="hamburger-icon" /> : <FiMenu className="hamburger-icon" />} 
          </div>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setIsMenuOpen(false)}>
                <Link to={item.path} className={isActive(item.path) ? 'clicked' : ''}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bottom-line"></div>
      </header>
      {isMenuOpen && (
        <nav className="mobile-nav">
            <div className="nav-links-container">
              {menuItems.map((item, index) => (
                  <Link to={item.path} onClick={() => setIsMenuOpen(false)} className={isActive(item.path) ? 'clicked' : ''}>
                    {item.title}
                  </Link>
              ))}
            </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
