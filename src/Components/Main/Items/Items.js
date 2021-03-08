import {useEffect, useState} from 'react';
import './Items.css';
import Item from './Item/Item';
import {useSelector} from 'react-redux';

const Items = (props) => {

const products = useSelector(state => state.products);

  return(
    <div className="Items">
    {
      products.map((product) => {
        return(
          <Item
            colors={product.colors}
            description={product.description}
            gender={product.gender}
            name={product.name}
            price={product.price}
            url={product.url}
          />
        )
      })
    }
    </div>
  )

}

export default Items;
