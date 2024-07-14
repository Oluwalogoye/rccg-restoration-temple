import React from 'react';
import './Frame.scss'


// const images = [
//   'https://avianamolecular.com/wp-content/uploads/2016/06/pediatrican.ccrop_.jpg',
//   'https://avianamolecular.com/wp-content/uploads/2016/05/AdobeStock_70706824_cropped-1-4.png',
  
// ];

const Frame = ({images}) => {
  return (
    <div className="frame-container">
      <div className="images-container">
      {images.map(({ url, title, description }, index) => (
          <div key={url} className="image-wrapper">
            <img src={url} className='img' alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Frame;
