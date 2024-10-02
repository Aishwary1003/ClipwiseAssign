import React from 'react'
import { data } from '../data'
import GridCard from './GridCard'

const Grid = () => {
  return (
    <div className='pt-56 md:pt-24 px-12 pb-40 mt-56 sm:mt-72 md:mt-0  ' >
        <h1 className='text-center text-[rgba(49,84,109,1)] font-bold text-5xl'>All Product</h1>

        <div className='w-full flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12 mt-12'>
            <div className='flex items-center'>
                <label htmlFor='products' className='font-bold text-base text-[rgba(154,176,192,1)]'>Filter:</label>
                <select id="products" className='text-[rgba(49,84,109,1)]'>
                    <option className='font-bold text-base '>All Products</option>
                </select>
            </div>
            

            <div className='flex items-center'>
                <label htmlFor='sell' className='font-bold text-base text-[rgba(154,176,192,1)]'>Sort:</label>
                <select id="sell" className='text-[rgba(49,84,109,1)]'>
                    <option className='font-bold text-base '>Best Selling</option>
                </select>
            </div>

        </div>

        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {data.map((obj)=>{return <GridCard obj={obj}/>})}

        </div>
         
       <div className='w-full flex items-center justify-center mt-14'>
       <button  className='rounded-2xl py-3 px-9   text-[rgba(111,180,255,1)] border-2 border-[rgba(111,180,255,1)]'>View All</button> 
       </div>
        
       
        
    </div>
  )
}

export default Grid