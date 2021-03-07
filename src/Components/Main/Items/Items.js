import {useEffect, useState} from 'react';
import './Items.css';
import Item from './Item/Item';

const Items = (props) => {


  return(
    <div className="Items">
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    </div>
  )

}

export default Items;
