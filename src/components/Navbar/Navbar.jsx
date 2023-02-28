import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurant } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  // const overlay = document.querySelector('.app__navbar-smallscreen_overlay');

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
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      <GiHamburgerMenu className='app__navbar-menu' color='#fff' fontSize={27} onClick={() => {document.querySelector('.app__navbar-smallscreen_overlay').style.transform = 'translateY(0)';}} />
    </nav>

    <div className='app__navbar-smallscreen'>
      <div className='app__navbar-smallscreen_overlay flex__center'>

        <MdOutlineRestaurant fontSize={27} className='overlay__close' onClick={() => {document.querySelector('.app__navbar-smallscreen_overlay').style.transform = 'translateY(-100%)';}} />

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
