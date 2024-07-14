import React from 'react';
import './PressSection.css'; // Assuming you have a CSS file for styles
import CardComponent from '../other/NewsCard/CardComponent';

import dots from './dots.png';
import cadePrize from './cade-prize.jpg'
import floridaInstitute from './florida-institute.jpeg'

// import { FaSearch } from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { originalPath } from '../../other/constants';
 
// import newsData from '../../other/press/newsData';
import sermonsData from '../../other/sermons/sermonsData'

import { useNavigate } from 'react-router-dom';


const PressSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = (title) => {
    // Replace spaces with hyphens and encode URI for special characters
    const pathTitle = encodeURIComponent(title.replace(/[\s.,]+/g, '-'));
    navigate(`${originalPath}/sermons/${pathTitle}`);
  };

  // Placeholder data for the news articles

  return (
    <div className="news-section">
      <div className="title-search-category-container">
        {/* <div className='pageNewsTitle'> */}
          <h1>Sermons</h1>
        {/* </div> */}

        <div className="controls-container">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>
            {/* In your component */}
              {/* <FaSearch /> */}
              {/* <SearchIcon /> */}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="category-filter">
            <select>
              <option value="">Filter by Category</option>
              {/* Categories options would go here */}
            </select>
          </div>
        </div>
      </div>

      

      <div className='news-container'>
        <img src={dots} class="dots"/>

        {sermonsData.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            imageSrc={item.imageSrc} // Assuming the imageSrc is imported as a module
            caption={item.caption}
            buttonText="READ MORE"
            onButtonClick={() => handleButtonClick(item.title)}
            onClick={() => handleButtonClick(item.title)} // Passed as onClick
          />
        ))}
      </div>
    </div>
  );
};

export default PressSection;
