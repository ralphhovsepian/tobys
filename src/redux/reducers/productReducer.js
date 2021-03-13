export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_FROM_PRICE = 'FILTER_FROM_PRICE';
export const FILTER_TO_PRICE = 'FILTER_TO_PRICE';
export const FILTER_COLOR = 'FILTER_COLOR';

export const getProducts = (value) => {
  return {
    type: GET_PRODUCTS,
    payload: value,
  };
};

export const searchItem = (value) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: value,
  };
};

export const filterType = (value) => {
  return {
    type: FILTER_TYPE,
    payload: value,
  };
};

export const filterFromPrice = (value) => {
  return {
    type: FILTER_FROM_PRICE,
    payload: value,
  };
};

export const filterToPrice = (value) => {
  return {
    type: FILTER_TO_PRICE,
    payload: value,
  };
};

export const filterColor = (value) => {
  return {
    type: FILTER_COLOR,
    payload: value,
  };
};

export const filterItems = (
  state = {
    type: ['sneakers', 'sport', 'everyday', 'casual'],
    price: { from: 0, to: 200 },
    color: ['blue', 'red', 'green', 'black', 'yellow'],
    gender: 'men',
  },
  action
) => {
  switch (action.type) {
    case FILTER_TYPE: {
      let filtered = state;

      if (filtered.type.includes(action.payload)) {
        filtered = filtered.type.filter((v) => v !== action.payload);
      } else {
        filtered = [...filtered.type, action.payload];
      }

      return {
        ...state,
        type: filtered,
      };
    }
    case FILTER_COLOR: {
      let filtered = state;

      if (filtered.color.includes(action.payload)) {
        filtered = filtered.color.filter((v) => v !== action.payload);
      } else {
        filtered = [...filtered.color, action.payload];
      }

      return {
        ...state,
        color: filtered,
      };
    }
    case FILTER_FROM_PRICE: {
      return {
        ...state,
        price: {
          ...state.price,
          from: action.payload,
        },
      };
    }
    case FILTER_TO_PRICE: {
      return {
        ...state,
        price: {
          ...state.price,
          to: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export const productsGetter = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};

export const productSearcher = (state = '', action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};
