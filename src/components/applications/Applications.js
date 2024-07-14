import React from 'react';
import './Applications.css';

import lyme1 from './Lyme1.png';
import lyme2 from './Lyme2.png';
import covid from './covid.png';

const Applications = () => {
    return (
      <>
        <div class="lyme-container">
          <div className="covid-images-container">
            <img src="https://rccgjesushouseny.org/wp-content/uploads/2018/07/ny-beliefs.jpg" className='img' />
          </div>
          <p class="lyme-content">
              Our mission and value statments are based on many 
              of our fundamental beliefs. We believe that the entire 
              Scripture, both Old and New Testament are written by the 
              inspiration of the Holy Spirit – II Tim. 3:16-17. 
              All the Christian teachings and the Christian attitude
              of the Children of God are such as are established in 
              the Holy Bible – II Tim. 3:10-15; II Peter 1:21; John 17:17; Ps. 119:105.
          </p>

          <p class="lyme-content">
            We believe that the Bible is the written and revealed Will of God. 
            Man’s position to God, the way to obtain salvation, woe and 
            destruction awaiting sinners that refuse to repent and 
            everlasting joy that is kept for the born again souls. 
            All the Bible teachings are holy, what the Bible reveals 
            as the will of God are such that we should accept, and 
            whatever God writes in the Bible and His Law are to 
            remain unchangeable; for the Heavens and Earth may pass away 
            but the Word of God stands forever. Deut. 4:22; Rev. 22:18, 19; Matt. 24:34-38.
          </p>

          <h2 class="lyme-header">Our Mission
          </h2>
          <div className="covid-images-container">
            <img src="https://www.rccg.org/wp-content/uploads/2020/08/208-2089134_rccg-logo-redeemed-christian-church-logo-1024x1024.png" className='img' />
          </div>
          <p class="lyme-content">
          As received by the General Overseer (G.O.), 
          Pastor E. A. Adeboye, and communicated to the 
          Headquarters leaders, our vision and mission 
          statement shall remain intact, with a qualifying 
          addendum in view of the peculiarity of the 
          demography in the North American region. They are as follows:
          </p>
          <p class="lyme-content">{"1) To make heaven."}</p>
          <p class="lyme-content">{"2) To take as many people with us."}</p>
          <p class="lyme-content">{`3) To have a member of RCCG in every 
            family of all nations.`}</p>
          <p class="lyme-content">{`4) To accomplish No. 1 above, holiness 
            will be our lifestyle.`}</p>
          <p class="lyme-content">{`5) To accomplish No. 2 and 3 above, 
            we will plant churches within five minutes walking distance 
            in every city and town of developing countries and within 
            five minutes driving distance in every city and town of 
            developed countries.`}</p>
          <p class="lyme-content">
          We will pursue these objectives until every Nation in 
          the world is reached for the Lord Jesus Christ. 
          </p>
          {/* <p class="lyme-content">
              The results of this study indicate high
              sensitivity (100%). In this study, we have
              shown that the Aviana sensor platform has
              the potential to be a POC method for
              improved detection of host generated
              antibodies against Bb.
          </p>
          <div className="lyme-images-container">
            <img src={lyme1} className='img' />
            <img src={lyme2} className='img' />
          </div> */}
          
        </div>

        <div className="covid-container">
          <h2 class="lyme-header">OUR VALUES</h2>
          <p className="lyme-content bold">
          We Value The Pursuit Of God
          </p>

          <p className="lyme-content">
          We thirst for His presence and to know more of Him through 
          private and public worship, the Word and prayer Psalm 42:1-2, 63:1-3; 
          Matt 5:23; Luke 6:21
          </p>

          <p className="lyme-content bold">
          We Value The Servant Leadership
            {/* <a class="lyme-link"
              href="https://avianamolecular.sharepoint.com/:w:/g/ETxQASMouZVEvgdaREkcP04BQyP8gFOUXLgyHHqSj5kjOA?e=TZ6Vdx"
              target="_blank" rel="noopener noreferrer">[2]</a> */}
          </p>

          
          {/* <div className="covid-images-container">
            <img src={covid} className='img' />
          </div> */}
          <p className="lyme-content">
          Our leaders shall serve the members of the church as Christ 
          did selflessly and not for profit or self-glorification. 
          Matthew 10:42; John 13:13-15; Acts 20:18-19 
          </p>
          <p className="lyme-content bold">
          We Value Christlikeness
          </p>
          <p className="lyme-content">
          We want to be like the Lord and savior in all conduct. We want 
          to minister by serving people the way He did with compassion, 
          under the power and anointing of the Holy Spirit. We shall 
          convey the love, mercy and power of God through the ministry 
          of the church. Luke 14:16-20; John 20:21; Ephesians 5:2; Colossians 3:12
          </p>
          <p className="lyme-content bold">
          We Value The Mercy Of God
          </p>
          <p className="lyme-content">
          We shall always recognize in humility that all the goodness 
          we receive from God is a result of His mercies, even those 
          blessings we may regard as “rights” because of our relationship 
          with Him as children. We shall therefore seek to extend mercy 
          to another and to all who come under the ministry of the church. 
          Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11
          </p>
          <p className="lyme-content bold">
          We Value Godly Family Life
          </p>
          <p className="lyme-content">
          Where parents live as examples and cultivate an environment 
          in which the spiritual, emotional and social growth of their 
          children can be fully accomplished. Deuteronomy 6:7; Proverbs 22:6; 2 Timothy 3:15
          </p>
          <p className="lyme-content bold">
          We Value Giving
          </p>
          <p className="lyme-content">
          We shall always recognize in humility that all the goodness 
          we receive from God is a result of His mercies, even those 
          blessings we may regard as “rights” because of our relationship 
          with Him as children. We shall therefore seek to extend mercy 
          to another and to all who come under the ministry of the church. Psalm 52:8; Lamentation 3:22-23; Colossians 3:12; James 5:11
          </p>
          <p className="lyme-content bold">
          We Value Marital Fidelity
          </p>
          <p className="lyme-content">
          Where husband and wife can depend on each other to provide spiritual, 
          emotional and intimate needs. 
          Proverbs 5:15-19; 1 Corinthians 7:3-5, Galatians 5:19-20; Hebrews 13:4
          </p>
          <p className="lyme-content bold">
          We Value Personal And Corporate Integrity
          </p>
          <p className="lyme-content">
          and therefore shall deal and conduct our 
          affairs truthfully and honestly such that the gospel of Jesus Christ 
          shall not suffer any reproach because of our conduct. 
          2 Corinthians 13:8; Ephesians 4:15, 5:9; 6:14; James 5:12
          </p>
          <p className="lyme-content bold">
          We Value Purposeful Singleness
          </p>
          <p className="lyme-content">
          where the uniqueness of being single (unmarried) should be used to bless the church. Matthew 19:12c; 1 Corinthians 7:32-34
          </p>
          <p className="lyme-content bold">
          We Love Unity In The Body of Christ.
          </p>
          <p className="lyme-content">
          We Love Unity In The Body of Christ. 
          We agree with the scriptures that all 
          who believe in Jesus Christ as Lord and 
          Savior belong to one body of Christ. We shall 
          seek to maintain the unity with all such believers. 
          Psalm 133:1; Romans 12:5; Ephesians 4:3-6,13
          </p>
          <p className="lyme-content bold">
          We Value The Church Of God As The Body Of Christ.
          </p>
          <p className="lyme-content">
          Our desire shall be to seek its good, growth and 
          prosperity. Matthew 16:18; Ephesians 3:9-11; 5:25-27; 1 Timothy 3:5
          </p>
          <p className="lyme-content bold">
          We Value Simplicity
          </p>
          <p className="lyme-content">
          and desire to do nothing in our private and public worship just for 
          “effects” and “showing off”. Philippians 2:3; Colossians 3:17
          </p>
          <p className="lyme-content bold">
          We Value The Individual Members Of The Church
          </p>
          <p className="lyme-content">
          and shall seek to treat one another with respect 
          and appropriate courtesy irrespective of gender, 
          social and physical status. We shall seek to help 
          members to grow in the grace and to fully realize 
          their God given potentials. 
          John 13:35, Romans 12: 9-10, Galatians 6:10, Thessalonians 3:12, Colossians 3:12-14.
          </p>
          <p className="lyme-content bold">
          We Value Modesty In Our Lifestyle.
          </p>
          <p className="lyme-content">
          We shall seek to be generous and gracious in our speech, firm in our convictions and chaste in our dressing. 
          Galatians 5:26; Philippians 2:3; 1 Timothy 4:14; 1 Peter 3:3-4; 1 John 2:15-17
          </p>
        </div>
      </>

    
  
    );
};

export default Applications;
