import {useEffect, useState} from 'react';
import './SideOptionsMobile.css';

const SideOptionsMobile = (props) => {


  return(
    <div className="SideOptionsMobileDiv">

    <h1>Filter</h1>

    <div className="Types">
    <div className="Type"><h4>Sneakers</h4></div>
    <div className="Type"><h4>Sports</h4></div>
    <div className="Type"><h4>Everyday</h4></div>
    <div className="Type"><h4>Casual</h4></div>
    </div>

    <div className="PriceRange">
      <h1>Price Range</h1>
      <input type="number" placeholder="From"/>
      <input type="number" placeholder="To"/>
    </div>

    <div className="ColorContainer">
      <h1>Colors</h1>
      <div className="ColorPicker">
        <div className="color blue"></div>
        <div className="color red"></div>
        <div className="color green"></div>
        <div className="color black"></div>
        <div className="color orange"></div>
      </div>
    </div>

    <button>Apply</button>
    </div>
  )

}

export default SideOptionsMobile;
