import React from 'react'

const GridCard = ({obj}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 rounded-lg border py-7'>
        <img src={obj.img} height={200} width={200}/>
        <div >
        <p className='font-normal uppercase text-gray-500 text-center'>{obj.desc}</p>
        <p className='font-bold  text-[rgba(49,113,137,1)] text-center'> {obj.price}</p>
        </div>
       
        <button className={`${obj.id=="1" ? "bg-gradient-to-r from-[rgba(117,204,235,1)] to-[rgba(111,180,255,1)] text-white":"bg-white text-[rgba(111,180,255,1)] border-2 border-[rgba(111,180,255,1)]"}
        rounded-lg  py-4 px-14 text-sm`}>BUY NOW</button>
    </div>
  )
}

export default GridCard