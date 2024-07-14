import React from 'react';
import './CallToAction.scss';

import { originalPath } from '../../../other/constants';

import { useNavigate } from 'react-router-dom';


const CallToAction = (props) => {
  // const { logo, title, descriptions, backgroundImage, hideLogo } = props;
  // const { logo, title, descriptions, hideLogo, className } = props;
  const { logo, title, descriptions, hideLogo, className, link, buttonName } = props;
  const logoClass = hideLogo ? 'logo hidden' : 'logo';
  
  const navigate = useNavigate();
  
  const handleButtonClick = (navigateLink = `${originalPath}/who-we-are`) => {
    // Replace spaces with hyphens and encode URI for special characters
    navigate(navigateLink);
  };

  return (
    <div className={`rollins-container ${className}`}>
    {/* // <div className="rollins-container"> */}
      {/* <img src={logo} className={logoClass} alt="Logo" /> */}
      {!hideLogo && <img src={logo} className='logo' alt="Logo" />}
      <h3 className='title'>{title}</h3>
      {
        descriptions.map((description, index) => (
          <p key={index} className='description'>{description}</p>
        ))
      }
      {buttonName && <button className='button' onClick={() => handleButtonClick(link)}>
        <span>{buttonName}</span>
      </button>}
    </div>
  );
};

CallToAction.defaultProps = {
  hideLogo: false  // By default, the logo will be shown
};

export default CallToAction;
