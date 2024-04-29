import React from "react";
import AboutBackground from "./assets/c.png";
import AboutBackgroundImage from "./assets/b.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          A Smart And Innovative Approach To Farming
        </h1>
        <p className="primary-text">
        Despite advancements in agricultural technology, many farmers still struggle with optimizing crop yields, managing resources efficiently, and responding effectively to environmental factors such as weather fluctuations and various crop diseases. This leads to productivity losses, increased resource usage, and economic challenges for farmers worldwide . Farmers lack a unified platform for market price information and price prediction , weather reports , soil analysis and disease diagnosis.

        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
