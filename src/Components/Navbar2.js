import "../css/Navbar2.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {RiCommunityLine } from "react-icons/ri";
import { BsWallet } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar2 = () => {
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
          <li>
              <a href="https://chat.whatsapp.com/HXVfQ2hbzPzFv3TKiS5ZjQ ">
                <RiCommunityLine/>
              </a>
            </li>
            <li>
              <a href="/landing">
                <BsWallet/>
              </a>
            </li>
            <li>
              <a href="/">
                <FiShoppingCart/>
              </a>
            </li>
            <Link to ="/contact">
            <button className="btn">Log out</button>
            </Link>
        </ul>
        <div className="hamburger" onClick={handelClick}>
          {click ? (<ImCross size={20} style= {{color:"white"}}/>):(<FaHamburger size={20} style= {{color:"white"}}/>) 
            
          }
        
        </div>
    </div>
  )
}

export default Navbar2
