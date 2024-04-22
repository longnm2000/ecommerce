import { Button, Image } from "antd";
import ProductCard from "./product-card";
import DefaultButton from "../common/default-button";
import PrimaryButton from "../common/primary-button";

const PopularProduct: React.FC = () => {
  return (
    <div>
      <h1 className=" text-3xl text-center font-bold">
        Popular Product on Lenny
      </h1>
      <p className="text-center mt-4 mb-8 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
      <div className="flex justify-center py-8">
        <DefaultButton content="Load More" />
      </div>

      <div className="px-10 bg-customPink rounded-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className=" flex-1">
            <div className="w-full h-full flex items-center">
              <Image
                src="/ipad-air-5.png"
                alt="ipad-gen-5"
                preview={false}
                className="!max-w-[350px]"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center flex-col gap-6 py-8 w-full h-full">
              <h2 className="font-bold text-2xl">Ipad Gen 5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                corrupti amet qui et temporibus repellat exercitationem
              </p>
              <div className="flex gap-4">
                <PrimaryButton content="Buy $900" />
                <DefaultButton content="View Detail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
