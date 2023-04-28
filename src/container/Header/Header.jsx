import React from 'react';
import { SubHeading } from '../../components';
import { Carousel } from '../../components';
import { images } from '../../constants';
import './Header.css';

const slides = [
  { id: 1, name: images.slide1},
  { id: 2, name: images.slide2},
  { id: 3, name: images.slide3},
  { id: 4, name: images.gallery02},
];

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
        <Carousel autoSlide={true}>{slides.map((slide) => (
          <img key={slide.id} src={slide.name} alt="header img" />
        ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default Header;
