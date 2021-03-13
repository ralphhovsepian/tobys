import './Items.css';
import Item from './Item/Item';
import { useSelector } from 'react-redux';
import empty from './../../Assets/empty.svg';
import { useParams } from 'react-router-dom';

const Items = (props) => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const searchValue = useSelector((state) => state.search);

  const priceFrom = useSelector((state) => state.filter.price.from);
  const priceTo = useSelector((state) => state.filter.price.to);
  const color = useSelector((state) => state.filter.color);
  const type = useSelector((state) => state.filter.type);

  let filteredProducts = products;

  filteredProducts = filteredProducts.filter(
    (v) =>
      v.name.includes(searchValue) &&
      v.price >= priceFrom &&
      v.price <= priceTo &&
      color.some((r) => v.colors.includes(r)) &&
      type.some((r) => v.type.includes(r))
  );

  if (id != null) {
    filteredProducts = filteredProducts.filter((v) => v.gender == id);
  }

  return (
    <div className='Items'>
      {filteredProducts.map((product) => {
        return (
          <Item
            colors={product.colors}
            description={product.description}
            gender={product.gender}
            name={product.name}
            price={product.price}
            url={product.url}
            sizes={product.sizes}
            type={product.type}
          />
        );
      })}
      {filteredProducts.length === 0 && <img src={empty} alt='' />}
    </div>
  );
};

export default Items;
