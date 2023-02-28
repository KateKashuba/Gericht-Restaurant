import React from 'react';
import PropTypes from 'prop-types';

import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant' style={{marginBottom: '0.5rem'}}>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired
};

export default SubHeading;
