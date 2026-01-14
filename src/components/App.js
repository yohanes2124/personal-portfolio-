import React, { useState } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [accentColor] = useState('#00df9a'); 

  return (
    <div>
      <Navbar accentColor={accentColor} />
      <Home accentColor={accentColor} />
      <About accentColor={accentColor} />
      <Skills accentColor={accentColor} />
      <Projects accentColor={accentColor} />
      <Contact accentColor={accentColor} />
    </div>
  );
}

export default App;