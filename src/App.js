import React from 'react';
import { Link, NavLink, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { NavDropdown } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';


function App() {
  
  return (
  <Router>
    <nav className="navbar navbar-expand-md">
      <div className="container-md d-flex py-2 justify-content-center justify-content-md-end align-items-center">
        <Link className="navbar-brand" to="/">
          <h1 className="display-6 me-5">Chambéry Antiques</h1>
        </Link>
        <button className="navbar-toggler ms-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center flex-grow-1" id="navbarNav">
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/">SHOP</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/blog">BLOG</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/cart"> <i class="fa-solid fa-cart-shopping"></i> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}


export default App;
