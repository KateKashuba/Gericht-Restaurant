import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  

  <div className='app__bg '>
    <div className= 'app__wrapper app__footer app__bg container section__padding'>
      <Newsletter />

      <div className='app__footer-links' id='contact'>

        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230<br/>+1 212-555-1230</p>
        </div>

        <div className='app__footer-links_logo'>
          <h1 className='headtext__cormorant'>Gerícht</h1>
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:<br/>
08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:<br/>07:00am -11:00 pm</p>
        </div>

      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
