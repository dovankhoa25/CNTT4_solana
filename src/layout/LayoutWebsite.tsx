import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const LayoutWebsite = () => {
  return (
    <>
      <Header />
      <div className="px-24 bg-[#27272A] py-5">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default LayoutWebsite