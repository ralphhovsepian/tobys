import './Signup.css';
import shop from './../Assets/shop.svg';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange, passwordChange } from './../../redux/reducers/logReducer';
import { Link } from 'react-router-dom';
import Loader from './../Loader/Loader';
import { create } from './../../functions/log';

const Signup = () => {
  const user = useSelector((state) => state.logReducer);
  const loader = useSelector((state) => state.toggleLoader);
  const error = useSelector((state) => state.toggleError);
  const dispatch = useDispatch();

  return (
    <div className='Container'>
      <div className='left'>
        <div className='SignupDiv'>
          <h3>Create an account:</h3>
          <label htmlFor='email'>Username:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={user.username}
            onChange={(e) => dispatch(inputChange(e.target.value))}
          />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={(e) => dispatch(passwordChange(e.target.value))}
          />
          {error && (
            <p className='Error'>
              The username/password must be at least 6 characters
            </p>
          )}
          {loader && <Loader />}
          {!loader && (
            <input
              type='submit'
              value='Create'
              className='LoginBtn'
              onClick={() => create(user.username, user.password)}
            />
          )}
          <p>
            Already have an account?{' '}
            <span>
              <Link to='/login'>Login now!</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='right'>
        <img src={shop} alt='' />
        <h3>Explore thousands of products!</h3>
        <p>
          Shop your favorite shoes and get them delivered within 2 days! Sign up
          to start shopping.
        </p>
      </div>
    </div>
  );
};
export default Signup;
