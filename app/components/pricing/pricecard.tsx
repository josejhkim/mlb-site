import React from 'react'

const Pricecard = ({ title, features, price }: {
  title: string, features: Array<string>, price: number
}) => {
  return (
    <div className="flex flex-col items-center 
    border-2 text-white rounded-lg 
    bg-gradient-to-b from-[#19002d] to-[#401c40]
    w-64
    pt-8
    pb-8
    h-fit
    "
    style={{
      boxShadow: "4px 4px 6px #FFD1FF",
    }}
    >
      <h4 className="font-semibold text-4xl mb-4">
        {title}
      </h4>
      <ul className='list-disc mb-6'>
        {features.map((feature) => (

          <li className="my-6 w-32 font-regular text-xl" key={feature}>
            {feature}
          </li>

        ))}
      </ul>
      <div className="text-black font-bold bg-white px-4 py-3 text-2xl rounded-md">
        Buy for ${price}
      </div>
    </div>
  )
}

export default Pricecard