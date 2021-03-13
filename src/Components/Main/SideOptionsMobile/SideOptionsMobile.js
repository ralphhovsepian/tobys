import './SideOptionsMobile.css';
import {
  filterType,
  filterFromPrice,
  filterToPrice,
  filterColor,
} from './../../../redux/reducers/productReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from './../../../redux/reducers/mainReducer.js';

const SideOptionsMobile = (props) => {
  const priceFrom = useSelector((state) => state.filter.price.from);
  const priceTo = useSelector((state) => state.filter.price.to);
  const color = useSelector((state) => state.filter.color);
  const typesFilter = useSelector((state) => state.filter.type);
  const dispatch = useDispatch();
  const types = ['sneakers', 'sport', 'everyday', 'casual'];
  const colorList = ['blue', 'red', 'green', 'black', 'yellow'];

  return (
    <div className='SideOptionsMobileDiv'>
      <h1>Filter</h1>

      <div className='Types'>
        {types.map((type) => {
          return (
            <div
              className='Type'
              onClick={() => dispatch(filterType(type))}
              style={{
                backgroundColor: typesFilter.includes(type)
                  ? '#292929'
                  : 'unset',
                color: typesFilter.includes(type) ? '#fff' : '#1b1b1b',
                padding: typesFilter.includes(type) ? 5 : 0,
              }}
            >
              <h4>{type}</h4>
            </div>
          );
        })}
      </div>

      <div className='PriceRange'>
        <h1>Price Range</h1>
        <input
          value={priceFrom}
          type='number'
          placeholder='From'
          onChange={(e) => dispatch(filterFromPrice(e.target.value))}
        />
        <input
          value={priceTo}
          type='number'
          placeholder='To'
          onChange={(e) => dispatch(filterToPrice(e.target.value))}
        />
      </div>

      <div className='ColorContainer'>
        <h1>Colors</h1>
        <div className='ColorPicker'>
          {colorList.map((clr) => {
            return (
              <div
                className={`color ${clr}`}
                onClick={() => dispatch(filterColor(clr))}
                style={{
                  border: color.includes(clr) ? '1px solid black' : 'unset',
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <button onClick={() => dispatch(toggleFilter())}>Apply</button>
    </div>
  );
};

export default SideOptionsMobile;
