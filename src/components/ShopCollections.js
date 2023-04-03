import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'
import glass1 from '../imgs/glass1.webp'
import poster1 from '../imgs/poster1.jpeg'
import rug1 from '../imgs/rug1.jpeg'

function ShopCollections() {
  return (
    <div className='collections-container'>
      <div class="container">
        <h2 className='text-center display-2'>Shop Collections</h2>
        <div class="row">
          <div class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start collection-item-container"
            style={{
              backgroundImage: 'url(' + glass1 + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >

            <div>
              <h3 className='collections-header display-5'>Italian Glass</h3>
              <p className='collections-subtext text-dark col-8'>
                Experience the allure of Italian glass and elevate your space.
              </p>
              <Link to='/Shop?=Glass' className='collections-link'>Shop this collection {'>'}</Link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class=" d-flex align-items-center justify-content-center justify-content-md-start collection-item-container2"
                style={{
                  backgroundImage: 'url(' + poster1 + ')',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >

                <div>
                  <h3 className='collections-header display-5'>Vintage Posters</h3>
                  <p className='collections-subtext text-dark col-8'>
                    Enhance your walls with our wide variety of posters
                  </p>
                  <Link to='/Shop?=Posters' className='collections-link'>Shop this collection {'>'}</Link>
                </div>
              </div>
            </div>
            <div class="row">
            <div class=" d-flex align-items-center justify-content-center justify-content-md-start collection-item-container2"
                style={{
                  backgroundImage: 'url(' + rug1 + ')',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >

                <div>
                  <h3 className='collections-header display-5'>Persian Rugs</h3>
                  <p className='collections-subtext text-dark col-8'>
                    Decorate your floors with European rugs for any room
                  </p>
                  <Link to='/Shop?=Rugs' className='collections-link'>Shop this collection {'>'}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCollections