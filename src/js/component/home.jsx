import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import NavBar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../../styles/index.css";

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <Jumbotron />
  <div className="row">
      <Card/>
		  <Card/>
		  <Card/>
		  <Card/>
	  </div>
      <Footer />
      
  </>
=======
      <div className="container1">
        <Jumbotron />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
>>>>>>> origin/main
  );
};

export default Home;
