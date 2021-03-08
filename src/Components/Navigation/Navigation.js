import {useEffect, useState} from 'react';
import './navigation.css';

import {Link} from 'react-router-dom';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {getUser} from './../../functions/localStorage.js';
import {logout} from './../../functions/log.js';
import MobileMenu from './MobileMenu/MobileMenu';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {toggleNav} from './../../redux/reducers/mainReducer.js';


const Navigation = (props) => {

  const toggleNavBar = useSelector(state => state.toggleNavBar);
  const userInfo = useSelector(state => state.userInfo);
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
      <span><FontAwesomeIcon icon={faShoppingCart} size="1x" color="#292929"/></span>
        {
          userInfo ?
          <span onClick={() => logout()}><FontAwesomeIcon icon={faSignOutAlt} size="1x" color="#292929"/></span>
          :
          <span><Link to="/login"><FontAwesomeIcon icon={faUser} size="1x" color="#292929"/></Link></span>
        }
      </div>
      </div>

    </nav>
    <nav className="mobile-navigation">
      <div className="left">
        <h1 className="header">Toby's</h1>
      </div>

      <div className="right">
        <div className="items">
          <span><FontAwesomeIcon icon={faShoppingCart} size="1x" color="#292929"/></span>
          {
            userInfo ?
            <span onClick={() => logout()}><FontAwesomeIcon icon={faSignOutAlt} size="1x" color="#292929"/></span>
            :
            <span><Link to="/login"><FontAwesomeIcon icon={faUser} size="1x" color="#292929"/></Link></span>
          }
          <span onClick={() => dispatch(toggleNav())}>  <span><FontAwesomeIcon icon={faBars} size="1x" color="#292929"/></span></span>
        </div>
      </div>
    </nav>

    {toggleNavBar && <MobileMenu/>}

    </div>
  )

}

export default Navigation;
