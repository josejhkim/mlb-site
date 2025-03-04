import React from 'react';

const PlatformBottom = () => {
  return (
    <div 
      className="
        w-full
        relative
        -z-5
        flex  
        justify-center items-center 
      ">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 120 600 100"
        width="600"
        height="100"
        className="
          w-full 
          h-full
      ">

        <polyline 
          points="0,120 0,140" 
          stroke="#8214DD" 
          strokeWidth="3" 
          strokeOpacity={0.9} 
          fill="none" 
        />

        <polyline 
          points="600,120 600,140" 
          stroke="#8214DD" 
          strokeWidth="3" 
          strokeOpacity={0.9} 
          fill="none" 
        />
        
        <polyline 
          points="
            0,120 150,170 300,185,
            450,170 600,120
          " 
            stroke="#8214DD" 
            strokeWidth="3" 
            strokeOpacity={1}
            fill="none" 
          />
        
        <polyline 
          points="
            0,130 150,180 300,195, 
            450,180 600,130
          " 
          stroke="#8214DD" 
          strokeWidth="3" 
          strokeOpacity={0.7} 
          fill="none" 
        />

        <polyline 
          points="
            0,140 150,190 300,205, 
            450,190 600,140
          " 
          stroke="#8214DD" 
          strokeWidth="3" 
          strokeOpacity={0.5} 
          fill="none" 
        />

        <polyline 
          points="
            0,137 150,187 300,202, 
            450,187 600,137
          " 
          stroke="#FF03FF" 
          strokeWidth="7"
          strokeOpacity="0.6" 
          filter="url(#blur)" 
          fill="none" 
        />

        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PlatformBottom;
