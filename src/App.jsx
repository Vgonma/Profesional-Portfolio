import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// component imports
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/pages/MainPage';
import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
