// src/redux/reducers.js
const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_USER':
        return { ...state, user: action.payload };
      case 'SET_LOGGED_OUT_USER':
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  