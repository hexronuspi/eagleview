import React from 'react'
import NavBar from '../Components/navbar'
import AboutUs from '../Components/aboutus'
import Footer from '../Components/footer'
import Map from '../Components/mapApi'

import './index.css'
import Gallery from '../Components/gallery'

export default function LandingPage() {
  return (
    <main>
      <NavBar/>
        <AboutUs />
        <Gallery/>
        <Map/>
        
        <Footer/>
    </main>
  )
}