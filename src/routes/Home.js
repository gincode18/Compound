import React from "react";
import Footer from "../Components/Footer";
import Help from "../Components/Help";
import Landing from "../Components/Landing";
import Navbar from "../Components/Navbar";
// import Navbar2 from "../Components/Navbar2";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <Navbar2/> */}
      <Landing />
      <Help />
      <Footer />
    </div>
  );
}

export default Home;
