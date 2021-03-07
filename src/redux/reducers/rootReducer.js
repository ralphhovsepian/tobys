import { combineReducers } from 'redux';
import {toggleNavBar, toggleFilterOption} from './mainReducer';

const rootReducer = combineReducers({
  toggleNavBar: toggleNavBar,
  toggleFilter: toggleFilterOption
})

export default  rootReducer;
