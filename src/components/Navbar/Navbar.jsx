import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => (
  <nav className='app_navbar'>

    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>

    <ul className='app_navbar-links'>
      <li className='p__opensans'>Home</li>
      <li className='p__opensans'>About</li>
      <li className='p__opensans'>Menu</li>
      <li className='p__opensans'>Awards</li>
      <li className='p__opensans'>Contact</li>
    </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {}} />

      <div className='app_navbar-smallscreen_ovelay flex__center slide-bottom '>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => {}} />
      </div>

      <ul className='app_navbar-smallscreen-links'>
        <li className='p__opensans'>Home</li>
        <li className='p__opensans'>About</li>
        <li className='p__opensans'>Menu</li>
        <li className='p__opensans'>Awards</li>
        <li className='p__opensans'>Contact</li>
    </ul>
    </div>
  </nav>
);

export default Navbar;
