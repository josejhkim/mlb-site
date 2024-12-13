import Image from 'next/image';
import React from 'react'

const ReviewCard = ({ reviewerImage, stars, reviewText }: {
  reviewerImage: string, stars: number, reviewText: string
}) => {
  const starsDOM = Array.from({ length: stars }, (_, index) => (
    <Image alt="Star" key={index} width={20} height={20} className="w-4 lg:w-9 h-4 lg:h-9 shrink-0" src="/home/star.png" />
  ));

  return (
    <div className="w-64 lg:w-[27%]">
      <div className="flex 
      gap-2 lg:gap-6">
        <div className="rounded-full border-2 
        w-8 lg:w-16 
        h-8 lg:h-16 
        overflow-hidden">
          <Image alt="Reviewer" src={reviewerImage} width={40} height={40} className="w-full h-full"/>
        </div>
        <div className="flex shrink-0 items-center">
          {starsDOM}
        </div>
      </div>
      <p className="text-white font-light 
      mt-3 lg:mt-5
      text-base lg:text-xl 
      leading-6 lg:leading-7">
        {reviewText}
      </p>
    </div>
  )
}

export default ReviewCard