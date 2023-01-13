import React from "react";
import "./index.css"
import Blogs from "./pages/Blog";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Team from "./routes/Team";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/blog'element ={<Blogs/>}/>
      <Route path="/blog/:slug" element={<SinglePost />}></Route>
      <Route path='/login'element ={<Login/>}/>
      <Route path="*" element={ <Error />}></Route>
      <Route path='/team'element ={<Team/>}/>
    </Routes>
    </>
  );
}

export default App;