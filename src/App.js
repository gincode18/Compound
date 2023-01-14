import React from "react";
import "./index.css"
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Team from "./routes/Team";
import { Route,Routes } from "react-router-dom";
import Home2 from "./routes/Home2";
function App() {
  return (
    <>
    <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/blog'element ={<Blogs/>}/>
      <Route path='/login'element ={<Login/>}/>
      <Route path='/team'element ={<Team/>}/>
      <Route path='/2nd'element ={<Home2/>}/>
    </Routes>
    </>
  );
}

export default App;
