import React from 'react';
import Routing from './Utils/Routing';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Technology from './Components/Technology';
import Projects from './Components/Projects';
import Error from './Components/Error';



function App() {
  return (
    
    <div>
      <Navbar></Navbar>
       <Routing />
    </div>
  )
}

export default App
