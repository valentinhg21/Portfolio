import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Proyects />
      <Contact />
    </>
  );
};

export default App;
