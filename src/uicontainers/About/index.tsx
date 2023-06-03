import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/banner.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About US</p>
        {/* <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1> */}
        <p className="primary-text">
        Quali-Tea is an all-in-one herbal tea; something that could provide multiple benefits and taste good at the same time. 
        Purple tea is a powerful alternative to your regular tea that started from Kenya. 
        That is filled with antioxidants, anthocyanins, and polyphenols properties. 
        
        </p>
        <p className="primary-text">
        Since Quali-Tea has half as much caffeine as green tea, it will provide you more enduring energy throughout the day. 
        Additionally, it will aid in weight loss, improve blood circulation, lower heart stress, and aid in the prevention of common illnesses like the flu and 
        asthmatic respiratory conditions. 
        We will have two options: traditional tea leaves and tea bags. 
        We built our product in three flavors based on customer preferences: original, strawberry, and lemon infused.
        </p>
      </div>
    </div>
  );
};

export default About;
