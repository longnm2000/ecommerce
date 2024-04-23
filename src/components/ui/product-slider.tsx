"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";

const ProductSlider: React.FC = () => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);
  const data = [
    "/g502x-1.jpg",
    "/g502x-2.jpg",
    "/g502x-3.jpg",
    "/g502x-4.jpg",
    "/g502x-5.jpg",
    "/g502x-6.jpg",
  ];

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={sliderRef1} infinite={false}>
        {data.map((e, i) => (
          <div key={i} className="">
            <img src={e} alt={e} className=" block mx-auto" />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        infinite={false}
      >
        {data.map((e, i) => (
          <div key={i}>
            <img src={e} alt={e} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
