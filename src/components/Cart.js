import React, { useEffect, useState } from 'react';
import CartList from './Objects/CartList';
import Footer from './Footer';
function Cart() {
  const [cartList, setCartList] = useState(CartList);
  const [subtotal, setSubtotal] = useState(0)
  const [shippingValue, setShippingValue] = useState(15)
  const [discountcodeElegible, setDiscountcodeElegible] = useState(false)
  const [discountCodeValue, setDiscountCodeValue] = useState('')
  const [absolutetotal, setAbsolutetotal] = useState(0)
  const [tax, setTax] = useState((0.13))
  const [saved, setSaved] = useState(0.00)
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
  const handleDiscountValue = (e) => {
    setDiscountCodeValue(e.target.value)
    console.log(e.target.value)
  }
  const handleDiscountCheck = (e) => {
    e.preventDefault()
    let tempDiscountCodeToCheck = discountCodeValue.toLowerCase()
    if (tempDiscountCodeToCheck == 'spring') {
      setDiscountcodeElegible(true)
      console.log('you qualify for discount!')
    }
    else
      setDiscountcodeElegible(false)
    e.preventDefault()
  }
useEffect(() => {
  //calculate the subtotal
  if (cartList == []) {
    console.log('empty')
    setSubtotal(0);
    setAbsolutetotal(0);
  }
  //map the subtotal
  let temporaryCartValue = 0;
  for (var i = 0; i < cartList.length; i++) {
    temporaryCartValue += cartList[i].price
  }
  setSubtotal(temporaryCartValue)
  //set shipping amount
  if ((subtotal >= 200) || (0)) {
    setShippingValue(0)
  } 
  if (subtotal < 200) {
    setShippingValue(15)
  }
  //evaluate discount code
  if (discountcodeElegible == true) {
    let subtotalAndShipping = subtotal + shippingValue
    let subtotalShippingAndDiscount = subtotalAndShipping * 0.75
    let subtotalTaxValue = subtotalShippingAndDiscount * tax
    let totalValue = subtotalTaxValue + subtotalShippingAndDiscount
    setAbsolutetotal(
      totalValue.toFixed(2)      
    )
    //how much was saved!
    //subtotal value with shipping
    let savedSubtotalAndShipping = subtotalAndShipping
    let savedSubtotalTaxValue = subtotalAndShipping * tax
    let savedTotalPreCalculation = savedSubtotalAndShipping + savedSubtotalTaxValue
    let totalSavedValue =  savedTotalPreCalculation - totalValue
    //with the tax
    setSaved(
      totalSavedValue
    )
  }
  if (discountcodeElegible == false ) {
    let subtotalAndShipping = subtotal + shippingValue
    let subtotalTaxValue = subtotalAndShipping * tax
    let totalValue = subtotalTaxValue + subtotalAndShipping
    setAbsolutetotal(
      totalValue.toFixed(2)      
    )
  }
  if (subtotal == 0) {
    setAbsolutetotal((0).toFixed(2))
  }
  if (saved !== 0) {
    let setTempSaved = saved
    setSaved(parseFloat((setTempSaved).toFixed(2)));
  }
})


  return (
    <>
      <div className='container checkout-container pb-5 mt-4'>

        <div className='row'>
          <div className='col-12 col-lg-8'>
            <h2>Checkout</h2>
            <div className='checkout-list pb-2'>
              {cartList.length == 0 ? <>Nothing to show!</> : cartList.map((item, index) => (
                <div key={index} className='mx-4 row checkout-box d-flex py-3'>
                  <div className='col-3 checkout-img '>
                  <img src={item.img} className='img img-thumbnail'></img>
                  </div>
                  <div className='col-9 checkout-desc'>
                    <div className='d-flex justify-content-between'><h5><b className='modal-price'>${item.price}.00</b></h5><button onClick={() => removeItem(index)} className=' mx-3 btn-close'></button></div>
                    
                  <h4 className='text-dark modal-price'>{item.name}</h4>
                  <p className='text-muted'>category: {item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <h2>Total</h2>
            <div className='total-container container d-flex justify-content-between'>
              <h6 className='pt-3'>Sub-Total:</h6>
              <p className='pt-3'>${subtotal}.00</p>
            </div>
            <div className='total-container container d-flex justify-content-between'>
              <h6 className='py-1'>Shipping:</h6>
                {
                  shippingValue == 15 ? <>$15.00</> : <p><strike>$15.00</strike> <b>FREE</b></p>
                }
            </div>
            <div className='total-container container d-flex justify-content-between'>
              <h6 className='py-1'>HST:</h6>
                {
                  '13%'
                }
            </div>
            <div className='total-container container'>
              <h6 className='py-1'>Discount Code</h6>
                <form onSubmit={handleDiscountCheck}>
                  <input onChange={handleDiscountValue} className='col-8 form-control form-control-sm' id='discount'></input>
                  <button className='btn btn-outline-primary my-2'>check</button>
                </form>
            </div>
            <div className='total-container container d-flex justify-content-between'>
              <h6 className='py-1'>Total:</h6>
              <p>${absolutetotal}</p>
            </div>
            <div className='total-container container text-end text-lg-center pb-4'>
            {
              discountcodeElegible == true ? <>you just saved ${saved} with code '<b>SPRING</b>' !</> : <></>
            }
            </div>
          </div>
        </div>
        {/* <p className='text-center'><b>Sub-total: ${totalPrice}</b></p> */}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
