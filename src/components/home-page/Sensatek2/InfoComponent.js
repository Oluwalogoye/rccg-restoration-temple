import React from 'react';
// import dots from './dots.png'
import './InfoComponent.css'; // Make sure to create an accompanying CSS file

const InfoComponent = () => {
  return (
    <div className="advisor-container">
      <div className="details">
					{/* <img src={dots} alt=""/> */}
      </div>
      <div className="advisor-header">
        <h1>About us</h1>
      </div>
      <div className="advisor-content">
        <p>
        We are a non-denomination church located in the most multi-cultural and racially
        integrated city in the world. Where she is uniquely positioned to impact and engage
        many from such diverse background. All are welcomed and accepted with open arms
        </p>
        <p>
        We are a parish of the Redeemed Christian Church of God, led by Pastor [Dr.] Enoch
        A. Adeboye as the General Overseas. In the past 2 decades the church has grown
        rapidly to almost every country in world. RCCG is a worldwide church established
        in 1952 with a mandate to take the gospel of salvation to the entire world, in line
        with the Great Commission of our Lord Jesus Christ. The Church is a bible believing
        body with emphases on holiness and righteousness. You are invited to come and worship
        with us, and be richly blessed. 
        </p>
        <p>
        {`"I have it all planned out, – plans to take care of you, not abandon you, plans to
        give you the future you hope for. When you call on Me, when you come and pray to Me,
        I’ll listen. When you come looking for Me, you’ll find Me. Yes, when you get serious
        about finding Me and want it more than anything else, I’ll make sure you won’t be
        disappointed. I’ll turn things around for you!” Jeremiah 29 v11–14`}
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;
