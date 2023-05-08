//rafce
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-25'>
                    <h3>About us</h3>
                    <h1>Welcome to the Pizza Hub</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                    <div className='about__btn'>
                        <a href='' className='btn btn-smart'>Read More</a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about__img'>
                        < img src="/img/pizza.jpg" alt='Pizza'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About