export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = (value) => {
  return {
    type: GET_PRODUCTS,
    payload: value
  }
}

export const productsGetter = (state = [], action) => {
  switch(action.type) {
    case GET_PRODUCTS: {
      return action.payload;
      break;
    }
    default: return state;
  }
}
