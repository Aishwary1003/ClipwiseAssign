import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import Mouse from "../assets/Mouse.png"
import { Link } from 'react-scroll';

const Header = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


 

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={`w-3 h-3 rounded-full mx-1 ${
          active ? 'bg-[rgba(138,147,229,1)]' : 'bg-gray-300'
        }`}
        onClick={onClick}
      />
    );
  };


  

 

  return (<div className=' bg-gradient-to-r from-cyan-400 via-pink-300 to-cyan-400 relative '>
   
    <div className='  w-full flex flex-col md:flex-row gap-6 px-12 absolute '>
        <div className=' max-w-2xl pt-12 sm:pt-24  ' >
            <div >
                <p className='text-white text-lg sm:text-4xl leading-10 '>Welcome To</p>
                 <h1 className='text-white text-xl  sm:text-5xl leading-10'>Pop Rock Crystal Shop!</h1>
            </div>

            <p className='text-sm sm:text-base   sm:mt-10 text-[rgba(49,84,109,1)] w-3/4  '>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
            </p>

            <div className='mt-10 flex items-center gap-12 '>
                <button className='rounded-2xl text-[rgba(49,113,137,1)] px-3 py-1 sm:py-4 sm:px-10 bg-white '>SHOP NOW</button>
                <p className='text-[rgba(49,113,137,1)]'>about us</p>
            </div>
            

        </div>


    
      <Carousel responsive={responsive} 
      showDots={true}
      arrows={false}
      customDot={<CustomDot />}
      containerClass="py-4 pr-6  w-full "
      itemClass="px-6 py-6"
     >
  <div ><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
       </Carousel>
     
      
            
         
        

        

       
    </div>
    <svg className='mt-72' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L40,250.7C80,245,160,235,240,229.3C320,224,400,224,480,224C560,224,640,224,720,186.7C800,149,880,75,960,48C1040,21,1120,43,1200,85.3C1280,128,1360,192,1400,224L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className='absolute bottom-2 left-[45%] hidden  sm:flex items-center gap-4'>
        <Link to="mid"  
          smooth={true}
          duration={500}>
            <img src={Mouse} className='hover:cursor-pointer' />
        </Link> 

        <Link  to="mid"  
          smooth={true}
          duration={500}>
            <p className='font-medium text-[rgba(49,113,137,1)] hover:cursor-pointer'>Scroll down</p>
        </Link> 
    </div>
   
  </div>)
}

export default Header