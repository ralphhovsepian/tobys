import { combineReducers } from 'redux';
import {toggleNavBar, toggleFilterOption, logLoader, toggleError} from './mainReducer';
import {inputChanger} from './logReducer';
import {userInfoSetter} from './infoReducer';
import {productsGetter} from './productReducer';

const rootReducer = combineReducers({
  toggleNavBar: toggleNavBar,
  toggleLoader: logLoader,
  toggleFilter: toggleFilterOption,
  logReducer: inputChanger,
  toggleError: toggleError,
  userInfo: userInfoSetter,
  products: productsGetter
})

export default  rootReducer;
