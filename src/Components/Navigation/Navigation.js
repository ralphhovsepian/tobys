import {useEffect, useState} from 'react';
import './navigation.css';
import user from './../Assets/user.svg';
import cart from './../Assets/cart.svg';
import menu from './../Assets/menu.svg';

import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileMenu from './MobileMenu/MobileMenu';
import SideMenu from './SideMenu/SideMenu';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {toggleNav} from './../../redux/reducers/mainReducer.js';


const Navigation = (props) => {

  const toggleNavBar = useSelector(state => state.toggleNavBar);
  const dispatch = useDispatch();



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
      <span><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#292929"/></span>
        <span><FontAwesomeIcon icon={faUser} size="2x" color="#292929"/></span>
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
          <span onClick={() => dispatch(toggleNav())}><img src={menu}/></span>
        </div>
      </div>
    </nav>

    {toggleNavBar && <MobileMenu/>}

    </div>
  )

}

export default Navigation;
