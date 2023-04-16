import React, { useState } from 'react';
import CartList from './Objects/CartList';
import Footer from './Footer';
function Cart() {
  const [cartList, setCartList] = useState(CartList);

  const removeItem = (index) => {
    // Create a copy of the cartList array
    const updatedCartList = [...cartList];
    // Remove the item at the specified index from the updatedCartList array
    updatedCartList.splice(index, 1);
    // Update the state of the cartList variable using the updatedCartList array
    setCartList(updatedCartList);
    // Remove the deleted item from the CartList object as well
    CartList.splice(index, 1);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price;
    }
    return totalPrice;
  };

  return (
    <>
      <div className='container checkout-container mt-4'>

        <div className='row'>
          <div className='col-12 col-lg-8'>
            <h2>Checkout</h2>
            <div className='checkout-list pb-2'>
              {cartList.map((item, index) => (
                <div key={index} className='mx-4 row checkout-box d-flex py-3'>
                  <div className='col-3 checkout-img '>
                  <img src={item.img} className='img img-thumbnail'></img>
                  </div>
                  <div className='col-9 checkout-desc'>
                    <div className='d-flex justify-content-between'><h4><b>${item.price}.00</b></h4><button onClick={() => removeItem(index)} className=' mx-3 btn-close'></button></div>
                    
                  <h5>{item.name}</h5>
                  <p className='text-muted'>category: {item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <h2>Total</h2>
            <div className='total-container container'>
              sub-total
            </div>
          </div>
        </div>
        <p><b>Sub-total: ${calculateTotalPrice()}</b></p>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
