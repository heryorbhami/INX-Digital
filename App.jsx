import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Hero_gradient from './Components/Hero_gradient/Hero_gradient'
import Our_service from './Components/Ourservices/Our_service'
import DataCount from './Components/dataCount/dataCount'
import AboutUs from './Components/AboutUs/AboutUs'
import WhyChoseUs from './Components/WhyChoseUs/WhyChoseUs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div style={{ marginTop: "80px" }}> {/* Content below navbar */}</div>
      <Hero/>
      <Hero_gradient/>
      <Our_service/>
      <DataCount/>
      <AboutUs/>
      <WhyChoseUs/>
    </div>
  )
}

export default App