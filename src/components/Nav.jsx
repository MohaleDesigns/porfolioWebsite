import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-12 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[76px] backdrop-blur-lg rounded-md max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <div className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link
              to="hero"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
            >
              <BiHomeAlt />
            </Link>
          </div>

          <div className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="about" activeClass="active" smooth={true} spy={true}>
              <BiUser />
            </Link>
          </div>

          <div className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="toolskill" activeClass="active" smooth={true} spy={true}>
              <BsClipboardData />
            </Link>
          </div>

          <div className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="work" activeClass="active" smooth={true} spy={true}>
              <BsBriefcase />
            </Link>
          </div>

          <div className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <Link to="contact" activeClass="active" smooth={true} spy={true}>
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
