import React from 'react'

const Pricecard = ({ title, features, price }: {
  title: string, features: Array<string>, price: number
}) => {
  return (
    <div className="flex flex-col items-center 
    border-2 text-white rounded-lg 
    bg-gradient-to-b from-[#19002d] to-[#401c40]
    w-72 sm:w-96 md:w-56 lg:w-64
    pt-8
    pb-8
    h-fit
    "
    style={{
      boxShadow: "4px 4px 6px #FFD1FF",
    }}
    >
      <h4 className="font-semibold mb-4
      text-2xl sm:text-3xl lg:text-4xl
      ">
        {title}
      </h4>
      <ul className='list-disc mb-6'>
        {features.map((feature) => (

          <li className="my-6 font-regular
          w-48 sm:w-56 md:w-36 lg:w-44
          text-lg sm:text-xl lg:text-2xl
          " key={feature}>
            {feature}
          </li>

        ))}
      </ul>
      <div className="text-black font-bold bg-white px-4 py-3 
      text-2xl sm:text-3xl md:text-2xl
      rounded-md">
        Buy for ${price}
      </div>
    </div>
  )
}

export default Pricecard