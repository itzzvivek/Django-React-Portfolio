import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
