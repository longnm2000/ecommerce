import { PhoneOutlined } from "@ant-design/icons";

const CategoryCard: React.FC = () => {
  return (
    <div className=" border-gray-400 border-1 border-solid rounded-lg p-4">
      <div className="flex justify-center mb-4">
        <PhoneOutlined color="#004d31" />
      </div>
      <h2 className=" text-center font-semibold">Electronic</h2>
      <p className="text-center text-gray-400">8.9k products</p>
    </div>
  );
};
export default CategoryCard;
