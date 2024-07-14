import React from 'react';
import './CallToAction.scss';  // Make sure to create this CSS file
import horse from './horse.png'

const CallToAction = () => {
  

  return (
    <div className="rollins-container">
      <img src={horse} className='logo' alt="Lizardeye Logo" />
      <h3 className='title'>A world of untethered possibilities, powerful, revolutionary RF sensor technology</h3>
      <p className='description'>
      The Greek mythological winged stallion is emblematic of the Aviana Molecular Technologies’ health capture sensor platform. 
      The strength of a stallion, coupled with the versatility of flight, presents a world of untethered possibilities. 
      </p>
      <p className='description'>
      In the same way, a powerful, revolutionary RF sensor technology, updated to modern electronics,
      interfacing with a novel, robust biological innovation, allows for a paradigm shift in mobile health data capture 
      </p>
      <button className='button'>LEARN MORE</button>
    </div>
  );
};

export default CallToAction;
