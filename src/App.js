import React, {useState, useEffect} from 'react';
import { Link, NavLink, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Contact from './components/Contact';
import { NavDropdown, Alert, Modal } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import promoBg from './imgs/shopfurniture.png'


function App() {
  const [showCookies, setShowCookies] = useState(false);
  const [showShipping, setShowShipping] = useState(true);
  const [show, setShow] = useState(false)
  
  //handle cookies
  useEffect(() => {
    setTimeout(() => {
      setShowCookies(true);
    }, 2500);
    setTimeout(() => {
      setShow(true);
    }, 1000);

  }, []);
  //handle modal
  const handleClose = () => {
    setShow(false)
  };

  return (
  <Router>
        <div className='shipping-container'>
        {showShipping && (
        <Alert className='mb-0 rounded-0 text-center my-0 py-0' style={{backgroundColor: '#1155c4', color: '#f2e5c6 '}} variant="light" onClose={() => setShowShipping(false)} dismissible>
          <p className="mb-0">
           <b>FREE</b> shipping on all orders over 200!{' '}
          </p>
        </Alert>
      )}
        </div>
    {/* <div className='d-none d-lg-block small-header-container py-1'>
      <div className='container'>
      <div className='row d-flex justify-content-between'>
        <div className=' header-items header-items-left col-6 d-flex'>
          <div className='subscribe me-4'><a href='#'><div><i class="fa-lg fa-solid fa-envelope"></i> Subscribe</div></a></div>
          <div className='subscribe'><a href='#'><i class="fa-lg fa-brands fa-facebook pe-2"></i></a></div>
          <div className='subscribe'><a href='#'><i class="fa-lg fa-brands fa-instagram pe-2"></i></a></div>
        </div>
        <div className='header-items header-items-right col-6 d-flex justify-content-end'>
        <div className='subscribe'><a href='#'><div><i class="fa-lg fa-solid fa-phone pe-1"></i> {'+1 (192) 168-0001'}</div></a></div>
        </div>
      </div>
      </div>
    </div> */}
    <nav className="navbar navbar-expand-md">
      <div className="container-md d-flex py-0 justify-content-end justify-content-md-end align-items-center">
        <Link className="navbar-brand" to="/">
          <h1 className="display-6 me-5">Chambéry Antiques</h1>
        </Link>
        <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

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
    {showCookies && (
        <Alert className='fixed-bottom mb-0 bg-white rounded-0 d-flex align-items-center mt-3' style={{backgroundColor: 'null'}} variant="light" onClose={() => setShowCookies(false)} dismissible>
          <p className="mb-0">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{' '}
            <a href="#" className="alert-link">
              Learn more
            </a>
            .
          </p>
        </Alert>
      )}
      {/* promo modal */}
      <Modal show={show} onHide={handleClose}  >
        <Modal.Body className='border border-5' style={{backgroundImage: 'url(' + promoBg + ')', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
        <div className='row d-flex justify-content-center text-center promo-container'>
          <h4 className='text-light'>Spring into savings</h4>
          <div>
          <h1 className='display-1 py-0 text-light'><b>25% OFF</b></h1>
          <h2 className='display-1 py-0 text-light'>Sitewide</h2>
          </div>
          <h4 className='col-6 text-light'>From vintage furniture to antique glass, our collection has something for everyone. Take advantage of our Spring Sale and enjoy 25% off all items with code <u><b>SPRING</b></u> at checkout.</h4>
          <h4></h4>
        <button className='promo-button' onClick={handleClose}>Close</button>
        </div>
        </Modal.Body>
      </Modal>


  </Router>
  )
}


export default App;
