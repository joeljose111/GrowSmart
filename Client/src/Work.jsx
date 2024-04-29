import React from "react";
import PickMeals from "./assets/upload-images.png";
import ChooseMeals from "./assets/weather.png";
import DeliveryMeals from "./assets/market-price.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Upload Images",
      text: "Upload images of soil or plants to get a detailed analysis and report",
    },
    {
      image: ChooseMeals,
      title: "Weather Report",
      text: "Generate weather reports based on the current location.",
    },
    {
      image: DeliveryMeals,
      title: "Check Market Price",
      text: "Find market prices of various goods.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        The app's dashboard offers real-time data on weather forecasts, market prices, and AI-driven suggestions for crop management strategies. 
        Tools for inputting farm data enable farmers to track planting schedules, soil conditions, crop disease diagnosis.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
