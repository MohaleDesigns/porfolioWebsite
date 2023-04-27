import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Tools = () => {
  return (
    <section id="toolskill" className="px-5">
      {/* title  */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container flex align-center space-y-8 mb-10 mx-auto"
      >
        <h3 className="max-w-2xl text-lg font-semibold text-center text-white uppercase mx-auto md:text-lg">
          Skills & Tools
        </h3>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto mb-52 flex flex-col align-center justify-center gap-x-5 p-5 rounded-xl custom-shadow md:flex-row"
      >
        <div className="flex align-center justify-between mb-5 md:mb-0 md:gap-6">
          <div className="h-10 w-10 bg-html bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-css bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-javascript bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-bootstrap bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-react bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-csharp bg-cover bg-center md:h-16 md:w-16"></div>
        </div>

        <div className="flex align-center justify-between md:gap-6 ">
          <div className="h-10 w-10 bg-tailwind bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-wordpress bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-mysql bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-git bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-github bg-cover bg-center md:h-16 md:w-16"></div>
          <div className="h-10 w-10 bg-figma bg-cover bg-center md:h-16 md:w-16"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tools;
