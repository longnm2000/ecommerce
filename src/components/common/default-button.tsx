import { Button } from "antd";

const DefaultButton: React.FC<DefaultButtonProps> = ({ content }) => {
  return (
    <Button className=" !border-customGreen !px-6">
      <span className="font-bold text-customGreen ">{content}</span>
    </Button>
  );
};
export default DefaultButton;
