import "../css/Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const[click,setClick] = useState(false);
  const handelClick = () => setClick(!click);
  return (
    <div className="navbar">
        <Link to="/">
        <img className="Logo" src="/img/Group 481759.svg"/>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/blog">Blog</Link>
          </li>
          <li>
            <Link to = "/team">Our Team</Link>
          </li>
            <Link to ="/login">
            <button className="btn">Login</button>
            </Link>
        </ul>
        <div className="hamburger" onClick={handelClick}>
          {click ? (<ImCross size={20} style= {{color:"white"}}/>):(<GiHamburgerMenu size={20} style= {{color:"white"}}/>) 
            
          }
        
        </div>
    </div>
  )
}

export default Navbar
