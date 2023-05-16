import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

// import { AiFillCloseSquare } from "react-icons/ai";S
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import popupVideo from "../assets/theMovieLand.webm";

// HTML CSS JS 
import wipa from "../assets/work/wipa.png";
import expenseTracker from "../assets/work/expese-tracker.png";
import justGym from "../assets/work/justgym.png";
import dynamicDNARevamp from "../assets/work/dynamic-revamp.png";

// Wordpress 
import pacesetter from "../assets/work/pacesetter.png";
import sanedi from "../assets/work/sanedi.png";

// React 
import mohaleBank from "../assets/work/mohaleBank.png";
import movieLand from "../assets/work/movieland.png";


const Work = () => {
  const [popup, setPopup] = useState(false);

  const showPopup = () => {
    setPopup(!popup);
  };

  return (
    <section id="work">
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

        {/* row one | justGym */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row-reverse md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={justGym} />
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
              Web Development | Web Design
            </h3>
            {/* title  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              Just Gym
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              Just Gym is a front-end development project that I created to
              showcase my skills. It is a website designed for a gym, with a
              modern and clean layout that features information about the gym,
              its facilities, and its services.
            </p>
            {/* tools  */}
            <div className="max-w-[310px]  bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span>JS</span>
              <span className="mx-3">BOOTSTRAP</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://mohale-justgym.netlify.app/"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://github.com/MohaleDesigns/Just-Gym"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button>
            </div>
          </motion.div>
        </div>

        {/* row two | Expense Tracker */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row-reverse md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={expenseTracker} />
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
              Web Development
            </h3>
            {/* title  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              Expense Tracker
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              Expense Tracker is a front-end development project that I created
              to demonstrate my skills in web development. The app allows users
              to track their expenses and income, with features such as adding
              new transactions, categorizing them.
            </p>
            {/* tools  */}
            <div className="max-w-[200px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span>JS</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://mohale-expensetracker-app.netlify.app/"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://github.com/MohaleDesigns/Expense-Tracker"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button>
            </div>
          </motion.div>
        </div>

        {/* row three | SANEDI */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={sanedi} />
          </motion.div>

          {/* right content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* pretitle  */}
            <h3 className="max-w-2xl text-lg font-semibold text-center text-primary/70 my-3 md:-mb-8 md:text-lg md:text-start">
              Web Developmet
            </h3>
            {/* pretitle  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              SANEDI
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              This project was done in collaboration with a team at Ditheto
              Group, and the client was SANEDI, a government company that deals
              with energy. The website was designed to provide information about
              SANEDI's mission, goals, and activities, with a focus on
              sustainability and renewable energy.
            </p>
            {/* tools  */}
            <div className="max-w-[150px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>WORDPRESS</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://sanedi.org.za/"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              {/* <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="#"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button> */}
            </div>
          </motion.div>
        </div>

        {/* row four | Pacesetter */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row-reverse md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={pacesetter} />
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
              Web Developmet
            </h3>
            {/* pretitle  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              Pacesetter
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              Pacesetter is a consulting firm that provides business solutions
              to various industries. It was a challenging project that I
              completed most of the work by myself, and it involved designing a
              website that would reflect the professionalism and expertise of
              the company, while also being user-friendly and informative.
            </p>
            {/* tools  */}
            <div className="max-w-[150px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>WORDPRESS</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://pacesetter.dithetogroup.co.za/"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              {/* <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="#"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button> */}
            </div>
          </motion.div>
        </div>

        {/* row five | Movie Land */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={movieLand} />
          </motion.div>

          {/* right content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* pretitle  */}
            <h3 className="max-w-2xl text-lg font-semibold text-center text-primary/70 my-3 md:-mb-8 md:text-lg md:text-start">
              Web Development
            </h3>
            {/* pretitle  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              The Movie Land
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              The Movie Land is a React web app that I created as a personal
              project. It fetches movie data from an API and allows users to
              search for movies, view their details, and save them to a
              favorites list. The app features a responsive design and uses
              modern web technologies to provide a seamless user experience.
            </p>
            {/* tools  */}
            <div className="max-w-[100px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>REACT</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button
                onClick={showPopup}
                className="flex justify-center md:justify-start text-sm mx-2"
              >
                <a
                  href="#"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://github.com/MohaleDesigns/The-Movie-Land"
                  target="_blank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button>
            </div>
          </motion.div>

          {/* popup  */}
          {popup && (
            <div
              onClick={showPopup}
              className="flex items-center justify-center fixed top-0 left-0 h-screen w-full bg-black/40"
            >
              <div className="flex flex-col relative p-2 my-auto mx-10 w-full max-w-[800px] rounded-md bg-white">
                {/* close button  */}
                {/* <div>
                  <AiFillCloseSquare
                    onClick={showPopup}
                    className=" float-right text-5xl text-red-500 cursor-pointer hover:text-primary transition-all ease-in-out duration-700"
                  />
                </div> */}
                {/* video  */}
                <div>
                  <Video autoPlay muted loop poster={movieLand}>
                    <source src={popupVideo} type="video/webm" />
                  </Video>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* row six | Mohale Bank */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row-reverse md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={mohaleBank} />
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
              Web Development
            </h3>
            {/* pretitle  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              Mohale Bank
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              Mohale Bank is a React website that I created to sharpen my skills
              in React development. It is a fictional modern bank website that
              features a sleek and user-friendly interface, with sections for
              banking services, online banking, and more. The website is
              designed to be responsive and accessible on all devices, and it
              incorporates modern web technologies to deliver a seamless user
              experience.
            </p>
            {/* tools  */}
            <div className="max-w-[240px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span className="mr-3">REACT</span>
              <span>TAILWIND</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://mohalebank.netlify.app/"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://github.com/MohaleDesigns/MohaleBank"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button>
            </div>
          </motion.div>
        </div>

        {/* row seven | Women In Power */}
        <div className="container flex flex-col items-center justify-center gap-8 space-y-0 py-6 px-5 mx-auto mt-10 md:flex-row md:space-x-0">
          {/* left content  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-9"
          >
            <img width={300} src={wipa} />
          </motion.div>

          {/* right content  */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* pretitle  */}
            <h3 className="max-w-2xl text-lg font-semibold text-center text-primary/70 my-3 md:-mb-8 md:text-lg md:text-start">
              Web Development
            </h3>
            {/* pretitle  */}
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary uppercase mb-3 md:-mb-5 md:text-2xl md:text-start">
              Women In Power Africa
            </h1>
            {/* description  */}
            <p className="max-w-xl text-base text-center text-paragraph mb-5 md:-mb-5 md:text-start">
              The website is for events. Users can see past events and upcoming,
              also see the details of the even, see details such as the time the
              will start and end, speakers and the venue of the event. Women In
              Power Africa is an organisation that Build, Empower and Uplift
              African women to become great and impactful leaders in any field
              they so choose that aligns to their God given purposes.
            </p>
            {/* tools  */}
            <div className="max-w-[250px] bg-black/20 h-[40px] backdrop-blur-2xl rounded-xl px-6 flex justify-between items-center text-lg text-white/50 gap-3 mb-4 mx-auto md:mx-0">
              <span>HTML</span>
              <span className="mx-3">CSS</span>
              <span className="mr-3">JS</span>
              <span>PHP</span>
            </div>
            {/* buttons */}
            <div className="flex mx-auto text-center gap-5 md:text-start md:mx-0">
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://wipa.co.za/"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  View Project
                </a>
              </button>
              <button className="flex justify-center md:justify-start text-sm mx-2">
                <a
                  href="https://github.com/MohaleDesigns/WomenInPower"
                  className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700"
                >
                  Source Code
                </a>
              </button>
            </div>
          </motion.div>
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
                >
                  www.mdlulidental.co.za
                </a>
              </div>
              <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
                <a
                  className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                  href="https://www.ttconsulting.co.za/"
                  target="_blank"
                >
                  www.ttconsulting.co.za
                </a>
              </div>
              <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
                <a
                  className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                  href="https://www.motshwanetsiholdings.co.za/"
                  target="_blank"
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
                >
                  www.mathaconsulting.co.za
                </a>
              </div>
              <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
                <a
                  className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                  href="http://www.dithetogroup.co.za/"
                  target="_blank"
                >
                  www.dithetogroup.co.za
                </a>
              </div>
              <div className="my-5 hover:-translate-y-2 transition-all ease-in-out duration-700">
                <a
                  className="text-white bg-primary py-3 px-4 m-3 rounded-lg cursor-pointer hover:bg-title/70"
                  href="https://mapcurve.co.za/"
                  target="_blank"
                >
                  www.mapcurve.co.za
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
