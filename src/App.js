import React from "react";
import "./index.css"
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Team from "./routes/Team";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/blogs'element ={<Blogs/>}/>
      <Route path='/login'element ={<Login/>}/>
      <Route path='/team'element ={<Team/>}/>
    </Routes>
    </>
  );
}

export default App;
