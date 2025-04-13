import { Link } from "react-router-dom";

import logo1 from "../assets/images/fav.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center shadow-xl  bg-[#FAF0E6] text-black rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover text-[15px] sm:text-xl title_font ">
            About us
          </Link>
          <Link className="link link-hover text-[15px] sm:text-xl title_font ">
            Contact
          </Link>
          <Link className="link link-hover text-[15px] sm:text-xl title_font ">
            Jobs
          </Link>
          <Link className="link link-hover text-[15px] sm:text-xl title_font ">
            Press kit
          </Link>
        </nav>
        <nav>
          <div className="flex-1">
            <Link to="/" className="flex gap-2 items-center">
              <img className=" rounded-lg  h-14" src={logo1} alt="" />
              <span className=" font-bold text-xl md:text-3xl text-gray-900">
                <span className="text-[#F97316]">M</span>sab
              </span>
              {/* <span className="akronim-regular text-3xl title_font text-green-900">
                Run to Rise
              </span> */}
            </Link>
          </div>
        </nav>
        <aside>
          <p className="border-t border-white pt-4">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
