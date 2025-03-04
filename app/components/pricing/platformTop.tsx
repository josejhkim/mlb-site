import React from 'react';

const PlatformTop = () => {
  return (
    <div
      className="
        relative
        -z-5
        flex  
        justify-center items-center 
    ">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 80"
        width="600"
        className="w-full h-full"
      >

        <polyline 
          points="
            0,60 150,20 300,5, 
            450,20 600,60
          " 
          fill="none" 
          stroke="#5A00B5" 
          strokeWidth="3" 
          strokeOpacity={1} 
        />
        
        <polyline 
          points="0,60 0,80" 
          stroke="#5A00B5" 
          strokeWidth="5" 
          strokeOpacity={1} 
          fill="none" 
        />

        <polyline 
          points="600,60 600,80" 
          stroke="#5A00B5" 
          strokeWidth="5" 
          strokeOpacity={1} 
          fill="none" 
        />
      </svg>
    </div>
  );
};

export default PlatformTop;
