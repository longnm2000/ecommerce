import { Button } from "antd";

const PrimaryButton: React.FC<DefaultButtonProps> = ({ content }) => {
  return (
    <Button className=" !border-none !bg-customGreen !px-6">
      <span className="font-semibold text-white ">{content}</span>
    </Button>
  );
};
export default PrimaryButton;
