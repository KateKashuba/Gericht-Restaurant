import React, { Children, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Carousel.css';

const Carousel = ({
  children: slides,
  autoSlide,
  autoSlideInterval,
}) => {
  const [curr, setCurr] = useState(0);

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [])

  const slideItem = document.querySelector('.slide__item');
  const handleTransitionEnd = () => {
    slideItem.appendChild(slideItem.firstElementChild);
  }

  return (
    <>
    <div className='slide-content'>
      <div className='slide'>
        <div
          className='slide__item'
          style={{transform: `translateX(-${curr * 100}%)`}}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides}
        </div>
      </div>
    </div>

    <div className='slide__buttons'>
      <div className='slide__buttons-element'>
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            className={classNames('slide__button-item', { active: i === curr})}
            onClick={() => setCurr(i)}
          >
            0{i+1}
          </div>
        ))}
      </div>
  </div>
  </>
  )
};

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

Carousel.defaultProps = {
  autoSlide: false,
  autoSlideInterval: 3000,
}


export default Carousel;
