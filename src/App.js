import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Work from "./components/Work";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Nav />
      <About />
      <Tools />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
