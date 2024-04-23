"use client";
import { DownOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import UserAction from "../../common/user-action";
import { useState } from "react";
import Search from "antd/es/input/Search";
const Header: React.FC = () => {
  const categoryItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="#">Electronic</Link>,
    },
    {
      key: "2",
      label: <Link href="#">Fashion</Link>,
    },
    {
      key: "3",
      label: <Link href="#">Action Figure</Link>,
    },
    {
      key: "4",
      label: <Link href="#">Electronics</Link>,
    },
    {
      key: "5",
      label: <Link href="#">Books</Link>,
    },
    {
      key: "6",
      label: <Link href="#">Gaming</Link>,
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className=" bg-white py-4">
      <div className="mx-auto container ">
        <div className="hidden md:block">
          <div className=" flex items-center gap-8">
            <p className="font-bold text-2xl">Lenny.</p>
            <div className="bg-[#f5f8fa] flex items-center py-1 relative w-full rounded-md pr-4">
              <Dropdown
                menu={{ items: categoryItems }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <Button type="text">
                  <span className=" font-semibold">
                    All Categories <DownOutlined />
                  </span>
                </Button>
              </Dropdown>
              <span>|</span>
              <input
                type="text"
                placeholder="Search on Lenny..."
                className=" bg-[#f5f8fa] w-full outline-none ml-3"
              />
              <SearchOutlined />
            </div>
            <UserAction />
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center px-1">
          <Button onClick={showDrawer} icon={<MenuOutlined />} />
          <UserAction />
        </div>
        <Drawer title="Menu" onClose={onClose} open={open}>
          <Search placeholder="Search on Lenny..." enterButton />
          <div className="mt-4">
            <Dropdown
              menu={{ items: categoryItems }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button type="text">
                <span className=" font-semibold">
                  All Categories <DownOutlined />
                </span>
              </Button>
            </Dropdown>
          </div>
        </Drawer>
      </div>
    </header>
  );
};
export default Header;
