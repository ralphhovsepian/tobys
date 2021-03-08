export const TOGGLE_NAV = 'TOGGLE_NAV';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const LOG_LOADER = "LOG_LOADER";
export const ERROR_TOGGLE = "ERROR_TOGGLE";

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

export const logLoad = () => {
  return {
    type: LOG_LOADER,
  }
}

export const errorToggle = (value) => {
  return {
    type: ERROR_TOGGLE,
    payload: value
  }
}

export function toggleError(state = false, action) {
  switch(action.type) {
    case ERROR_TOGGLE: {
      return action.payload
    }
    default: return state;
  }
}

export function logLoader(state = false, action) {
  switch(action.type) {
    case LOG_LOADER: {
      return !state;
      break
    }
    default:
    return state;
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
