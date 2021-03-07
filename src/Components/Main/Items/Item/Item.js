import {useEffect, useState} from 'react';
import './Item.css';
import shoe1 from './../../../Assets/shoe1.png';
import cart from './../../../Assets/cart.svg';

const Item = (props) => {


  return(
    <div className="Item">
    <div className="content">
        <img src={shoe1}/>
      
    </div>
      <div className="contentTitle">
        <h5>Product name</h5>
        <h5>$250</h5>
      </div>
    </div>
  )

}

export default Item;
