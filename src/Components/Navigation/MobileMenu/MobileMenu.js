import React from 'react';
import './MobileMenu.css';

const MobileMenu = (props) => {
  return (
    <div className='MobileMenuDiv'>
      <input type='text' value='' placeholder='Search' className='search' />
      <ul className='items'>
        <li>Men</li>
        <li>Women</li>
        <li style={{ color: '#3AB795' }}>Special Offers</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
