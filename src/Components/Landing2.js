import React from 'react'
import '../css/Landing2.css'
function landing2() {
  return (
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
        <button className='button button2'>Deposit Money</button>



        </div>


      </div>

    </div>
  )
}

export default landing2