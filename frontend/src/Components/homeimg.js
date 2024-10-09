import React from 'react';
import track from '../images/track.png';

function HomeImg() {
  return (
    
      <div className="w-full h-full pading-2x ">
        <img 
          src={track} 
          alt="Home" 
          className="w-full h-full object-fill" 
        />
      </div>
   
  );
}

export default HomeImg;
