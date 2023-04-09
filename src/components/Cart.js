import React, { useState } from 'react';
import CartList from './Objects/CartList';

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
    <div className='container'>
      <h2>Checkout</h2>
      <ul>
        {cartList.map((item, index) => (
          <li key={index}>
            {item.name}, ${item.price}
            <button onClick={() => removeItem(index)} className=' mx-3 remove-button'>remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
}

export default Cart;
