"use client";
import { useRef, useState } from "react";
import DefaultButton from "../common/default-button";
import Slider, { Settings } from "react-slick";
import { Image } from "antd";
import CategoryCard from "../common/category-card";

const FeaturedCategory: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(2);
  const [updateCount, setUpdateCount] = useState<number>(3);
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    afterChange: () => setUpdateCount((prev) => prev + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(Number(e.target.value));
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1>Featured Category</h1>
        <DefaultButton content="View Detail" />
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
        <div>
          <CategoryCard />
        </div>
      </Slider>
      <input
        onChange={handleSliderChange}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
        className="w-full"
        readOnly
      />
    </>
  );
};

export default FeaturedCategory;
