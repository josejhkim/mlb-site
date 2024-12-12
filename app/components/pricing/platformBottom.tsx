import React from 'react';

const PlatformBottom = () => {
  return (
    <div className="flex relative  justify-center items-center w-full -z-50">
      <svg
        className="w-full h-full"
        width="600"
        height="100"
        viewBox="0 120 600 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Line */}
        {/* <polyline points="0,70 150,20 300,5, 450,20 600,70" fill="none" stroke="#8214DD" strokeWidth="3" /> */}
        <polyline points="0,120 0,140" fill="none" stroke="#8214DD" strokeWidth="3" strokeOpacity={0.9} />
        <polyline points="600,120 600,140" fill="none" stroke="#8214DD" strokeWidth="3" strokeOpacity={0.9} />
        <polyline points="0,120 150,170 300,185, 450,170 600,120" fill="none" stroke="#8214DD" strokeWidth="3" strokeOpacity={1}/>
        <polyline points="0,130 150,180 300,195, 450,180 600,130" fill="none" stroke="#8214DD" strokeWidth="3" strokeOpacity={0.7} />
        <polyline points="0,140 150,190 300,205, 450,190 600,140" fill="none" stroke="#8214DD" strokeWidth="3" strokeOpacity={0.5} />

        <polyline points="0,137 150,187 300,202, 450,187 600,137" fill="none" stroke="#FF03FF" strokeWidth="7"
          strokeOpacity="0.6" filter="url(#blur)" />
        {/* <polyline points="0,125 150,175 300,190, 450,175 600,125" fill="none" stroke="#FF03FF" strokeWidth="7"
          strokeOpacity="0.82" filter="url(#blur)" />
        <polyline points="0,145 150,195 300,210, 450,195 600,145" fill="none" stroke="#FF03FF" strokeWidth="7"
          strokeOpacity="0.52" filter="url(#blur)" /> */}
        {/* Filter for shadow blur */}
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
