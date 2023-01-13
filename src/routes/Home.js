import React from 'react'
import Footer from '../Components/Footer'
import Help from '../Components/Help'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
     <Landing/>
     <Help/>
     <Footer/>

    </div>
  )
}

export default Home