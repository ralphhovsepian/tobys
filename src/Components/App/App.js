import {useEffect} from 'react';
import Navigation from './../Navigation/Navigation';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './../Login/Login';
import Signup from './../Signup/Signup';
import SideOptionsMobile from './../Main/SideOptionsMobile/SideOptionsMobile';
import {getUser} from './../../functions/localStorage';
import {getProductsInfo} from './../../functions/log';
import {userInfo} from './../../redux/reducers/infoReducer';

function App() {

const toggleFilter = useSelector(state => state.toggleFilter)
const userInformation = useSelector(state => state.userInfo)
const dispatch = useDispatch();

console.log(userInformation);

useEffect(() => {
  const user = getUser();
  if(user) {
    dispatch(userInfo(user))
  }
  getProductsInfo()
}, [])

  return (
      <Router>
    <div className="App">
    <Switch>
    {toggleFilter ? <SideOptionsMobile/> :
      <>
      <Route exact path="/">
        <>
          <Navigation/>
          <Main />
          <Footer />
        </>
      </Route>

      <Route exact path="/login">
      {
        userInformation ? <Redirect to="/"/>:<Login/>
      }
      </Route>


      <Route exact path="/create">
      {
        userInformation ? <Redirect to="/"/>:<Signup/>
      }

      </Route>

      </>
    }
    </Switch>
    </div>
    </Router>
  );
}

export default App;
