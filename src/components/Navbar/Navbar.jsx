import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact Us</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Registration</a>
        <div />
        <a href="#" className='p__opensans'>Book Table</a>
      </div>

      <a href="#smallmenu" className='app__navbar-menu'>
        <GiHamburgerMenu color='#fff' fontSize={27}/>
      </a>
    </nav>

    <div className='app__navbar-smallscreen'>
      <div className='app__navbar-smallscreen_overlay flex__center' id='smallmenu'>

        <a href="#" className='overlay__close'>
          <MdOutlineRestaurant fontSize={27}/>
        </a>

        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#menu">Menu</a></li>
          <li className='p__opensans'><a href="#awards">Awards</a></li>
          <li className='p__opensans'><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default Navbar;
