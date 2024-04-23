import { Button, Image } from "antd";
import Star from "../common/star";
import Link from "next/link";
import { HeartOutlined } from "@ant-design/icons";
const ProductCard: React.FC = () => {
  return (
    // <Link href={"#"} className=" ">
    <div className="w-full relative" style={{ padding: 0 }}>
      <div className="aspect-square ">
        <Image
          alt="product-image"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="object-cover w-full rounded-md"
          preview={false}
        />
      </div>
      <div className=" absolute top-2 right-2 rounded-full overflow-hidden">
        <Button icon={<HeartOutlined />} className=" " />
      </div>
      <div className=" flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center gap-4">
          <h2 className=" truncate font-bold">Spy x Family T-shirt</h2>
          <span className=" text-green-500 font-bold">$26</span>
        </div>
        <p className=" text-gray-400">North Purworkerto</p>
        <div className="flex items-center gap-2 pb-4">
          <Star />
          <span>4.8</span>
          <span>1,238 Sold</span>
        </div>
      </div>
    </div>
    // </Link>
  );
};
export default ProductCard;
