import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

import aboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="px-5">
      <div className="container flex flex-col items-center justify-center space-y-0 py-6 mx-auto mt-10 md:flex-row md:space-x-0">
        {/* left content  */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-9 md:w-1/2"
        >
          <img src={aboutImage} alt="about" />
        </motion.div>

        {/* right content  */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-9 md:w-1/2"
        >
          <h3 className="max-w-2xl text-lg font-semibold text-center tracking-wider text-title/90 -mb-8 md:text-lg md:text-start">
            About Me
          </h3>
          <h1 className="max-w-2xl text-3xl font-bold text-center text-primary -mb-5 md:text-4xl md:text-start">
            A Little Brief
          </h1>
          <p className="max-w-xl text-lg text-center text-paragraph md:text-start">
            I create impactful and high-end designs that not only look great but
            also serve their intended purpose. In today's digital world, having
            a strong online presence is essential for any business or individual
            looking to succeed. This is where my expertise comes in. With years
            of experience in web design, I have honed my skills to create
            visually stunning and functional websites that can help businesses
            stand out in their respective industries. Whether it is a simple
            brochure website or a complex e-commerce platform, I take the time
            to understand my client's needs and goals, and work tirelessly to
            bring them to life in the form of beautiful and user-friendly
            designs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
