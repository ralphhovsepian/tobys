import {useEffect, useState} from 'react';
import './Item.css';
import shoe1 from './../../../Assets/shoe1.png';

const Item = (props) => {


  return(
    <div className="Item">
    <div className="content">
        <img src={props.url[0]}/>

    </div>
      <div className="contentTitle">
        <h5>{props.name.substring(0,15)}...</h5>
        <h5>${props.price}</h5>
      </div>
    </div>
  )

}

export default Item;
