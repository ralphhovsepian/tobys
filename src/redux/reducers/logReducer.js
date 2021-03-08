export const INPUT_CHANGE = 'INPUT_CHANGE';
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";

export const inputChange = (value) => {
  return {
    type: INPUT_CHANGE,
    payload: value
  }
}

export const passwordChange = (value) => {
  return {
    type: PASSWORD_CHANGE,
    payload: value
  }
}


export function inputChanger(state = {username: '', password:''}, action) {
    switch(action.type) {
        case INPUT_CHANGE: {
          let newState = {
            username: action.payload,
            password: state.password
          }
          return newState;
          break;
        }

        case PASSWORD_CHANGE: {
          let newState = {
            username: state.username,
            password: action.payload
          }
          return newState;
          break;
        }
        default: return state
    }
}
