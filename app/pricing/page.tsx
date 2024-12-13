"use client";

import React, { useState } from 'react'
import PlatformBottom from '../components/pricing/platformBottom'
import Pricecard from '../components/pricing/pricecard'
import PlatformTop from '../components/pricing/platformTop'


const Page = () => {
  const [currPositions, setCurrPositions] = useState([
    { pos: "left", top: '-10px', left: '-478px', zIndex: "1" },
    { pos: "center", top: '80px', left: '-128px', zIndex: "2" },
    { pos: "right", top: '-10px', left: '222px', zIndex: "1" },
  ]);

  const [currLeft, setCurrLeft] = useState("0");
  const [currCenter, setCurrCenter] = useState("1");
  const [currRight, setCurrRight] = useState("2");

  function changeCenter(id: string) {
    if (id === currCenter) {
      return;
    }

    if (id === currRight) {
      // Set the curr center to be the right
      // and the curr right to be the left
      const nextPositions = [
        { pos: "left", top: '0px', left: '-420px', zIndex: "1" },
        { pos: "center", top: '-80px', left: '-60px', zIndex: "2" },
        { pos: "right", top: '0px', left: '300px', zIndex: "1" }
      ];

      nextPositions[Number(currLeft)] = currPositions[Number(currRight)];
      nextPositions[Number(currRight)] = currPositions[Number(currCenter)];
      nextPositions[Number(currCenter)] = currPositions[Number(currLeft)];

      setCurrPositions(nextPositions);
      setCurrLeft(currCenter);
      setCurrCenter(currRight);
      setCurrRight(currLeft);
    }

    if (id === currLeft) {
      // Set the curr center to be the left
      // and the curr left to be the right
      const nextPositions = [{ pos: "left", top: '0px', left: '-420px', zIndex: "1" },
      { pos: "center", top: '80px', left: '-60px', zIndex: "2" },
      { pos: "right", top: '0px', left: '300px', zIndex: "1" },];

      nextPositions[Number(currLeft)] = currPositions[Number(currCenter)];
      nextPositions[Number(currRight)] = currPositions[Number(currLeft)];
      nextPositions[Number(currCenter)] = currPositions[Number(currRight)];

      setCurrPositions(nextPositions);
      setCurrLeft(currRight);
      setCurrCenter(currLeft);
      setCurrRight(currCenter);
    }
  }

  return (
    <>
      <div className="text-white flex flex-col items-center">
        <h2 className="font-bold 
        text-5xl md:text-5xl lg:text-6xl 
        mb-4 lg:mb-8">
          Pricing
        </h2>
        <h3 className="font-light 
        text-lg md:text-lg lg:text-xl">
          We guarantee you get more than what you pay for
        </h3>
      </div>

      <div className="overflow-y-visible relative
      mt-16 
      pb-12 xl:pb-80 
      text-white flex flex-col items-center">
        <div className="relative flex 
        flex-col md:flex-row
        items-center
        gap-8 lg:gap-14 xl:gap-0
        xl:justify-center">
          <div className="
            static xl:absolute" id={"0"}
            style={{ transition: "all 1s ease", top: currPositions[0].top, left: currPositions[0].left, zIndex: currPositions[0].zIndex }}
            onClick={() => changeCenter("0")}
          >
            <Pricecard title={"Lightweight"} features={["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"]} price={17.99} />
          </div>
          <div className="static xl:absolute" id={"1"}
            style={{ transition: "all 1s ease", top: currPositions[1].top, left: currPositions[1].left, zIndex: currPositions[1].zIndex }}
            onClick={() => changeCenter("1")}
          >
            <Pricecard title={"Standard"} features={["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"]} price={37.99} />
          </div>
          <div className="static xl:absolute" id={"2"}
            style={{ transition: "all 1s ease", top: currPositions[2].top, left: currPositions[2].left, zIndex: currPositions[2].zIndex }}
            onClick={() => changeCenter("2")}
          >
            <Pricecard title={"Premium"} features={["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"]} price={57.99} />
          </div>
        </div>

        <div className="hidden xl:block absolute top-72 w-full">
          <PlatformTop />
          <PlatformBottom />
        </div>
      </div>
    </>
  )
}

export default Page