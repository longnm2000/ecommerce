import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
const UserAction: React.FC = () => {
  const actionItems: MenuProps["items"] = [
    { key: "0", label: <Link href={"#"}>Login</Link> },
    { key: "1", label: <Link href={"#"}>Register</Link> },
  ];
  return (
    <div className="flex items-center gap-4">
      <Button type="text" size="large" icon={<ShoppingCartOutlined />} />
      <Dropdown
        menu={{ items: actionItems }}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Avatar
          style={{ backgroundColor: "white", border: "1px solid gray" }}
          icon={<UserOutlined style={{ color: "black" }} />}
          className=" cursor-pointer"
        />
      </Dropdown>
    </div>
  );
};
export default UserAction;
