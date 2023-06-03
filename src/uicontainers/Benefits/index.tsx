import React from "react";
import Immunity from "../../Assets/immunity.png";
import Skin from "../../Assets/skin.png";
import Hair from "../../Assets/hair.png";
import Weight from "../../Assets/weight.png";
import Heart from "../../Assets/heart.png";

const Benefits = () => {
  const workInfoData = [
    {
      image: Immunity,
      title: "Immunity",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Skin,
      title: "Healthy Skin",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Hair,
      title: "Healthy Hair",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Weight,
      title: "Weight Loss",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Heart,
      title: "Healthy Heart",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">Benefits</h1>
        {/* <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            {/* <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
