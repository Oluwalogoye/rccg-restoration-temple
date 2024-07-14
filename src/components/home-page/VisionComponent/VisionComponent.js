import React from 'react';
// import './VisionComponent.scss';  // Make sure to create this CSS file
import horse from './horse.png'
import CallToAction from '../../other/CallToAction/CallToAction';

const VisionComponent = () => {
  const customStyles = {
    backgroundImage: "url('vet.png')",
  }

  return (
    <CallToAction 
      logo={horse} 
      title="OUR VISION" 
      descriptions={[
        `Aviana believes that its technology can fill unmet medical needs in the US and around
        the world, where POC diagnosis can make a difference in human health. Eventually, Aviana’s
        intent is to develop a “Device in Every Hand” that can be used for diagnoses of commonly
        encountered non-life threatening infections by anyone with access to a smartphone or smart
        device.`,
        `With smartphone use becoming commonplace in most countries, Aviana’s technology can be
        used in nearly any setting. For its development path, Aviana anticipates marketing to
        healthcare providers who can use it without requiring lab size equipment and processes,
        with eventual migration, in time, to personal and home use as a simple attachment to a smart device.`
      ]}
      // backgroundImage="url('vet.png')"
      // styles={customStyles}
      className="vet-background"
      hideLogo={true}
    />
  );
};

export default VisionComponent;
