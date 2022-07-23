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
      <div className="container1">
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
	      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
