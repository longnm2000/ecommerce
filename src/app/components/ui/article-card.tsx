import { Button, Image } from "antd";
import Link from "next/link";

const ArticleCard: React.FC<ArticleProps> = ({ createAt, title, content }) => {
  return (
    <Link href={"#"}>
      <div className="w-full" style={{ padding: 0 }}>
        <div className="aspect-square ">
          <Image
            alt="product-image"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            className="object-cover w-full rounded-md"
            preview={false}
          />
        </div>
        <div className=" flex flex-col gap-2 mt-2">
          <p className=" text-gray-400">{createAt}</p>
          <h2 className=" truncate font-bold">{title}</h2>
          <p className=" text-gray-400">{content}</p>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCard;
