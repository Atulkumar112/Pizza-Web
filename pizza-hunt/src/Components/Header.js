import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="banner">
        <Navbar/>
        <div className="banner__content">
            <div className="container">
                <div className="banner__text">
                    <h3>Pizza Delivery By</h3>
                    <h1>Pizza Hub</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <div className='banner__btn'>
                        <a href='' className='btn btn-smart'>Order Now</a>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
};

export default Header;