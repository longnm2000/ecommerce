import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Modal } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "../ui/login-form";
import RegisterForm from "../ui/register-form";
const UserAction: React.FC = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const actionItems: MenuProps["items"] = [
    {
      key: "0",
      label: <Link href={"#"}>Login</Link>,
      onClick: () => setLoginModal(true),
    },
    {
      key: "1",
      label: <Link href={"#"}>Register</Link>,
      onClick: () => setRegisterModal(true),
    },
  ];
  const handleCancel = (form: string) => {
    if (form === "login") setLoginModal(false);
    if (form === "register") setRegisterModal(false);
  };
  return (
    <div className="flex items-center gap-4">
      <Modal
        title={<h2 className="font-bold text-xl">Sign In</h2>}
        open={loginModal}
        onCancel={() => handleCancel("login")}
        footer={[]}
      >
        <LoginForm />
      </Modal>
      <Modal
        title={<h2 className="font-bold text-xl">Sign Up</h2>}
        open={registerModal}
        onCancel={() => handleCancel("register")}
        footer={[]}
      >
        <RegisterForm />
      </Modal>
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
