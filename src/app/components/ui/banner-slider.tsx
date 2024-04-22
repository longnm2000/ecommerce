"use client";
import { Image } from "antd";
import Slider from "react-slick";
import PrimaryButton from "../common/primary-button";
import DefaultButton from "../common/default-button";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "30px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

const BannerSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="relative">
              <Image
                preview={false}
                src="/banner1.png"
                alt="banner"
                width={"100%"}
              />
              <div
                className=" absolute top-1/2 left-10 w-1/2"
                style={{ transform: "translate(0, -50%);" }}
              >
                <h1 className=" font-bold text-3xl">
                  Upgrade Your Wardrobe
                  <br />
                  With Out Collection
                </h1>
                <p className=" text-gray-400 mt-4">
                  Eget neque aenean viverra aliquam tortor diam nunc. Dis
                  pellentesque lectus quis <br /> velit fusce aenean nunc dui
                  consectetur. Eu lorem est ullamcorper nisl amet non mollis.
                </p>
                <div className="flex gap-4 items-center mt-4">
                  <PrimaryButton content="Buy Now" />
                  <DefaultButton content="View Detail" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              preview={false}
              src="/banner1.png"
              width={"100%"}
              alt="banner"
            />
          </div>
          <div>
            <Image
              preview={false}
              src="/banner1.png"
              width={"100%"}
              alt="banner"
            />
          </div>
          <div>
            <Image
              preview={false}
              src="/banner1.png"
              width={"100%"}
              alt="banner"
            />
          </div>
          <div>
            <Image
              preview={false}
              src="/banner1.png"
              width={"100%"}
              alt="banner"
            />
          </div>
          <div>
            <Image
              preview={false}
              src="/banner1.png"
              width={"100%"}
              alt="banner"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
export default BannerSlider;
