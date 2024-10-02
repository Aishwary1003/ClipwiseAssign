import React from 'react'
import Crystal from "../assets/Crystal.png"
const Card = () => {
  return (
    <div className=' w-full   rounded-3xl flex  flex-col items-center justify-center gap-10 pb-6 bg-white mx-auto relative border'>
      <div className='hidden lg:block bg-[rgba(138,147,229,1)] text-white absolute left-0 top-12 font-medium text-base rounded-r-md px-5 py-2'>New lot</div>
         <img src={Crystal} />
         <p className='text-xs  lg:text-lg text-slate-500 font-normal font-sans uppercase'>Crystal Agate Phone Grip - <span className='text-[rgba(49,113,137,1)] font-bold'>18.99$</span> </p>
        
    </div>
  )
}

export default Card;