import React from "react";
import Jumbotron from "./Jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./Navbar.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Jumbotron />
      <NavBar />
    </>
  );
};

export default Home;
