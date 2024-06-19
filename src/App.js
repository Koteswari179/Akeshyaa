

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Success from './components/Success';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import Nav from './components/Nav';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon CSS
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/nav" element={<Nav />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;

