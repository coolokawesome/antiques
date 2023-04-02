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
    <div class="alert-shipping alert alert-dismissible fade show py-2 text-center rounded-0 mb-0" role="alert">
      <strong>Free</strong> shipping on all orders over $200
      <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true"></span>
      </button>
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
              <NavLink className="nav-link" activeClassName="active" to="/shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/cart">Cart <i class="fa-solid fa-cart-shopping"></i> </NavLink>
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
