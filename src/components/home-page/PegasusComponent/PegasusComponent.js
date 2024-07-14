import React from 'react';
import './PegasusComponent.scss';  // Make sure to create this CSS file
import horse from './horse.png'
import logo from './zelle_logo.png'

import CallToAction from '../../other/CallToAction/CallToAction';


const PegasusComponent = () => {
  // const customStyles = {
  //   backgroundImage: "url('pediatrician.png')",
  // }
  
  // const backgroundImage = "url(\'pediatrician.png\')";
  return (
    <CallToAction 
      // logo={horse}
      logo={logo} 
      title="" 
      descriptions={[
        `Give your tithe and offering through Zelle to Rccgrestorationtemple@gmail.com`,
        // `The Greek mythological winged stallion is emblematic of the Aviana Molecular Technologies’
        //  health capture sensor platform. `,
        // `Just as the strength of a stallion, coupled with the versatility of flight, presents a world
        // of untethered possibilities, powerful, revolutionary RF sensor technology, updated to modern 
        // electronics, interfacing with a novel, robust biological innovation, allows for a paradigm
        // shift in mobile health data capture using devices such as tablets, smart phones, and yet
        // to be imagined applications, into health data capture tools.`,
        // `The journey to such a transformed world is just beginning…`
      ]}
      className="connected-background"
      // backgroundImage={backgroundImage}
      // styles={customStyles}
    />


    // <div className="rollins-container">
    //   {/* <img src="https://www.sensatek.com/wp-content/uploads/2022/05/logo-lizardeye.png" className='logo' alt="Lizardeye Logo" /> */}
    //   <img src={horse} className='logo' alt="Lizardeye Logo" />
    //   <h3 className='title'>A world of untethered possibilities, powerful, revolutionary RF sensor technology</h3>
    //   <p className='description'>
    //   The Greek mythological winged stallion is emblematic of the Aviana Molecular Technologies’ health capture sensor platform. 
    //   The strength of a stallion, coupled with the versatility of flight, presents a world of untethered possibilities. 
    //   </p>
    //   <p className='description'>
    //   In the same way, a powerful, revolutionary RF sensor technology, updated to modern electronics,
    //   interfacing with a novel, robust biological innovation, allows for a paradigm shift in mobile health data capture 
    //   </p>
    //   {/* <img src="https://www.sensatek.com/wp-content/uploads/2022/05/logo-lizardeye.png" className='logo' alt="Lizardeye Logo" />
    //   <h3 className='title'>Gain vivid insights into industrial equipment</h3>
    //   <p className='description'>
    //     As a predictive maintenance and alerting tool, Lizardeye is a smart infrared camera system powered by artificial intelligence (AI) at the edge.
    //     The system continuously monitors industrial equipment in a more timely and comprehensive manner, and wirelessly communicates its inferences to software that automatically generates on-demand narrative reports.
    //   </p> */}
    //   <button className='button'>LEARN MORE</button>
    // </div>
  );
};

export default PegasusComponent;
