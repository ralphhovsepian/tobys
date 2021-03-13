export const USER_INFO = 'USER_INFO';

export const userInfo = (value) => {
  return {
    type: USER_INFO,
    payload: value,
  };
};

export const userInfoSetter = (state = '', action) => {
  switch (action.type) {
    case USER_INFO: {
      return action.payload;
      break;
    }
    default:
      return state;
  }
};
