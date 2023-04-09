import {useState, useContext} from 'react'
import ShopCollections from './ShopCollections'
import SplashContainer from './SplashContainer'
import Objects from './Objects/Objects'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartList from './Objects/CartList';
import Footer from './Footer'
function Shop() {
  //hooks
  const [show, setShow] = useState(false)
  const [modalInfo, setModalInfo] = useState('')

  //handle closing of modal
  const handleClose = () => {
    setShow(false)
  };
  //handle the opening of the modal
  const handleShow = (event) => {
      const findObject = Objects.find(obj => obj.id === event.target.id);
      setModalInfo(findObject)
    ;
    setShow(true); 
    console.warn(modalInfo)
  };
  const handleCart = () => {
    console.log('cart item name: ' + modalInfo);
    let cartItemName = modalInfo
    CartList.push(cartItemName)
    setShow(false)
    console.log('CART: ' + CartList)
  }
  //populate the url value for the item search
  let URLvalue = window.location.search
  let shopValue = URLvalue.replace('?=', '')

  let objectArray = [];
  let objectCount = 0;

  for(let i = 0; i < Objects.length; i++) {
    if (Objects[i].category === shopValue)
      {
        objectArray.push(Objects[i])
        objectCount++
      }
  }
  return (
    <div className='container'>
    <h2 className='display-4 text-center mb-5 mt-2 shop-header'>{shopValue}</h2>
    {shopValue == 'Glass' ? <p className='shop-text'>Shop from a wide variety of antique and vintage glass</p> : <></>}
    {shopValue == 'Rugs' ? <p className='shop-text'>Shop from a wide variety of antique and vintage rugs</p> : <></>}
    {<h5>Showing <nobr className='text-primary'>{objectCount}</nobr> result{objectCount > 1 || objectCount == 0 ? <>s</> : <></>}:</h5>}
    {
    <div className='row'>
      {
        objectArray.map(
          (value) => (
            <div className='col-6 col-md-4 col-lg-3 item-card p-2'>
              <div className='item-card-inner p-4'>
              <img className='img img-fluid border-3 item-img' src={value.img}></img>
              <h5 className='my-0 text-center item-desc'>{value.name}</h5>
              <p className='py-0 text-black text-center'>${value.price}.00</p>
              <div className='d-flex justify-content-center'>
                <button className='product-button' id={value.id} onClick={handleShow}>See More</button>
              </div>
              </div>
            </div>
          )
        )
      }
    </div>
    }
      <p className='text-muted text-center'>end of results</p>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
          <div className='col-5'>
            <img className='img img-fluid' src={modalInfo.img}></img>
          </div>
          <div className='col-7'>
            <h3>{modalInfo.name}</h3>
            <h2>{modalInfo.price}</h2>
            <p>{modalInfo.desc}</p>
            <p className='text-muted'>{modalInfo.desc2}</p>
            <div className='row d-flex justify-content-around'>
            <button className='col-12 col-md-5 cart-button' onClick={handleCart}>Add To Cart</button>
            <button className='col-12 col-md-5 close-button' onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  )
}
export default Shop