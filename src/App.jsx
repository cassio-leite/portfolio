import React from 'react';
import { useAOS } from './hooks/useAOS.js';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Interests from './components/Interests/Interests.jsx';
import Education from './components/Education/Education.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import GlobalStyle from './styles/globalStyles.js';

function App() {
  useAOS();

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Interests />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
        <Footer />
    </>
  )
}

export default App
