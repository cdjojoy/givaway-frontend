import React from 'react';


function Image (props) {
  return (
    <div className="image">
            <img 
               src={props.src} 
               alt={props.alt}
            />     
    </div>
  );
}
export default Image;
