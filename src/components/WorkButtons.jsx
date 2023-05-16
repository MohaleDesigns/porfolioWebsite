import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

const WorkButtons = ({ buttons, filter }) => {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        {/* title */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-8 mb-10 mx-auto px-5"
        >
          <h3 className="max-w-2xl text-lg font-semibold text-center tracking-wider text-title/90 -mb-8 md:text-lg">
            Projects
          </h3>
          <h1 className="max-w-2xl text-3xl font-bold text-center text-primary -mb-5 md:text-4xl">
            Highlights Of My Top Projects
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto flex flex-col items-center justify-center md:flex-row"
      >
        {buttons.map((category, index) => {
          return (
            <>
              <button
                className="text-white text-bold py-2 px-10 mx-2 mt-4 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                type="buttons"
                onClick={() => filter(category)}
              >
                {category}
              </button>
            </>
          );
        })}
      </motion.div>
    </>
  );
};

export default WorkButtons;
