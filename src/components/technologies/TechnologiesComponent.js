import React from 'react';
import CallToAction from '../other/CallToAction/CallToAction';

import Frame from "../other/Rollins/Frame"

// import tech1 from './tech1.png';
import involved_1 from './involved_1.jpg';
import involved_2 from './involved_2.jpg';
import involved_3 from './involved_3.jpg';
import tech2 from './tech2.png';
import tech3 from './tech3.png';
// import tech4 from './tech4.png';
// import tech5 from './tech5.jpg';
// import tech6 from './tech6.png';

const images = [
  {
    // url: "https://rccgrestorationarena.org/wp-content/uploads/2018/09/b5bcaf2c-8058-4c42-9669-098359ca96e6-800x800.jpg", 
    url: involved_1,
    title: `Invite Someone`,
    description: `Invite someone to come and find out how 
    God’s love can make their life meaningful and impactful.
    `
  },
  {
    // url: "https://rccgrestorationarena.org/wp-content/uploads/2018/09/8e761387-de76-48b0-b47d-22cf57046757-800x800.jpg", 
    url: involved_2,
    title: `Join a Team`,
    description: `Our Teams (departments) are dedicated 
    to providing a caring, comfortable, safe environment 
    and memorable worship experience for our members and 
    visitors.
    ` 
  },
  {
    // url: "https://rccgrestorationarena.org/wp-content/uploads/2018/09/20180909-MDP_1104-1198x800.jpg", 
    url: involved_3,
    title: `Participate in Other Services`,
    description: `These include 
    Digging Deep/Bible Study, Faith Clinic/Prayer Service, 
    Night Vigil. These services enable us to get renew our 
    Faith, as we pray to God and learn the Word of God with our 
    fellow breathen.
    `
  },
]

const TechnologiesComponent = () => {
  

  return (
    <>
      <CallToAction 
        title="Get Involved" 
        descriptions={[]}
        className="involved-background"
        hideLogo={true}
      />

      <Frame images={images}/>
    </>
  );
};

export default TechnologiesComponent;
