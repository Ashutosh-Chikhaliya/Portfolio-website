import './App.css';
import "../public/stylesheets/responsive.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import BackgroundShapes from './components/BackgroundShapes.jsx';
import Navbar from "./components/Navbar"
import Projects from './pages/ProjectsPage';
import Contact from './pages/Contact';
import Home from "./pages/Home"
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';



function App() {
  return (
    <>
      <Navbar />
      <BackgroundShapes />

      <div id="Home">
        <Home />
      </div>

      <div id="About-Me">
        <AboutMe />
      </div>

      <div id="Projects">
        <ProjectsPage />
      </div>

      <div id="Skills">
        <Skills />
      </div>

      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
