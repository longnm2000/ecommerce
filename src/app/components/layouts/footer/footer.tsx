import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" ">
      <div className="bg-[#f1f0f0]">
        <div className="container mx-auto py-12">
          <div className="flex px-1 gap-8 flex-col md:flex-row">
            <div className=" flex-2">
              <h1 className=" font-bold text-xl">Lenny.</h1>
              <p>
                The biggest marketplace managed by Ideologist corp, which
                provides various kinds of daily needs and hobbles.
              </p>
            </div>
            <div className=" flex-1">
              <h1 className=" font-bold text-xl">About Lenny</h1>
              <ul>
                <li className="pt-4">
                  <Link href="#">Infomation</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Store Lactor</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Bulk Purchase</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Alteration Services</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Gift Delivery Service</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Live Station</Link>
                </li>
              </ul>
            </div>
            <div className=" flex-1">
              <h1 className=" font-bold text-xl">About Lenny</h1>
              <ul>
                <li className="pt-4">
                  <Link href="#">FAQ</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Return Policy</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Accessibility</Link>
                </li>
                <li className="pt-4">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className=" flex-1">
              <h1 className=" font-bold text-xl">Account</h1>
              <ul>
                <li className="pt-4">
                  <a href="#">Membership</a>
                </li>
                <li className="pt-4">
                  <a href="#">Address</a>
                </li>
                <li className="pt-4">
                  <a href="#">Coupons</a>
                </li>
              </ul>
            </div>
            <div className=" flex-1">
              <h1 className=" font-bold text-xl">Contact Us</h1>
              <ul>
                <li className="pt-4">For Lenny Consumer</li>
                <li className="pt-4">
                  (684) 555-0102 and curtis.weaver@example.com
                </li>
                <li className="pt-4">
                  <hr />
                </li>
                <li className="pt-4">Custommers Compliant Service</li>
                <li className="pt-4">
                  Directorate Generate of the Republic of Indonesia
                </li>
                <li className="pt-4">(480) 555-103</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e3e3e3]">
        <div className="container mx-auto px-1 flex flex-col md:flex-row justify-between items-center py-3">
          <span className=" uppercase">
            copyright @ lenny co, ltd, all rights reserved.
          </span>
          <div className="flex flex-col md:flex-row md:gap-8">
            <Link href={"#"}>Terms of use</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
