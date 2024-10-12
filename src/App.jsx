import './App.css';
import "../public/stylesheets/responsive.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import BackgroundShapes from './components/BackgroundShapes.jsx';
import Navbar from "./components/Navbar.jsx"
import Contact from './pages/Contact.jsx';
import Home from "./pages/Home.jsx"
import Skills from './pages/Skills.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';



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
