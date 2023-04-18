import React from 'react'

function Footer() {
  return (
    <div className='footer-container mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='footer-title'>
                        FOLLOW
                    </h3>
                    <p className='footer-text'>
                        <a>@CHAMBERYANTIQUES</a>
                    </p>
                </div>
                <div className='col-6'>
                    <div className='row text-end'>
                        <div className='col-12'>
                            <a>SHOP</a>
                        </div>
                        <div className='col-12'>
                            <a>ABOUT</a>
                        </div>
                        <div className='col-12'>
                            <a>BLOG</a>
                        </div>
                        <div className='col-12'>
                            <a>CONTACT</a>
                        </div>
                        <div className='col-12'>
                            <a >
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 text-center'>
                <h1 className='display-1 footer-title'>Chambéry Antiques</h1>
            </div>
            <div className='col-6 offset-3 d-flex justify-content-center mb-1'>
                <a className='text-decoration-none px-2 footer-link'>PRIVACY</a>
                <a className='text-decoration-none px-2 footer-link'>T + C</a>
            </div>
            <div className='text-center pb-5'>
                <a href='https://syrussamson.ca' className='designtext text-decoration-none' target='_blank'>site created by syrussamson.ca</a>
            </div>
        </div>
    </div>
  )
}

export default Footer