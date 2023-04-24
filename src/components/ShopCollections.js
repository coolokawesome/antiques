import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Shop from './Shop'
import glass1 from '../imgs/glass1.jpg'
import poster1 from '../imgs/poster1.png'
import rug1 from '../imgs/rug1.jpg'


{/* <div class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start collection-item-container"
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
          </div> */}

function ShopCollections() {
  <div class="col-lg-6 p-0">
  <div className='align-items-center collection-item-container1' style={{ backgroundImage: 'url(' + glass1 + ')', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', transition: 'background-size 0.3s ease-in-out !important', }}>
  <div className='collection-info-container'>
    <h3 className='collections-header display-5'>Italian Glass</h3>
    <p className='collections-subtext text-dark col-12'>
      Experience the allure of Italian glass and elevate your space.
    </p>
    <Link to='/Shop?=Glass' onClick={null} className='collections-link'>Shop this collection {'>'}</Link>
    </div>
  </div>
</div>
  return (
    <div className='collections-container'>
    <div className="container-fluid">
      <h2 className='text-center display-2'>Shop Collections</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 p-1">
            <div className='align-items-center collection-item-container1' style={{ 
              backgroundImage: 'url(' + glass1 + ')', 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              transition: 'background-size 0.3s ease-in-out !important' 
            }}>
              <div className='collection-info-container'>
                <h3 className='collections-header display-5'>Italian Glass</h3>
                <p className='collections-subtext text-dark col-12'>
                  Experience the allure of Italian glass and elevate your space.
                </p>
                <Link to='/Shop?=Glass' onClick={null} className='collections-link'>
                  Shop this collection {'>'}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-1">
            <div className='align-items-center collection-item-container2' style={{ 
              backgroundImage: 'url(' + poster1 + ')', 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              transition: 'background-size 0.3s ease-in-out !important' 
            }}>
              <div className='collection-info-container'>
                <h3 className='collections-header display-5'>Wall Art</h3>
                <p className='collections-subtext text-dark col-8'>
                  Shop from a wide variety of vintage posters
                </p>
                <Link to='/Shop?=Decor' onClick={null} className='collections-link'>
                  Shop this collection {'>'}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 p-1">
            <div className='align-items-center collection-item-container3' style={{ 
              backgroundImage: 'url(' + rug1 + ')', 
              backgroundPosition: 'center', 
              backgroundSize: 'cover', 
              backgroundRepeat: 'no-repeat', 
              transition: 'background-size 0.3s ease-in-out !important' 
            }}>
              <div className='collection-info-container'>
                <h3 className='collections-header display-5'>Runners</h3>
                <p className='collections-subtext text-dark col-8'>
                  Find that statement piece you've been looking for.
                </p>
                <Link to='/Shop?=Runners' onClick={null} className='collections-link'>
                  Shop this collection {'>'}
                </Link>
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