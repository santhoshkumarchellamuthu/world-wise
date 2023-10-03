import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="Home">
        <h1>You travel the world.</h1>
        <h1>WorldWise keeps track of your adventures.</h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <button className="btn">
          {" "}
          <Link to="/Login">START TRACKING NOW</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
