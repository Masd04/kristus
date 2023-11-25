import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
    {/* <div className="bg-cover bg-center fixed top-0 left-0 right-0 bottom-0" style={{ backgroundImage: `url(${bg})` }}></div>
 */}
    <Router basename={"/kristus"}>
    <div className="pt-24">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mamka" element={<About />} />
      </Routes>
    </div>
    </Router>

    
    </>
  )
}

export default App
