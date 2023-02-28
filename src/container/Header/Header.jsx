import React from 'react';
import { SubHeading } from '../../components';
import { Carousel } from '../../components';
import { images } from '../../constants';
import './Header.css';

const slides = [images.slide1, images.slide1, images.slide1];

const Header = () => (
  <div className='app__header' id='home'>
    <div className='container app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new Flavour"/>
        <h1 className='app__header-h1'>The key to Fine dining</h1>
        <p className='p__opensans app__header-p'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <Carousel {...slides.map((s) => (
          <img src={images.s} alt="header img" />
        ))}/>
        {/* <img src={images.welcome} alt="header img" /> */}
      </div>
    </div>
  </div>
);

export default Header;
