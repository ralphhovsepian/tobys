import { combineReducers } from 'redux';
import {toggleNavBar, toggleFilterOption, logLoader, toggleError} from './mainReducer';
import {inputChanger} from './logReducer';

const rootReducer = combineReducers({
  toggleNavBar: toggleNavBar,
  toggleLoader: logLoader,
  toggleFilter: toggleFilterOption,
  logReducer: inputChanger,
  toggleError: toggleError
})

export default  rootReducer;
