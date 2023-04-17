import React from 'react'
import Objects from './Objects/Objects'

function NewArrivals() {
  return (
    <div className='arrivals-container'>
        <div className='container row d-flex align-items-center mx-auto'>
            <h2 className='text-center display-2'>New Arrivals</h2>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[0].img}></img>
                    <h5>{Objects[0].name}</h5>
                    <p>Price: ${Objects[0].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[1].img}></img>
                    <h5>{Objects[1].name}</h5>
                    <p>Price: ${Objects[1].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[2].img}></img>
                    <h5>{Objects[2].name}</h5>
                    <p>Price: ${Objects[2].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[3].img}></img>
                    <h5>{Objects[3].name}</h5>
                    <p>Price: ${Objects[3].price + '.00'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals