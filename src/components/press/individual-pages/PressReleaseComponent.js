import React from 'react';
import { useParams } from 'react-router-dom';

// import newsData from '../../../other/press/newsData';
import sermonsData from '../../../other/sermons/sermonsData'
// import sermonData;
import { originalPath } from '../../../other/constants';

import './PressReleaseComponent.css'

function PressReleaseComponent() {
  const { title } = useParams();

  // You can fetch more data based on the title or implement more logic here
  // Find the correct news item based on the title
  // console.log(decodeURIComponent(title))

  let stringToMatch = `${originalPath}/sermons/${decodeURIComponent(title)}`

  sermonsData.forEach(item => {
    console.log("stringToMatch", stringToMatch)

    console.log("item.link", item.link)
  })

  
  const newsItem = sermonsData.find(item => stringToMatch === item.link);

  // Check if news item is found
  if (!newsItem) {
    return <div>No press release found for this title.</div>;
  }

  return (
    <div className="pressReleaseContainer">
      <h1>Press Release: {newsItem.title}</h1>
      <img src={newsItem.imageSrc} alt={`Image for ${newsItem.title}`} />
      {newsItem.paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{__html:paragraph}}></p>
      ))}
    </div>
  );
}

export default PressReleaseComponent;
