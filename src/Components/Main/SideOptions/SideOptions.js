import {useEffect, useState} from 'react';
import './SideOptions.css';
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from 'react-redux';
import {toggleFilter} from './../../../redux/reducers/mainReducer.js';
const SideOptions = (props) => {

const dispatch = useDispatch();

  return(
    <>
    <div className="SideOptionsDiv">

    <div className="standard">
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
        <label for="from">From</label><input type="number" id="from" placeholder="From" name="from" min="0" max="11"/>
        <label for="to">To</label><input type="number" id="to" placeholder="To" name="to" min="0" max="11"/>
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
    <div className="mobile" onClick={() => dispatch(toggleFilter())}>
      <span><FontAwesomeIcon icon={faFilter} size="lg" color="white"/></span>
    </div>
    </>
  )

}

export default SideOptions;
