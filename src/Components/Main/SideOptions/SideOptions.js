import './SideOptions.css';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from './../../../redux/reducers/mainReducer.js';
import {
  filterType,
  filterFromPrice,
  filterToPrice,
  filterColor,
} from './../../../redux/reducers/productReducer.js';

const SideOptions = (props) => {
  const priceFrom = useSelector((state) => state.filter.price.from);
  const priceTo = useSelector((state) => state.filter.price.to);
  const color = useSelector((state) => state.filter.color);
  const typesFilter = useSelector((state) => state.filter.type);
  const dispatch = useDispatch();
  const types = ['sneakers', 'sport', 'everyday', 'casual'];
  const colorList = ['blue', 'red', 'green', 'black', 'yellow'];

  return (
    <>
      <div className='SideOptionsDiv'>
        <div className='standard'>
          <h2 className='Title'>Filter</h2>
          <div className='Types'>
            {types.map((type) => {
              return (
                <p
                  style={{
                    backgroundColor: typesFilter.includes(type)
                      ? 'black'
                      : 'unset',
                    color: typesFilter.includes(type) ? '#fff' : '#1b1b1b',
                    padding: typesFilter.includes(type) ? 5 : 0,
                  }}
                  onClick={() => dispatch(filterType(type))}
                >
                  {type}
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className='Title'>Price Range</h2>
          <div className='range'>
            <label htmlFor='from'>From</label>
            <input
              onChange={(e) => dispatch(filterFromPrice(e.target.value))}
              type='number'
              id='from'
              placeholder='From'
              name='from'
              min='0'
              max={priceTo}
            />
            <label htmlFor='to'>To</label>
            <input
              onChange={(e) => dispatch(filterToPrice(e.target.value))}
              type='number'
              id='to'
              placeholder='To'
              name='to'
              min={priceFrom}
            />
          </div>
        </div>

        <div>
          <h2 className='Title'>Color</h2>
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
      </div>
      <div className='mobile' onClick={() => dispatch(toggleFilter())}>
        <span>
          <FontAwesomeIcon icon={faFilter} size='lg' color='white' />
        </span>
      </div>
    </>
  );
};

export default SideOptions;
