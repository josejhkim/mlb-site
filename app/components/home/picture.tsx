import Image from 'next/image';
import React from 'react';

const Picture = ({ pos, dim, rotation, img }: { pos: string, dim: Array<number>, rotation: number, img: string }) => {
  const width = dim[0];
  const height = dim[1];
  const picturePadding = Math.floor(width / 20);
  const picturePaddingBottom = picturePadding * 4;

  return (
    <div
      className={`
        ${pos} flex justify-center bg-white
      `}
      style={{
        width: `${width / 4}rem`,
        height: `${height / 4}rem`,
        padding: `${picturePadding / 4}rem`,
        paddingBottom: `${picturePaddingBottom / 4}rem`,
        transform: `rotate(${rotation}deg)`,
      }}>

      <div className="
        w-full h-full bg-black
      ">

        <Image 
          alt="Home page image" 
          width={40} 
          height={40} 
          className="w-full h-full" 
          src={img} 
        />
      </div>
    </div>
  );
};

export default Picture;
