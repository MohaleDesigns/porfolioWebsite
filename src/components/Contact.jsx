import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vjp40xn",
        "template_9zei3fb",
        form.current,
        "Q1iqZhkBaAN31mLDy"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container mx-auto flex flex-col mt-24 mb-5">
        {/* title  */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-8 mb-14 mx-auto"
        >
          <h3 className="max-w-2xl text-lg font-semibold text-center tracking-wider text-title/90 -mb-8 md:text-lg">
            Contact Me
          </h3>
          <h1 className="max-w-2xl text-3xl font-bold text-center text-primary -mb-5 md:text-4xl">
            Get In Touch With Me
          </h1>
        </motion.div>
      </div>

      <div className="container flex flex-col items-center justify-center space-y-0 gap-10 mx-auto md:flex-row md:space-x-0">
        {/* form  */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 p-5"
        >
          <input
            className="bg-transparent border-b-2 py-3 mb-4 outline-none w-full placeholder:text-white-50 placeholder:text-base focus:border-accent transition-all duration-500 text-accent text-lg"
            type="text"
            name="name"
            placeholder="Enter name"
            maxLength={100}
            required
          />
          <input
            className="bg-transparent border-b-2 py-3 mb-4 outline-none w-full placeholder:text-white-50 placeholder:text-base focus:border-accent transition-all duration-500 text-accent text-lg"
            type="email"
            name="email"
            placeholder="Enter email"
            maxLength={50}
            required
          />
          <input
            className="bg-transparent border-b-2 py-3 mb-4 outline-none w-full placeholder:text-white-50 placeholder:text-base focus:border-accent transition-all duration-500 text-accent text-lg"
            type="text"
            name="number"
            placeholder="Enter phone"
            maxLength={10}
            required
          />
          <textarea
            className="bg-transparent border-b-2 py-3 mb-10 outline-none w-full h-24 placeholder:text-white-50 placeholder:text-base focus:border-accent transition-all duration-500 text-accent text-lg resize-none"
            placeholder="Enter message"
            name="message"
            required
            maxLength={500}
          ></textarea>

          {/* button */}
          <input
            type="submit"
            value="Submit"
            className="text-white text-bold py-2 px-10 bg-accent rounded-md hover:bg-title/80 hover:-translate-y-2 transition-all ease-in-out duration-700 flex justify-center md:justify-start text-lg cursor-pointer"
          />
        </motion.form>

        {/* address  */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 p-5"
        >
          {/* details */}
          <div className=" bg-secondary text-paragraph text-center custom-shadow rounded-xl px-16 py-16 mx-6">
            <h1 className="max-w-2xl text-2xl font-bold text-center text-primary mb-8 md:text-2xl">
              Send Me A Message And Let's Start Working On Some Awesome
              Projects.
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                41 Impofu Street, Senaoane, Soweto, Johannesburg, South Africa
              </li>
              <li>+27 81 344 6402</li>
              <li>tokolohomohale@gmail.co.za</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
