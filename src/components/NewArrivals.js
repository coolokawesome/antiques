import React from 'react'
import Objects from './Objects/Objects'

function NewArrivals() {
  return (
    <div className='arrivals-container py-5'>
        <div className='container row d-flex align-items-center mx-auto py-5'>
            <h2 className='text-center display-2'>New In Store</h2>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[0].img}></img>
                    <h5 className='text-center mt-3'>{Objects[0].name}</h5>
                    <p className='text-center'>Price: ${Objects[0].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[1].img}></img>
                    <h5 className='text-center mt-3'>{Objects[1].name}</h5>
                    <p className='text-center'>Price: ${Objects[1].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[2].img}></img>
                    <h5 className='text-center mt-3'>{Objects[2].name}</h5>
                    <p className='text-center'>Price: ${Objects[2].price + '.00'}</p>
                </div>
            </div>
            <div className='col-6 col-lg-3 arrival-container'>
                <div className=''>
                    <img className='img img-fluid product-img' src={Objects[3].img}></img>
                    <h5 className='text-center mt-3'>{Objects[3].name}</h5>
                    <p className='text-center'>Price: ${Objects[3].price + '.00'}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals