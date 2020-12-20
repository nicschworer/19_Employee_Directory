import React from "react";
import "./style.css";

const backgroundImage = "https://www.locktoninternational.com/gb/sites/gb/files/2018-06/final_website_banner_1.png";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
