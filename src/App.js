import NavBar from "./components/navbar/navbar.js";
import About from "./components/About/about.js";
import ContactMe from "./components/Contact/contact";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
