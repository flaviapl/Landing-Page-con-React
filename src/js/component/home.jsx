import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../../styles/index.css"

//create your first component
const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Jumbotron />
      <Footer />
      
    </div>
  );
};

export default Home;
