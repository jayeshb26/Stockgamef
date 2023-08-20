const initialState = {
  loggedIn: false,
  error: null,
  token: null,
};

const AuthReducers = (state = initialState, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // Store token in local storage
      localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        loggedIn: action.payload.success,
        error: null,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loggedIn: action.payload.success,
        error: action.payload,
      };
    case "LOGOUT":
      return { ...state, loggedIn: false, error: null };
    default:
      return state;
  }
};
export default AuthReducers;
