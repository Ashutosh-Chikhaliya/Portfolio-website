import './App.css';
import "./stylesheets/responsive.css"
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

      <div id="About-Me" className='pt-32 pb-16'>
        <AboutMe />
      </div>

      <div id="Projects" className='pt-20 pb-20'>
        <ProjectsPage />
      </div>

      <div id="Skills" className='pt-16'>
        <Skills />
      </div>

      <div id="Contact" className='pt-16'>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
