import Image from 'next/image';
import React from 'react';

const Picture = ({ pos, dim, rotation, img }: { pos: string, dim: Array<number>, rotation: number, img: string }) => {
  const width = dim[0];
  const height = dim[1];
  const p = Math.floor(width / 20);
  const pb = p * 4;
  console.log(width);

  return (
    <div
      className={`${pos} flex justify-center bg-white`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: `${width / 4}rem`,
        height: `${height / 4}rem`,
        padding: `${p / 4}rem`,
        paddingBottom: `${pb / 4}rem`,
      }}
    >
      <div className="w-full h-full bg-black">
        <Image alt="Home page image" className="w-full h-full" src={img} />
      </div>
    </div>
  );
};

export default Picture;
