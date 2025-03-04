import React from 'react'

const Pricecard = ({ title, features, price }: {
  title: string, features: Array<string>, price: number
}) => {
  return (
    <div 
      className="
        w-72 sm:w-96 md:w-56 lg:w-64
        h-fit
        pt-8
        pb-8
        flex flex-col 
        items-center 
        border-2  
        rounded-lg 
        bg-gradient-to-b from-[#19002d] to-[#401c40]
        text-white
      "
      style={{
        boxShadow: "4px 4px 6px #FFD1FF",
    }}>

      <h4 className="
        mb-4
        text-2xl sm:text-3xl lg:text-4xl
        font-semibold 
      ">
        {title}
      </h4>

      <ul className='
        mb-6
        list-disc 
      '>
        {features.map((feature) => (
          <li 
            className="
              w-48 sm:w-56 md:w-36 lg:w-44
              my-6
              text-lg sm:text-xl lg:text-2xl
              font-regular
            " 
            key={feature}
          >
            {feature}
          </li>
        ))}
      </ul>

      <div className="
        px-4 
        py-3 
        rounded-md
        bg-white 
        text-2xl sm:text-3xl md:text-2xl
        text-black 
        font-bold
     ">
        Buy for ${price}
      </div>
    </div>
  )
}

export default Pricecard