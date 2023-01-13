import React from 'react'
import "../css/Help.css"
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <div className="cards">
    <h1 className="card-heading">How we do it</h1>
    <div className="container">
        <div className="cardd-1">
            <img src="/" alt="image"/>
            <h2 className="project-title">bf,s</h2>
            <div className="project-details">
                <p>abejh,nfjsh,bvn</p>
                <div className="pro-btn">
                    <Link to="/"
                    className="btnn">View</Link>
                </div>
            </div>   
        </div>
        <div className="cardd-2">
            <img src="f" alt="image"/>
            <h2 className="project-title">abbqa</h2>
            <div className="project-details">
                <p>ahdbvmhsbfm</p>
                <div className="pro-btn">
                    <Link to="/"
                    className="btnn">View</Link>
                </div>
            </div>      
        </div>
    </div>
</div>
  )
}

export default Help