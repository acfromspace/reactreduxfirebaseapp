const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed!"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: "Login success!"
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout good");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup good");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
