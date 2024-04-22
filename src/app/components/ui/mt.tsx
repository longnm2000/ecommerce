"use client";
import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
        <div>
          <Image src="/banner.jpg" alt="dw" />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
