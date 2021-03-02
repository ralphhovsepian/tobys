import {useEffect, useState} from 'react';
import './SideOptions.css';

const SideOptions = (props) => {


  return(
    <div className="SideOptionsDiv">

    <div>
      <h2 className="Title">Filter</h2>
      <div className="Types">
          <p>Sneakers</p>
          <p>Sport</p>
          <p>Everyday</p>
          <p>Casual</p>
      </div>
      </div>

      <div>
        <h2 className="Title">Price Range</h2>
        <div className="range">
        <label for="from">From</label><input type="range" id="from" name="from" min="0" max="11"/>
        <label for="to">To</label><input type="range" id="to" name="to" min="0" max="11"/>
        </div>
        </div>


        <div>
          <h2 className="Title">Color</h2>
          <div className="ColorPicker">
            <div className="color blue"></div>
            <div className="color red"></div>
            <div className="color green"></div>
            <div className="color black"></div>
            <div className="color orange"></div>
          </div>
          </div>

    </div>
  )

}

export default SideOptions;
