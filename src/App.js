import React from 'react';
import { Link, NavLink, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <div class="row d-flex justify-content-between py-2 rounded-0 mb-0">
      <div className='col-6 d-flex justify-content-start'>
        <div className='d-flex align-items-center'>
        <i></i><p className='mini-header-item align-items-center align-items-center my-0 me-3'>subscribe</p>
        <div className='align-items-center my-0'>
          <a><i class="fa-brands fa-facebook align-items-center me-1"></i></a></div>
          <a><i class="fa-brands fa-instagram align-items-center me-1"></i></a>
        </div>
      </div>
      <div className='col-6 d-flex justify-content-end '>
        <div className='d-flex'>
       <div className='d-flex align-items-center'> <i class="fa-solid fa-envelope align-items-center"></i><p className='mini-header-item align-items-center my-0'>contact</p></div>
        <div className='d-flex align-items-center me-3'><i class="fa-solid fa-phone align-items-center my-0 ms-3"></i><p className='mini-header-item align-items-center my-0'>{'(416) 802-8842'}</p></div>
        </div>
      </div>
    </div>
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
              <NavLink className="nav-link" activeClassName="active" to="/shop">SHOP</NavLink>
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
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
