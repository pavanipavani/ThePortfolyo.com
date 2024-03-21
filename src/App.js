import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Social from './components/social';
import Testimonials from './components/testimonials';
import Services from './components/services';
import Project from './components/project';
import Homepage from './components/homepage';
import Skills from './components/skills';
import Herosection from './components/herosection';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='herosection' element={<Herosection />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/socialhandles" element={<Social />} />
          <Route path="/skills" element={<Skills />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

