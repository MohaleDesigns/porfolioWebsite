import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-12 w-full overflow-hidden z-50">
      <div className="container mx-10">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-lg rounded-md max-w-[460px] mx-auto p-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="hero"
            className="cursor-pointer w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>

          <Link
            className="cursor-pointer w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>

          <Link
            className="cursor-pointer w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center"
            to="toolskill"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>

          <Link
            className="cursor-pointer w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center"
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>

          <Link
            className="cursor-pointer w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
