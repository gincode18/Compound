import "../css/Landing.css"
  import React from 'react'
import { Link } from "react-router-dom"
  
  const landing = () => {
    return (
      <div className="landing">
        <div className="mask">
        <img className="background-img" src="/img/Desktop - 1.svg" alt="img"/>
        </div>
        <div className="content">
        <h1>Invest wisely & <span>Compound money</span></h1> 
            <p>POV: your money is working for you</p>
            <div>
                <Link to="/login" className="btnn">Get started </Link>
                <button className="cn"><a href="xyx.com">Get app</a></button>
            </div>
        </div>
      </div>
    )
  }
   
  export default landing