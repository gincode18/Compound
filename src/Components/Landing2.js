import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Landing2.css'
import Navbar2 from './Navbar2'
function landing2() {
  return (<>
        <Navbar2></Navbar2>

    <div className='landing'>
      
      <div className='landing-items'>
        <div className='item1'>
         balance available
         <h2>₹0</h2>
         <section className='opening'>opening balance<p>₹0</p></section>
         <section className='used'>Used for Stock ,F&Q<p>₹0</p></section>
         <section className='avail'>Balance available<p>₹0</p></section>
         <section className='all'><p>All transactin</p><button>.</button></section>



        </div>
        <div className='item2'>
        <section className='enter'><p>Enter amount</p><input></input></section>
        <section className='pay'><p>Pay Using</p><input></input></section>
        <Link to="/payment">
        <button className='button button2'>Deposit Money</button>
        </Link>



        </div>


      </div>

    </div></>
  )
}

export default landing2