import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import green from "../src/green.png";

const Loader = () => {
  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1000,
  };

  const imageStyle = {
    width: '200px',
    height: 'auto',
  };

  return (
    <div style={loaderStyle}>
      <img src={green} alt="Loading..." style={imageStyle} />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time before the app is ready
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the duration as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
