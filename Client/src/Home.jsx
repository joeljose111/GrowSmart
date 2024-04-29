import React from "react";
import BannerImage from "./assets/a.png";
import Background from "./assets/e.png";
import { FiArrowRight } from "react-icons/fi";
import {Link, useNavigate} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={Background} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Empowering Farmers With Innovative Solutions
          </h1>
          <p className="primary-text">
            We Provide Farmers support to assist in argicultural activities by harnessing advanced technology.
          </p>
          
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
          
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
