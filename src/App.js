// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/other/Header/Header';
// import SlideShow from './components/slideshow1/Slideshow';
import PegasusComponent from './components/home-page/PegasusComponent/PegasusComponent';
import Frame from "./components/other/Rollins/Frame"
import InfoComponent from './components/home-page/Sensatek2/InfoComponent';
import NewsComponent from './components/other/NewsComponent/NewsComponent';
import VisionComponent from './components/home-page/VisionComponent/VisionComponent';

import ContactUs from './components/contact-us/ContactUs/ContactUs';

import FeaturedComponent from './components/home-page/FeaturedComponent/FeaturedComponent';

import { originalPath } from './other/constants';

import PressSection from './components/press/PressSection';

import TechnologiesComponent from './components/technologies/TechnologiesComponent';

import OurTeam from './components/about-us/copy-paste/OurTeam'

import Applications from './components/applications/Applications';

import PressReleaseComponent from './components/press/individual-pages/PressReleaseComponent';

// import useScrollToTop from './other/useScrollToTop';
import ScrollToTop from './components/other/Utils/ScrollToTop';

import CallToAction from './components/other/CallToAction/CallToAction';

import GiveComponent from './components/give/GiveComponent'


function App() {
  // useScrollToTop();


  return (
    // <>
    //   <Header/>
    //   <PegasusComponent />
    //   <InfoComponent/>
    //   <VisionComponent/>
    //   <NewsComponent/>
      

    // </>
    <Router>
      <Header/>
      <ScrollToTop>
        <Routes>
          <Route exact path={originalPath} element={
            <>
              <CallToAction 
                title="Welcome" 
                descriptions={[
                  `Greetings in the name of the Lord Jesus Christ. It is my pleasure to welcome
                  you to the website of RCCG Restoration Temple, Bronx, New York. It is our hope that
                  this website gives you an insight into who we are and what we do.  Our church is a safe place
                  for people like you and I. It is a place where prayers get answered, people receive healing,
                  and problems are solved.`
                ]}
                className="pediatrician-background"
                hideLogo={true}
                buttonName='LEARN MORE'
              />
              <InfoComponent />
              {/* <VisionComponent />
              <FeaturedComponent/> */}
              <PegasusComponent />
              <NewsComponent />
              {/* Include the Frame component here if needed */}
            </>
          }/>
          <Route path={`${originalPath}/sermons`} element={<PressSection />} />
          <Route path={`${originalPath}/contact-us`} element={<ContactUs />} />
          <Route path={`${originalPath}/get-involved`} element={<TechnologiesComponent />} />
          <Route path={`${originalPath}/our-team`} element={<OurTeam />} />
          <Route path={`${originalPath}/who-we-are`} element={<Applications />} />
          {/*For news*/}
          <Route path={`${originalPath}/sermons/:title`} element={<PressReleaseComponent />} />
          <Route path={`${originalPath}/give`} element={<GiveComponent />}/>


          
          {/* Add other routes as needed */}
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
