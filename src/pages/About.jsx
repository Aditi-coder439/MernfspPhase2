import React from "react";
import "./About.css";
import websiteImg from "../assets/website.jpg";

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>

      <div className="about-content">
        <img src={websiteImg} alt="demo image" />
      </div>

      <div className="about-text">
        <h2>Our Motive</h2>
        <p>Our motive is to protect and conserve pandas by raising awareness about
  wildlife preservation and the importance of maintaining natural habitats</p>
        <p>Pandas are a symbol of environmental balance, and saving them means preserving
  biodiversity for future generations.</p>
      </div>
    </div>
  );
}

export default About;
