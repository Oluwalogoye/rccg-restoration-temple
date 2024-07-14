import React from 'react';
import './CardComponent.css';

const CardComponent = ({ title, imageSrc, caption, buttonText, onButtonClick, onClick }) => {
  // let formattedCaption;

  const isCaptionArr = Array.isArray(caption)
  // if (Array.isArray(caption)) {
  //   // caption.
  //   caption.map((paragraph) => {
  //     const withBoldTag = paragraph.substring(0, 3) == `<b>`
  //     if (withBoldTag) {
  //       const strLen = paragraph.length
  //       const endIndex = ((strLen - 4) >= 3) ? (strLen - 4) : 3
  //       const removedTagStr = paragraph.substring(3, endIndex)
  //       return 
  //     }
  //     return ``;
  //   })
  // } else {
  //   formattedCaption = caption;
  // }


  return (
    <div className="card" onClick={onClick}> {/* Use the onClick prop here */}
      <img src={imageSrc} alt="Event" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-caption">{ (isCaptionArr) ? (
          caption.map((paragraph) => {
           
            if (paragraph.substring(0, 3) == `<b>` || paragraph.substring(0, 3) == `<a>`) {

              const boldTag = paragraph.substring(0, 3) == `<b>`
              const linkTag = paragraph.substring(0, 3) == `<a>`
              
              const strLen = paragraph.length
              const endIndex = ((strLen - 4) >= 3) ? (strLen - 4) : 3
              const removedTagStr = paragraph.substring(3, endIndex)
               
              if (boldTag) {
                return <p><b>{removedTagStr}</b></p>
              } else if (linkTag) {
                return <p><a href={removedTagStr} className='lyme-link'>{removedTagStr}</a></p>
              }
            } else if (paragraph.substring(0, 9) == `<literal>`) {
              const strLen = paragraph.length
              const endIndex = ((strLen - 10) >= 9) ? (strLen - 10) : 9
              const removedTagStr = paragraph.substring(9, endIndex)

              return <p dangerouslySetInnerHTML={{__html: removedTagStr}}></p>
            } 
            else if (paragraph.substring(0, 13) == `<a:same-line>`) {

              const strLen = paragraph.length
              const endIndex = ((strLen - 4) >= 13) ? (strLen - 4) : 13
              const removedTagStr = paragraph.substring(13, endIndex)

              return <a href={removedTagStr} className='lyme-link'>{removedTagStr}</a>

            }
            
            // else if (paragraph.substring(0, 3) == '<tag>') {
            //     let strLen = paragraph.length
            //     const endIndex = ((strLen - 6) >= 5)? (strLen - 6) : 5

            //     const removedTagStr = paragraph.substring(5, endIndex)
            //     strLen = removedTagStr.length


            //     // easier way
            //     let strBuilder = ``;
            //     let i = 0;
            //     while (i < strLen) {
            //     // for (let i = 0; i < strLen; i++) {
            //       let currChar = removedTagStr.charAt(i)

            //       if (currChar == `<`) {
            //         // opening tag, not closing tag
            //         const isOpeningTag = ((i + 1) < strLen) && (strLen.charAt(i + 1) != '/')  
            //         if (!isOpeningTag) {
            //           break
            //         }  
                    

            //         let tagNameStrBuilder = ``
                    
            //         let j = i;
            //         let foundEndTag = false
            //         while (j < strLen) {
            //         // for (let j = i; j < strLen; j++) {
                    
            //           let tagNameCurrChar = removedTagStr.charAt(j)
                      
            //           tagNameStrBuilder += tagNameCurrChar;

            //           if (tagNameCurrChar == `>` ){
            //             foundEndTag = true
                        
            //           }
            //           j++;
            //         }
            //         /* 
            //         ensure actual tag
            //           next, ensure next charIndex exist
            //             and that it closes with >
            //               can run forLoop until gets to >
            //                 another stringbuilder: tagNameStrBuilder

            //                 add tagNameStrBuilder to StrBuilder
                             
            //                 startIndex(j) = i 
            //           need to store the specific tag as variable
            //             tagName

            //         */ 

            //       } else if (curr) {

            //       }
            //       i = j;

            //       i++;
            //     }

              
            // } 
            else {

              return <p>{paragraph}</p>
            }
            
          })
          ) : caption
        }</p>
        <div onClick={(e) => { e.stopPropagation(); onButtonClick(); }} className="card-button">
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
