// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// Import other sections as needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* Add additional sections here */}
    </div>
  );
}

export default App;
