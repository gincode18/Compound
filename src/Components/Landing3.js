import "../css/Landing3.css";
import React from "react";

const Landing3 = () => {
  return (
    <div className="landing3">
      <div className="mask">
        <img className="background-img" src="/img/Love.svg" alt="img"/>
        </div>
      <div className="container">
      <div className="cardd-1">
        <img src="/img/coin.svg" alt="image" />
        <h2 className="project-title">LOW RISk,LOW RETURN</h2>
        <div className="project-details">
          <p>This low risk low return means if you invest in this it will give you low return which 6-7% maybe with risk appetite</p>
          <div className="pro-btn">
            <a
              href="https://docs.google.com/document/d/1Aez5bJ2b_Gq-x5BI-C3nIb_E3_MzSqnemRhnjdYI5Ac/edit /"
              className="btnn"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className="cardd-1">
        <img src="/img/coin.svg" alt="image" />
        <h2 className="project-title">Medium RISk,Medium RETURN</h2>
        <div className="project-details">
          <p>Tension winson nhi lene ka apun log h na</p>
          <div className="pro-btn">
            <a
              href="https://docs.google.com/document/d/1fCeBmItLoZE5M4cgaKFEf71gabZTo5o85HZWBAjTXM4/edit?usp=sharing/"
              className="btnn"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
      <div className="cardd-1">
        <img src="/img/coin.svg" alt="image" />
        <h2 className="project-title">HIGH RISk,HIGH RETURN</h2>
        <div className="project-details">
          <p>Tension winson nhi lene ka apun log h na</p>
          <div className="pro-btn">
            <a
              href="https://docs.google.com/document/d/1OW0VBchxxM5rVq4wjrPmcwuaSkiFCpu5qdZjKnJlhKQ/edit?usp=sharing/"
              className="btnn"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing3;
