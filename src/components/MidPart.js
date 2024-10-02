import React from 'react'
import Crystal from '../assets/Crystal.png'
const MidPart = () => {
  return (<div id="mid" className='relative '>
    <div className='absolute flex flex-row  items-center gap-6 sm:gap-16 px-12   '>
        <div className='  w-1/2   '>
            <div  className='text-[rgba(49,84,109,1)] text-end'>
               <p className=' text-sm sm:text-2xl md:text-4xl '>BEST PRICE</p>
               <h1 className='text-lg sm:text-3xl md:text-5xl font-bold '>Agate Phone Grip</h1>
               {/* text-xl md:text-2xl lg: */}
               {/* text-2xl md:text-3xl lg: */}
            </div>


            <div className='flex items-center justify-end mt-7'>
                <p className='strike text-[rgba(65,160,183,1)] text-xs md:text-2xl '>44.50$</p>
                <p className='font-bold text-[rgba(227,91,62,1)] text-lg sm:text-4xl md:text-7xl'>19.50$</p>
            </div>
           
           <p className='text-end text-[rgba(49,84,109,1)] font-normal mt-2 md:pl-24  text-xs sm:text-base'>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
           </p>

           <div className='flex items-center justify-end'>
           <button className='bg-gradient-to-r from-[rgba(117,204,235,1)] to-[rgba(111,180,255,1)] py-1 sm:py-4 px-3 sm:px-14 outline text-white rounded-2xl mt-10 mr-0'>Buy Now</button>
           </div>
          

        </div>


      <div className='rounded-full  bg-slate-50 p-3 sm:p-12 lg:p-24'>
        <div className=' rounded-full bg-slate-100 p-3 sm:p-12 lg:p-24 shadow-xl '>
             <div className=' rounded-full bg-white  '> 
                  <img src={Crystal} className='w-32 md:w-auto'/>
             </div>

        </div>
      </div>
        
    </div>

    <svg className='mt-96' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,218.7C384,203,480,149,576,106.7C672,64,768,32,864,26.7C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default MidPart