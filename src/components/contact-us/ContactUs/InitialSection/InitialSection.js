import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './InitialSection.css'; // The CSS file for styling

function InitialSection() {
  return (
    <div className="page-container">
      <header className="page-header">
        {/* Logo and navigation could go here */}
      </header>
      <main className="main-content">
        <h1>Thank you for your interest<br />
        in RCCG Restoration Temple</h1>

        {/* Other content */}
      </main>
      
      <footer className="page-footer">
        <p>
          <FontAwesomeIcon icon={faEnvelope} className='fa-icon' /> 
          <a href='mailto:rccgrestorationtemple@gmail.com'>rccgrestorationtemple@gmail.com</a>
        </p>
        {/* <p>
          <FontAwesomeIcon icon={faPhone} /> 850.321.5993
        </p> */}
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='fa-icon' /> 
          <a href='https://www.google.com/maps/place/RCCG+Restoration+Temple/@40.8514637,-73.8464934,17z/data=!3m2!4b1!5s0x89c2f4aae2e94431:0xcb1c70af31d87564!4m6!3m5!1s0x89c2f4aae39f1c9b:0xe3a124cf0f822f36!8m2!3d40.8514637!4d-73.8439131!16s%2Fg%2F11hbq9wwr1?entry=ttu'>1892 Eastchester Rd, Bronx, NY 10461</a>
        </p>
      </footer>
    </div>
  );
}

export default InitialSection;
