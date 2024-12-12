import React from 'react'

const ReviewCard = ({ reviewerImage, stars, reviewText }: {
  reviewerImage: string, stars: number, reviewText: string
}) => {
  const starsDOM = Array.from({ length: stars }, (_, index) => (
    <img key={index} className="w-9 h-9 shrink-0" src="./home/star.png" />
  ));

  return (
    <div className="w-[27%]">
      <div className="flex ">
        <div className="rounded-full border-2 w-16 h-16 overflow-hidden">
          <img src={reviewerImage} className="w-full h-full"/>
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