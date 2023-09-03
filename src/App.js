import "./App.css";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

const App = () => {
  const toggleMenu = () => {
    console.log("toggle menu");
  };
  return (
    <div>
      <nav className="desktop-nav">
        <div className="logo">Jeck Mabasa</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">John Doe</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <div id="profile">
        <Profile />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
