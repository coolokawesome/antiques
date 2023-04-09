import {useState, useContext} from 'react'
import ShopCollections from './ShopCollections'
import SplashContainer from './SplashContainer'
import Objects from './Objects/Objects'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartList from './Objects/CartList';

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

  for(let i = 0; i < Objects.length; i++) {
    if (Objects[i].category === shopValue)
      {
        objectArray.push(Objects[i])
      }
  }
  return (
    <div className='container'>
    <h2 className='text-center'>{shopValue}</h2>
    {
    <div className='row'>
      {
        objectArray.map(
          (value) => (
            <div className='col-6 col-md-4 item-card'>
              <img className='img img-fluid border-3 rounded-4 item-img' src={value.img}></img>
              <h3 className='text-center item-desc'>{value.name}</h3>
              <button className='product-button' id={value.id} onClick={handleShow}>See More</button>
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
            <button className='col-12 col-md-5' onClick={handleCart}>Add To Cart</button>
            <button className='col-12 col-md-5' onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default Shop