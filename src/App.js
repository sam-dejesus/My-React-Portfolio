import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PortfolioContainer from "./components/PortfolioContainer";
import NavTabs from './components/NavTabs';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import Resume from './components/pages/resume/Resume';
import Contact from './components/pages/contact/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
    return (
          <Router>
        <Hero />
        <NavTabs />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
    </Router>  
    )

}

export default App;