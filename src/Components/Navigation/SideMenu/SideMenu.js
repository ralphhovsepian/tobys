import {useEffect, useState} from 'react';
import './SideMenu.css';
import close from './../../Assets/close.svg';
import leftArrow from './../../Assets/left-arrow.svg';

const SideMenu = (props) => {


  return(
    <div className="side-menu">
      <div className="close">
        <img src={close}/>
      </div>
      <ul className="items">
        <div className="item">
          <li>Men</li>
          <img src={leftArrow}/>
        </div>
        <div className="item">
          <li>Women</li>
          <img src={leftArrow}/>
        </div>

        <div className="item">
        <li style={{color: '#3AB795'}}>Special Offers</li>
          <img src={leftArrow}/>
        </div>
      </ul>
    </div>
  )

}

export default SideMenu;
