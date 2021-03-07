import Navigation from './../Navigation/Navigation';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import SideOptionsMobile from './../Main/SideOptionsMobile/SideOptionsMobile';

function App() {

const toggleFilter = useSelector(state => state.toggleFilter)

  return (
    <div className="App">
    {toggleFilter ? <SideOptionsMobile/> :
      <>
      <Navigation/>
      <Main />
      <Footer />
      </>
    }
    </div>
  );
}

export default App;
