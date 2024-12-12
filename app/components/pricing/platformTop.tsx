import React from 'react';

const PlatformTop = () => {
  return (
    <div className="flex relative justify-center items-center -z-50">
      <svg
        className="w-full h-full"
        width="600"
        viewBox="0 0 600 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Line */}
        {/* <polyline points="0,70 150,20 300,5, 450,20 600,70" fill="none" stroke="#8214DD" strokeWidth="3" /> */}
        <polyline points="0,60 150,20 300,5, 450,20 600,60" fill="none" stroke="#5A00B5" strokeWidth="3" strokeOpacity={1} />
        <polyline points="0,60 0,80" fill="none" stroke="#5A00B5" strokeWidth="5" strokeOpacity={1}/>
        <polyline points="600,60 600,80" fill="none" stroke="#5A00B5" strokeWidth="5" strokeOpacity={1} />
      </svg>
    </div>
  );
};

export default PlatformTop;
