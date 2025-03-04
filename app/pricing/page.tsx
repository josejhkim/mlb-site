"use client";

import React, { useState } from 'react'
import PlatformBottom from '../components/pricing/platformBottom'
import Pricecard from '../components/pricing/pricecard'
import PlatformTop from '../components/pricing/platformTop'

const priceInfoArray = [
  {
    title: "Lightweight",
    features: ["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"],
    price: 17.99
  },
  {
    title: "Standard",
    features: ["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"],
    price: 37.99
  },
  {
    title: "Premium",
    features: ["Lorem ipsum", "consectetur adipiscing elit", "Aliquam condimentum"],
    price: 57.99
  }
]

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center text-white">
        <h2 
          className="
            mb-4 lg:mb-8
            text-5xl md:text-5xl lg:text-6xl 
            font-bold 
        ">
          Pricing
        </h2>

        <h3 
          className="
            text-center 
            text-lg md:text-lg lg:text-xl
            font-light
        ">
          We guarantee you get more than what you pay for
        </h3>
      </div>

      <PriceCardPlatform priceInfoArray={priceInfoArray}/>
    </>
  )
}

export default Page

function PriceCardPlatform({priceInfoArray} : {priceInfoArray: { title: string; features: string[]; price: number }[]}) {

  const [currPositions, setCurrPositions] = useState([
    { pos: "left", top: '-10px', left: '-478px', zIndex: "1" },
    { pos: "center", top: '70px', left: '-128px', zIndex: "2" },
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
    <div className="
      relative
      mt-16 
      pb-12 xl:pb-80 
      overflow-y-visible 
      flex flex-col 
      items-center
      text-white 
    ">

      <div className="
        relative 
        flex flex-col md:flex-row
        items-center
        xl:justify-center
        gap-8 lg:gap-14 xl:gap-0
      ">
        {
          priceInfoArray.map((info: { title: string; features: string[]; price: number }, index: number) => (
            <div 
              key={index} 
              className="static xl:absolute" 
              id={index.toString()}
              style={{ 
                transition: "all 1s ease", 
                top: currPositions[index].top, 
                left: currPositions[index].left, 
                zIndex: currPositions[index].zIndex 
              }}
              onClick={() => changeCenter(index.toString())}
            >

              <Pricecard 
                title={info.title} 
                features={info.features} 
                price={info.price} 
              />
            </div>
          ))
        }
      </div>

      <div className="w-full absolute top-72 hidden xl:block">
        <PlatformTop />
        <PlatformBottom />
      </div>
    </div>
  )
}