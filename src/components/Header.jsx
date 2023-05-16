import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 px-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo  */}
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>

          {/* button */}
          <button className="flex justify-center md:justify-start text-base font-semibold md:text-lg">
            <a
              href="/#contact"
              className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
            >
              Hire Me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
