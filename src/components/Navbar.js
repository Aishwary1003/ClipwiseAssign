import React from 'react'
import Logo from "../assets/Logo.png"
import cart from "../assets/cart.png"
const Navbar = () => {
  return (
    <div className=' bg-gradient-to-r from-cyan-400 via-pink-300 to-cyan-400 py-6 flex items-center justify-between px-12 w-full'>
        <div className='flex items-center justify-center text-white gap-2 '>
        <img src={Logo} className='w-8 md:w-auto'/>
        <p className=' sm:text-lg md:text-xl'>Pop Rock Crystal</p>
        </div>



     <div className='flex items-center justify-between w-1/2 pl-12 '>
           <div className='flex items-center justify-center text-white gap-6 text-base font-medium leading-7'>
            <p >Home</p>
            <p className='hidden sm:flex'>Shop</p>
            <p className='hidden md:flex'>About Us</p>
            <p className='hidden lg:flex'>Help</p>
           </div>


           <div className='flex items-center justify-center gap-2'>
            <div className='hidden lg:flex h-4 w-4 rounded-full bg-red-600 text-white text-xs  mt-2 '>00</div>
            <img src={cart} />
           </div>
     </div>
       
       

    </div>
  )
}

export default Navbar