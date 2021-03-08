import axios from 'axios';
import store from './../redux/store';
import {logLoad, errorToggle} from './../redux/reducers/mainReducer';
import {getProducts} from './../redux/reducers/productReducer';
import {setUser, unsetUser, getUser} from './localStorage';

export const create = async (username, password) => {
  store.dispatch(logLoad());
  if(username.length < 6 || password.length < 6) {
    store.dispatch(errorToggle(true));
    store.dispatch(logLoad());
  } else {
  let user = JSON.stringify({
    username: username,
    password: password
  })
  const response = await axios.post('http://localhost:3001/create', user, {
    headers: {
   'Content-Type': 'application/json',
   }
  });
  if(response.data) {
    login(username, password)
    store.dispatch(errorToggle(false));
  } else {
    store.dispatch(errorToggle(true));
  }
  store.dispatch(logLoad());
  }
}


export const login = async (username, password) => {
  store.dispatch(logLoad());

  let user = JSON.stringify({
    username: username,
    password: password
  })

  const response = await axios.post('http://localhost:3001/login', user, {
    headers: {
   'Content-Type': 'application/json',
   }
  });

  if(response.data) {
    setUser(response.data)
    store.dispatch(errorToggle(false));
    window.location.href = '/';
  } else {
    store.dispatch(errorToggle(true));
  }

  store.dispatch(logLoad());
}


export const logout = () => {
  unsetUser();
  window.location.href = '/';
}

export const getProductsInfo = async () => {
  const response = await axios.get('http://localhost:3001/');

  if(response.data) {
      store.dispatch(getProducts(response.data));
  }
}
