import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Grid from '../components/Grid'
import MidPart from '../components/MidPart'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className=' flex flex-col'>
        <Navbar/>
        <Header/>
         <Grid/>
         <MidPart/>
         <Footer/>
    </div>
  )
}

export default HomePage