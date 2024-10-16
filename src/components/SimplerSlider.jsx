import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Crousal.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Slider {...settings} className="custom-slider">
      <div className="img-div">
       <img src="https://www.bollywoodhungama.com/wp-content/uploads/2023/09/Jigra-cover-image4.jpg"/>
      </div>
      <div className="img-div">
      <img src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_HomeFB_GGS2/20f373a3-4270-4d82-8016-91c774797de3.__SX800__SY450__QL60__._TTW_.jpeg"/>
      </div>
      <div className="img-div">
      <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Stree-2-1.jpg"/>
      </div>
      <div className="img-div">
      <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Stree-2-1.jpg"/>
      </div>
      <div className="img-div">
      <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Stree-2-1.jpg"/>
      </div>
      <div className="img-div">
      <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/12/Stree-2-1.jpg"/>
      </div>
    </Slider>
  );
}