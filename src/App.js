import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkButtons from "./components/WorkButtons";
import WorkFiltered from "./components/WorkFiltered";

import items from "./WorkData";

function App() {
  const AllCategory = ["All", ...new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [buttons] = useState(AllCategory);

  const filter = (buttons) => {
    if (buttons === "All") {
      setMenuItems(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === buttons);
    setMenuItems(filteredData);
  };

  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <Nav />
      <About />
      <Tools />

      <WorkButtons buttons={buttons} filter={filter} />
      <WorkFiltered menuItems={menuItems} />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
