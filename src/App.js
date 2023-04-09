import React from 'react';

import Navbar from './components/inc/Nav/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Blog from './components/pages/Blog/Blog';
import Cart from './components/pages/Cart/Cart';
import SignUp from './components/pages/SignUp/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
