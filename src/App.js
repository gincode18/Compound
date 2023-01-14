import React from "react";
import "./index.css"
import Blogs from "./pages/Blog";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Team from "./routes/Team";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";
import Landing2 from "./Components/Landing2";
import { Route,Routes } from "react-router-dom";
import Home2 from "./routes/Home2";
import Paymenty from "./Components/Paymenty";
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
      <Route path='/landing'element ={<Landing2/>}/>
      <Route path='/2nd'element ={<Home2/>}/>
      <Route path='/payment'element ={<Paymenty/>}/>

    </Routes>
    </>
  );
}

export default App;