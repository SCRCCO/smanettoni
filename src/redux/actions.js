// src/redux/actions.js
export const setLoggedInUser = (user) => ({
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  });
  
  export const setLoggedOutUser = () => ({
    type: 'SET_LOGGED_OUT_USER',
  });
  