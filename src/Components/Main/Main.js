import './Main.css';
import SideOptions from './SideOptions/SideOptions';
import Items from './Items/Items';

const Main = (props) => {
  return (
    <div className='Main'>
      <SideOptions />
      <Items />
    </div>
  );
};

export default Main;
