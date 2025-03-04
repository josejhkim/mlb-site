import Image from 'next/image';
import React from 'react'

const ReviewCard = ({ reviewerImageURL: reviewerImage, stars, reviewText }: {
  reviewerImageURL: string, stars: number, reviewText: string
}) => {

  const starsDOM = Array.from({ length: stars }, (_, index) => (
    <Image 
      src="/home/star.png" 
      alt="Star" 
      key={index} 
      width={20} 
      height={20} 
      className="
        w-9 
        h-9 
        shrink-0
    "/>
  ));

  return (
    <div 
      className="
      w-[70%] lg:w-[30%]
      flex flex-col 
      items-center lg:items-start 
    ">

      <div className="
        flex 
        gap-2 lg:gap-6
      ">

        <div className="
          w-16
          h-16 
          overflow-hidden
          border-2 
          rounded-full 
        ">

          <Image 
            src={reviewerImage}
            alt="Reviewer"  
            width={40} 
            height={40} 
            className="
              w-full 
              h-full
          "/>
        </div>

        <div 
          className="
            flex 
            items-center
            shrink-0 
          ">
          {starsDOM}
        </div>
        
      </div>
      
      <p className="
        mt-3 lg:mt-5
        text-base lg:text-xl 
        leading-6 lg:leading-7
        font-light
        text-white  
      ">
        {reviewText}
      </p>
    </div>
  )
}

export default ReviewCard