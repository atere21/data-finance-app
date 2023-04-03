import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Card from './components/Card'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App