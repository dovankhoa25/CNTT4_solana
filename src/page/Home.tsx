import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Music from '../components/Music'
import Theaters from '../components/Theaters'
import Sport from '../components/Sport'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full'>
        <Banner />
        <Music/>
        <Theaters/>
        <Sport/>
    </div>
  )
}

export default Home
