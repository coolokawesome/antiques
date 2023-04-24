import React from 'react'
import { Link, NavLink, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import glassware from '../imgs/glassware.jpg'
import arearugs from '../imgs/arearugs.webp'
import furniture from '../imgs/furniture.jpeg'
import runners from '../imgs/runner.png'
import walldeco from '../imgs/walldeco.jpg'
import objects from '../imgs/objects.jpeg'

import { useState } from 'react'
function SplashContainer() {
const [backgroundImage, setBackgroundImage] = useState(glassware)

const handleClick = (image) => {
    setBackgroundImage(image);
}

  return (
    <div className='splash-container my-auto'>
    <div className='row splash-curtain-row' id='splashcurtain' style={{
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
      <div className='col-6 col-md-4 col-lg-2 curtain-col mx-0 px-0'>
        {backgroundImage === glassware ? <h1 className='main-header display-1'>
          {/* Timeless Elegance. */}
          </h1> : <></>}
        <button
            onClick={() => handleClick(glassware, 'glassware')}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == glassware ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == glassware ? <div className='container row'>
                                                <h3 className='curtain-heading'>GLASS</h3>
                                                <div className='col-12 curtain-description text-start'>Shop Murano, Salviati and more</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Glass'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                : <p className='curtain-subtext'>Glassware</p>}
        </button>
      </div>
      <div className='col-6 col-md-4 col-lg-2  curtain-col mx-0 px-0'>
      <button
            onClick={() => handleClick(arearugs)}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == arearugs ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == arearugs ? <div className='container row'>
                                                <h3 className='curtain-heading'>AREA RUGS</h3>
                                                <div className='col-12 curtain-description text-start'>Find that statement piece</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Rugs'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                : <p className='curtain-subtext'>Area Rugs</p>}
        </button>
      </div>
      <div className='col-6 col-md-4 col-lg-2  curtain-col mx-0 px-0'>
      <button
            onClick={() => handleClick(runners)}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == runners ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == runners ? <div className='container row'>
                                                <h3 className='curtain-heading'>RUNNERS</h3>
                                                <div className='col-12 curtain-description text-start'>Great for any corridor</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Runners'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                :  <p className='curtain-subtext'>Runners</p>}
        </button>
      </div>
      <div className='col-6 col-md-4 col-lg-2  curtain-col mx-0 px-0'>
      <button
            onClick={() => handleClick(walldeco)}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == walldeco ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == walldeco ? <div className='container row'>
                                                <h3 className='curtain-heading'>DECORATIVE</h3>
                                                <div className='col-12 curtain-description text-start'>Vintage and Antique decor</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Decor'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                :  <p className='curtain-subtext'>Wall Decor</p>}
        </button>
      </div>
      <div className='col-6 col-md-4 col-lg-2  curtain-col mx-0 px-0'>
      <button
            onClick={() => handleClick(furniture)}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == furniture ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == furniture ? <div className='container row'>
                                                <h3 className='curtain-heading'>FURNITURE</h3>
                                                <div className='col-12 curtain-description text-start'>Chairs and tables</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Furniture'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                :  <p className='curtain-subtext'>Furniture</p>}
        </button>
      </div>
      <div className='col-6 col-md-4 col-lg-2  curtain-col mx-0 px-0'>
      <button
            onClick={() => handleClick(objects)}
            className={`col-12 d-flex curtain-btn ${
              backgroundImage == objects ? 'selected-btn align-items-center justify-content-center' : 'align-items-end justify-content-center'
            }`}
          >
            {backgroundImage == objects ? <div className='container row'>
                                                <h3 className='curtain-heading'>OBJECTS</h3>
                                                <div className='col-12 curtain-description text-start'>Vintage objects for that mantle</div>
                                                <div className='col-12 text-start mt-3'> 
                                                    <Link className='link' to='/Shop?=Objects'>Shop {'>'}</Link>
                                                    </div>
                                                </div> 
                                                :  <p className='curtain-subtext'>Objects</p>}
        </button>
      </div>
    </div>
  </div>
  )
}

export default SplashContainer