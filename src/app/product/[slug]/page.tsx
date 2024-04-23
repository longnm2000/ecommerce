"use client";
import Star from "@/components/common/star";
import ProductSlider from "@/components/ui/product-slider";
import { CheckCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Form, Select } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import clsx from "clsx";
const ProductDetail: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const tableData = [
    {
      title: "Brand",
      content: "Wired",
    },
    {
      title: "Resolution",
      content: "100-25600 dpi",
    },
    {
      title: "Max Speed",
      content: ">40G2",
    },
    {
      title: "Max Acceleration",
      content: ">300 IPS",
    },
  ];
  const boxData = [
    "UG502 X LIGHTSPEED Wireless Gaming Mouse",
    "DPI-Shift button cover",
    "USB-C charging cable",
    "LIGHTSPEED USB-A receiver",
    "USB extension cable",
    "User Documentation",
  ];
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Detail Product",
      children: (
        <div>
          <h2 className="text-2xl font-bold">
            G502 X Lightspeed WirelessGaming Mouse
          </h2>
          <p className="text-gray-400 my-4">
            G502 X LIGHTSPEED is the latest addition to legendary GSC2 lineage.
            Featuring our first-ever LIGHTFORCE hybrid optical- mechanzal
            switches and updated LIGHTSPEED wireless protocol with 6-8% faster
            response rate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
            <div>
              <p className="font-bold text-xl mb-4">Specification</p>
              <table className="w-full table-fixed">
                <tbody>
                  {tableData.map((e, i) => (
                    <tr
                      key={i}
                      className={clsx("w-full", i % 2 === 0 && " bg-[#eeeeee]")}
                    >
                      <th className=" text-start font-medium text-gray-400 p-2">
                        {e.title}
                      </th>
                      <td className=" text-start font-bold p-2">{e.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">In The Box</p>
              <table className="w-full table-auto">
                <tbody>
                  {boxData.map((e, i) => (
                    <tr key={i} className="w-full">
                      <th className=" text-start">
                        <CheckCircleOutlined />
                      </th>
                      <td className=" text-start font-bold p-2">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">System Required</p>
              <ul>
                <li>USB port </li>
                <li>Internet access for optional software download</li>
                <li>Windows• 10 or later </li>
                <li>macOS 10.14 or later</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Merchant",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Reviews",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Related Product",
      children: "",
    },
  ];
  return (
    <main>
      <div className="container mx-auto">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: "Electronic",
              href: "",
            },
            {
              title: "Gaming Gear",
              href: "",
            },
            {
              title: "G502 x Lightspeed Wireless Gaming House",
            },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <ProductSlider />
          </div>
          <div>
            <h1 className=" font-bold text-3xl">
              G502 X Lightspeed Wireless Gaming Mouse
            </h1>
            <div className="flex items-center gap-2 my-4">
              <Star />
              <span>4.8</span>
              <span>1,238 Sold</span>
            </div>
            <p className=" text-defaultGreen font-bold text-xl">$139.99</p>
            <p className=" text-wrap my-4 text-gray-400">
              G502 X LIGHTSPEED is the latest addition to legendary G502
              lineage. Featuring our first-ever LIGHTFORCE hybrid
              optical-mechanical switches and updated LIGHTSPEED wreless
              protocol vvith 68% faster response rate.
            </p>
            <hr />
            <p className="my-4 font-semibold">Product Variant:</p>

            <Form layout="vertical" style={{ width: "100%" }}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Form.Item label={"Type"}>
                    <Select
                      defaultValue={"wireless"}
                      options={[
                        { value: "wireless", label: <span>Wireless</span> },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <Form.Item label={"Color"}>
                    <Select
                      defaultValue={"black"}
                      options={[
                        { value: "black", label: <span>Black</span> },
                        { value: "white", label: <span>White</span> },
                      ]}
                    />
                  </Form.Item>
                </div>
              </div>
            </Form>
            <div className="flex gap-4">
              <Button
                className=" !bg-customGreen hover:!bg-defaultGreen !px-10"
                type="primary"
                size="large"
              >
                <span>Buy Now</span>
              </Button>
              <Button
                size="large"
                type="default"
                icon={<ShoppingCartOutlined />}
                style={{ borderColor: "#004d31" }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </main>
  );
};
export default ProductDetail;
