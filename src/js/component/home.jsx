import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <Footer />
      
    </>
  );
};

export default Home;
