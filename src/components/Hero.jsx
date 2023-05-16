import React from "react";

import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

import heroImage from "../assets/banner-image.png";

const Hero = () => {
  return (
    <section id="hero" className="px-5">
      <div className="container flex flex-col items-center justify-center space-y-0 py-6 mx-auto mt-10 md:flex-row md:space-x-0">
        {/* left content  */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-9 md:w-1/2"
        >
          <h3 className="max-w-2xl text-lg font-semibold text-center tracking-wider text-title/90 -mb-8 md:text-lg md:text-start">
            Hi, There!
          </h3>
          <h1 className="max-w-2xl text-5xl font-bold text-center text-primary -mb-5 md:text-6xl md:text-start">
            I'm a{" "}
            <span className="text-hover">
              Junior Front-End
              <TypeAnimation
                sequence={[" Developer", 3000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="max-w-xl text-lg text-center text-paragraph md:text-start ">
            Tokoloho Kabelo Mohale is my name. I am an experienced Junior
            Front-End Developer who create interactive, visually appealing
            websites for all devices. I also creates both modern and traditional
            designs. I'm all about using web development to take people's ideas
            and make them a reality, turning a simple idea into a high-end
            marketable solution to meet the client's expectations.
          </p>

          {/* socials */}
          <div className="max-w-[250px] bg-black/20 h-[60px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-5xl text-white/50 gap-3 mx-auto md:mx-0">
            <a
              href="https://www.facebook.com/kabelo.mohale.54/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-3xl"
            >
              <GrFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/tokoloho-kabelo-mohale-910058209/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-3xl"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mohaledesigns/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-4xl"
            >
              <FaInstagramSquare />
            </a>

            <a
              href="https://github.com/MohaleDesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 text-4xl"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>

        {/* right content  */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-9 md:w-1/2"
        >
          <img src={heroImage} alt="hero" className="hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
