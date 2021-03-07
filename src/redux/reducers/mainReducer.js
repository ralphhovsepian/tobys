export const TOGGLE_NAV = 'TOGGLE_NAV';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const toggleNav = () => {
  return {
    type: TOGGLE_NAV
  }
}

export const toggleFilter = () => {
  return {
    type: TOGGLE_FILTER
  }
}


export function toggleNavBar(state = false, action) {
    switch(action.type) {
        case TOGGLE_NAV: {
          let newState = !state
          return newState;
          break;
        }
        default: return state
    }
}

export function toggleFilterOption(state = false, action) {
  switch(action.type) {
    case TOGGLE_FILTER: {
      let newState = !state
      return newState;
      break;
    }
    default: return state;
  }
}
