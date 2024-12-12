import Image from 'next/image';
import React from 'react'

const ReviewCard = ({ reviewerImage, stars, reviewText }: {
  reviewerImage: string, stars: number, reviewText: string
}) => {
  const starsDOM = Array.from({ length: stars }, (_, index) => (
    <Image alt="Star" key={index} width={20} height={20} className="w-9 h-9 shrink-0" src="/home/star.png" />
  ));

  return (
    <div className="w-[27%]">
      <div className="flex space-between">
        <div className="rounded-full border-2 w-16 h-16 overflow-hidden">
          <Image alt="Reviewer" src={reviewerImage} width={40} height={40}className="w-full h-full"/>
        </div>
        <div className="flex shrink-0 items-center">
          {starsDOM}
        </div>
      </div>
      <p className="mt-5 text-white font-light text-xl leading-7">
        {reviewText}
      </p>
    </div>
  )
}

export default ReviewCard