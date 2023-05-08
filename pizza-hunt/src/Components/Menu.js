import React from 'react'

const Menu = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
                
                <div className='col-6'>
                    <div className='about__img'>
                        < img src="/img/menu.jpg" alt='Pizza'/>
                    </div>
                </div>
                <div className='col-6 p-25'>
                    <h3>The Pizza Menu</h3>
                    <h1>VEGGIE PIZZA WITH PEPPERS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <div className='about__btn'>
                        <a href='' className='btn btn-smart'>View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu