import React, { useState } from "react";
import ThunderImg from "../../assets/images/thunder.jpg";
import SunnyImg from "../../assets/images/sunny.jpg";
import CloudyImg from "../../assets/images/cloudy.jpg";
import "./footer.css";

const Footer = (props) => {
  const { newsRef } = props;

  const [isHovered, setIsHovered] = useState();

  const dailyUpdates = [
    {
      img: ThunderImg,
      effect: "Thunder Strikes in Delhi",
      isHovered: isHovered,
    },
    {
      img: SunnyImg,
      effect: "Summer season in Chennai",
    },
    {
      img: CloudyImg,
      effect: "Cloud Stromes in Bangalore",
    },
  ];

  const handleMouseHover = (event) => {
    console.log("Event", event);

    event.target.style.opacity = "0.8";
  };

  const handleMouseLeave = (event) => {
    event.target.style.opacity = "";
  };
  return (
    <div ref={newsRef} className="container_3">
      <div className="heading_3"></div>
      <div className="content_3">
        <div className="heading_3">News</div>
        <div className="cardsContainer_3">
          {dailyUpdates?.map((item) => {
            return (
              <div
                className="pic_3"
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseLeave}
              >
                <div className="effectsContainer_3">
                  <img src={item.img} className="picimg_3" />

                  <div className="effects_3">{item.effect}</div>
                  <div className="overlay_3">
                    <button className="matter_3">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom_3">
          <div className="watermark_3"> WeatherApp</div>
          <div className="infor_3">
            <div> Home</div>
            <div> Contact us</div>
            <div>Cities</div>
            <div>FAQs</div>
            <div> News</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
