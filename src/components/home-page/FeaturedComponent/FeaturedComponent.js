import React from 'react';
import './FeaturedComponent.css'; // Assuming you have a CSS file for styles

// You would import your images here, ensure you have the correct paths
import nasaLogo from './NASA_logo.png';
import cadeLogo from './cade_logo.png';
import fitLogo from './FIT_logo.png';
import prUsNewswireLogo from './pr_usnewswire_logo.jpeg';

import navy from './navy.png';
import airForce from './air_force.png';
import techcxo from './techcxo.png';
import lab1 from './lab1.png';
import lab2 from './lab2.png';
import lab3 from './lab3.png';

// ... import other logos

const FeaturedComponent = () => {
  return (
    <div className="featured-logos-container">
      <h2>Partners</h2>
      <div className="logos">
        <a href="https://www.nasa.gov/">
          <img src={nasaLogo} alt="Power Engineering" />
        </a>
        <a href="https://cademuseum.org/">
          <img src={cadeLogo} alt="Turbomachinery" />
        </a>
        <a href="https://www.fit.edu/">
          <img src={fitLogo} alt="Turbomachinery" />
        </a>
        <a href="https://www.prnewswire.com/">
          <img src={prUsNewswireLogo} alt="Turbomachinery" />
        </a>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiR3_DItvWCAxUcX0cBHcuDAkIYABAAGgJxdQ&ase=2&gclid=CjwKCAiAjrarBhAWEiwA2qWdCPddpG96G7uSmJ0qTCBaCqKcC_f8RwlAnz2em73AbYrP1S0qBRRcnxoCCJkQAvD_BwE&ohost=www.google.com&cid=CAESVuD2_8TNF_vath3ROnsssfSEWuL6hPRSoc_K60koNiTAZBem277YnIqNzlEUMIBPl1sK8JxdMj-mBfznABN-IdozYG5WPuZ9vTb7D3UGUDoTbNunKEB6&sig=AOD64_23fsBOMc10AmTPmvQpk__Q5pHopQ&q&nis=4&adurl&ved=2ahUKEwi-t-fItvWCAxUxAHkGHUpxAR8Q0Qx6BAgOEAE">
          <img src={navy} alt="Turbomachinery" />
        </a>
        <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiq9PjntvWCAxURTEcBHdgmBaUYABAAGgJxdQ&ase=2&gclid=CjwKCAiAjrarBhAWEiwA2qWdCNysDqB2Vvv_fBTxPdVnLzuwyiYcNCPMjQ_BvCXAi4cqbsB6EocF_BoCa_MQAvD_BwE&ei=dJZtZYjCAdet5NoPqqakgA4&ohost=www.google.com&cid=CAESVuD2BKvpV2L5hYED5CAmD9WcDNkJV6Bwpd_82xSDamW4aH-oJ9hloJsiUI3whO_8ikyJYmujIc6w5D8vSioi03K3kXCw53STTRRr4AfqvyYQmMBcj2aP&sig=AOD64_1zrXjPTwWhjawx1Yta4oY6dLNo8w&q&sqi=2&nis=4&adurl&ved=2ahUKEwiIzO_ntvWCAxXXFlkFHSoTCeAQ0Qx6BAgNEAE">
          <img src={airForce} alt="Turbomachinery" />
        </a>
        <a href="https://www.techcxo.com/">
          <img src={techcxo} alt="Turbomachinery" />
        </a>
        <a href="https://akoustis.com/">
          <img src={lab1} alt="Turbomachinery" />
        </a>
        <a href="https://www.microvetdiagnostics.com/">
          <img src={lab2} alt="Turbomachinery" />
        </a>
        <a href="https://coppermountaintech.com/">
          <img src={lab3} alt="Turbomachinery" />
        </a>
        
        {/* Repeat for other logos */}
      </div>
    </div>
  );
};

export default FeaturedComponent;
