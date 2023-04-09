import {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'
import glass1 from '../imgs/glass1.jpg'
import poster1 from '../imgs/poster1.png'
import rug1 from '../imgs/rug1.jpeg'

function ShopCollections() {

  return (
    <div className='collections-container'>
      <div class="">
        <h2 className='text-center display-2'>Shop Collections</h2>
        <div class="row collections-row">
          
        <div class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start collection-item-container"
            style={{
              backgroundImage: 'url(' + glass1 + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'background-size 0.3s ease-in-out !important', 
            }}
          >

            <div>
              <h3 className='collections-header display-5'>Italian Glass</h3>
              <p className='collections-subtext text-dark col-8'>
                Experience the allure of Italian glass and elevate your space.
              </p>
              <Link to='/Shop?=Glass' onClick={null} className='collections-link'>Shop this collection {'>'}</Link>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start collection-item-container"
            style={{
              backgroundImage: 'url(' + poster1 + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transition: 'background-size 0.3s ease-in-out !important', 
            }}
          >

            <div>
              <h3 className='collections-header display-5'>Vintage Posters</h3>
              <p className='collections-subtext text-dark col-8'>
                Enhance your walls with our large selection of poster art. 
              </p>
              <Link to='/Shop?=Glass' className='collections-link'>Shop this collection {'>'}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCollections