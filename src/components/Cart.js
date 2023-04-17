import React, { useEffect, useState } from 'react';
import CartList from './Objects/CartList';
import Footer from './Footer';
import cards from '../imgs/weaccept.png'
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
      <div className='container checkout-container pb-2 mt-4'>

        <div className='row'>
          <div className='col-12 col-lg-8'>
            <h2 className='checkout-header2'>Checkout</h2>
            <div className='checkout-list pb-2'>
              {cartList.length == 0 ? <><h1 className='my-5'>Nothing to show!</h1></> : cartList.map((item, index) => (
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
            <h2 className='checkout-header2'>Total</h2>
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
              <h6 className='py-1'>Discount Code:</h6>
                <form onSubmit={handleDiscountCheck}>
                  <input onChange={handleDiscountValue} className='col-8 form-control form-control-sm' id='discount'></input>
                  <button className='btn btn-outline-primary my-2 col-12'>check</button>
                </form>
            </div>
            <div className='total-container container text-center'>
            {
              discountcodeElegible == true ? <>you just saved <b>${saved}</b> with code '<b>SPRING</b>'!</> : <></>
            }
            </div>
            <div className='total-container container d-flex justify-content-between pt-5'>
              
              <h6 className=''>Total:</h6>
              <p className=''>${absolutetotal}</p>
            </div>
            <div className='total-container container text-end text-lg-center '>

            </div>
            <div className='total-container'>
              
              <a target='_blank' href={'https://www.sandbox.paypal.com/checkoutnow?sessionID=uid_594ed90697_mda6mdu6ndc&buttonSessionID=uid_0e9e57fb5d_mda6mdy6mjk&stickinessID=uid_0d796c10c1_mda6mdu6ndc&inlinexo=false&smokeHash=&token=0SN93902KX570362A&fundingSource=paypal&buyerCountry=US&locale.x=en_US&commit=false&enableFunding.0=paylater&clientID=ATssuyeiKXrkPP1TfoIcMXMoLBIO7ps9B2HN34eiAuhIuktEMTX0m_IVahzN3Ep3OXA8L33o0LxkkhiN&env=sandbox&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QVRzc3V5ZWlLWHJrUFAxVGZvSWNNWE1vTEJJTzdwczlCMkhOMzRlaUF1aEl1a3RFTVRYMG1fSVZhaHpOM0VwM09YQThMMzNvMEx4a2toaU4mY29tbWl0PWZhbHNlJmN1cnJlbmN5PVVTRCZkaXNhYmxlLWZ1bmRpbmc9Y2FyZCZlbmFibGUtZnVuZGluZz1wYXlsYXRlciZidXllci1jb3VudHJ5PVVTJmxvY2FsZT1lbl9VUyZjb21wb25lbnRzPW1lc3NhZ2VzLGJ1dHRvbnMiLCJhdHRycyI6eyJkYXRhLXVpZCI6InVpZF9iZnZyaHB5ZXZ4ZXF1aXVpc2FodHJiamhpb3piangifX0&xcomponent=1&version=5.0.363'}><button className='checkout-button col-12 mb-1'>Purchase</button></a>
            </div>
            <div className='total-container pb-5 px-3'>
              <img className='cc justify-content-center' src={cards}></img>
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
