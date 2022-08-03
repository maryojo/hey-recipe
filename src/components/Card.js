import React from 'react'


const Card = ({id, title, imageURL}) => {
  return (
    <div key={id} className='overflow-hidden relative cursor-pointer'>
        {/* <div className='w-full h-full bg-gradient-to-l bg-black z-20'></div> */}
        <img src={imageURL} alt={title} className="object-cover rounded-lg"/>
        <p className='absolute z-10 bottom-5 left-5 text-white font-medium text-sm'>{title}</p>
    </div>
  )
}

export default Card