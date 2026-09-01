import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import Skills from './pages/Skills.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      {/* Fixed background glow */}
      <div className="bg-glow" aria-hidden="true" />

      {/* Floating navbar */}
      <Navbar />

      {/* Sections */}
      <main>
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

        <div id="Resume">
          <Resume />
        </div>

        <div id="Contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
