export const setUser = (data) => {
  localStorage.setItem('user', data);
};

export const unsetUser = () => {
  localStorage.removeItem('user');
};

export const getUser = () => {
  return localStorage.getItem('user');
};
