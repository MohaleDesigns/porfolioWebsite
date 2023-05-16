import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

const WorkFiltered = ({ menuItems }) => {
  return (
    <section id="work">
      <div>
        {menuItems.map((menuItem) => {
          return (
            <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row-reverse md:space-x-0">
              {/* left content  */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col space-y-9"
              >
                <img width={300} alt="project" src={menuItem.image} />
              </motion.div>

              {/* right content  */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col gap-8"
              >
                {/* pretitle  */}
                <h3 className="max-w-2xl text-lg font-semibold text-center text-primary/70 my-3 md:-mb-8 md:text-lg md:text-start">
                  {menuItem.category}
                </h3>
                {/* title  */}
                <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
                  {menuItem.title}
                </h1>
                {/* description  */}
                <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
                  {menuItem.description}
                </p>
                {/* tools  */}
                <div className="max-w-full  bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
                  <span>{menuItem.tools}</span>
                </div>
                {/* buttons */}
                <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
                  <button className="flex justify-center md:justify-start text-sm mx-2">
                    <a
                      href={menuItem.viewDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                    >
                      View Project
                    </a>
                  </button>
                  <button className="flex justify-center md:justify-start text-sm mx-2">
                    {menuItem.sourceCode === "none" ? (
                      <a
                        href={menuItem.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden"
                      >
                        Source Code
                      </a>
                    ) : (
                      <a
                        href={menuItem.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                      >
                        Source Code
                      </a>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* other projects  */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container flex-col items-center justify-center p-3 mt-16 mx-auto rounded-lg max-w-[910px]"
      >
        {/* title  */}
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg font-semibold text-center tracking-wider text-primary mb-5 md:text-lg"
        >
          Other Projects
        </motion.h1>

        <div className="flex flex-col items-center justify-center mt-8">
          {/* 1st row */}
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="http://mdlulidental.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mdlulidental.co.za
              </a>
            </div>
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="https://www.ttconsulting.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ttconsulting.co.za
              </a>
            </div>
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="https://www.motshwanetsiholdings.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.motshwanetsiholdings.co.za
              </a>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="http://www.mathaconsulting.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mathaconsulting.co.za
              </a>
            </div>
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="http://www.dithetogroup.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dithetogroup.co.za
              </a>
            </div>
            <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
              <a
                className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                href="https://mapcurve.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.mapcurve.co.za
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkFiltered;
