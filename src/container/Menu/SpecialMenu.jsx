import React from 'react';
import { SubHeading, MenuItem } from '../../components';

import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center' id='menu'>
    <div className='container app__wrapper section__padding'>

      <div className='app__specialMenu-content'>
        <div className='app__specialMenu-title'>
          <SubHeading title="Menu that fits you palatte"/>
          <h1 className='headtext__cormorant'>Today’s Special</h1>
        </div>

        <div className='app__specialMenu-menu'>

          <div className='app__specialMenu-menu_wine flex__center'>
            <p className='app__specialMenu-menu-header'>Wine & Beer</p>
            <div className='app__specialMenu-menu-items'>
              {data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags} />
              ))}
            </div>
          </div>

          <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt="menu img" />
          </div>

          <div className='app__specialMenu-menu_coctails flex__center'>
              <p className='app__specialMenu-menu-header'>Cocktails</p>
              <div className='app__specialMenu-menu-items'>
                {data.cocktails.map((coctail, index) => (
                  <MenuItem key={coctail.title + index} price={coctail.price} title={coctail.title} tags={coctail.tags} />
                ))}
              </div>
          </div>
        </div>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
