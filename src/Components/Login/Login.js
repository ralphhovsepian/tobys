import {useState, useEffect} from 'react';
import './Login.css';
import shop from './../Assets/shop.svg';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Loader from './../Loader/Loader';
import {inputChange, passwordChange} from './../../redux/reducers/logReducer';
import {login} from './../../functions/log';

const Login = () => {

const user = useSelector(state => state.logReducer);
const loader = useSelector(state => state.toggleLoader);
const error = useSelector(state => state.toggleError);
const dispatch = useDispatch();

  return(
    <div className="ContainerLogin">
      <div className="left">

        <div className="LoginDiv">
          <h3>Login</h3>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" value={user.username} onChange={(e) => dispatch(inputChange(e.target.value))}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={user.password} onChange={(e) => dispatch(passwordChange(e.target.value))}/>
          {error && <p className="Error">Wrong username/password</p>}
          {loader && <Loader/>}
          {!loader &&  <input type="submit" value="Login" className="LoginBtn" onClick={() => login(user.username, user.password)}/>}
          <p>New user? <span><Link to="/create">Sign up now!</Link></span></p>
          </div>
      </div>
      <div className="right">
        <img src={shop}/>
        <h3>Explore thousands of products!</h3>
        <p>Shop your favorite shoes and get them delivered within 2 days! Sign up to start shopping.</p>
      </div>
    </div>
  )
}
export default Login;
