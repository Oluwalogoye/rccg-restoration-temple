import { useNavigate } from 'react-router-dom';
import CardComponent from '../NewsCard/CardComponent';
import './NewsComponent.css'; // Assuming you have a CSS file for styling
import dots from './dots.png';
import cadePrize from './cade-prize.jpg'
import floridaInstitute from './florida-institute.jpeg'

import { originalPath } from '../../../other/constants';

import newsData from '../../../other/press/newsData';

function NewsComponent() {
  const navigate = useNavigate();

  // const handleButtonClick = (title) => {
  //   // Replace spaces with hyphens and encode URI for special characters
  //   const pathTitle = encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());
  //   navigate(`${originalPath}/press-releases/${pathTitle}`);
  // };

  const handleButtonClick = (navigtionPath) => {
    navigate(navigtionPath);
  }

  return (
    <div className='main-container'>
      <img src={dots} className="dots"/>
      {/* <h3>Latest news</h3> */}
      <h3></h3>

      <div className='news-container'>
        
      {newsData.slice(0, 3).map((item, index) => (
        <CardComponent
          key={index}
          title={item.title}
          imageSrc={item.imageSrc}
          caption={item.caption}
          buttonText={item.buttonText ? item.buttonText : '' }
          onButtonClick={() => handleButtonClick(item.link)}
          onClick={() => handleButtonClick(item.link)}
        />
      ))}
      </div>
    </div>  
    
  );
}

export default NewsComponent;
