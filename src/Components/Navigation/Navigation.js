import {useEffect, useState} from 'react';
import './navigation.css';
import user from './../Assets/user.svg';
import cart from './../Assets/cart.svg';
import menu from './../Assets/menu.svg';

import MobileMenu from './MobileMenu/MobileMenu';
import SideMenu from './SideMenu/SideMenu';

const Navigation = (props) => {


  return(
    <div>
    <nav className="navigation">

      <div className="left">
      <h1 className="header">Toby's</h1>
      <ul className="items">
        <li>Men</li>
        <li>Women</li>
        <li style={{color: '#3AB795'}}>Special Offers</li>
      </ul>
      </div>

      <div className="right">
      <div className="items">
      <input type="text" value="" placeholder="Search" className="search"/>
        <span><img src={cart}/></span>
        <span><img src={user}/></span>
      </div>
      </div>

    </nav>
    <nav className="mobile-navigation">
      <div className="left">
        <h1 className="header">Toby's</h1>
      </div>

      <div className="right">
        <div className="items">
          <span><img src={cart}/></span>
          <span><img src={user}/></span>
          <span><img src={menu}/></span>
        </div>
      </div>
    </nav>



    </div>
  )

}

export default Navigation;
