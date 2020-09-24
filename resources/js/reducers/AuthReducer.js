const initialState = {
  auth: {
    loggedIn: false,
    user: {},
  },
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: true,
          user: action.data,
        }
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: true,
          user: action.data,
        }
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: false,
          user: {},
        }
      };
    default:
      return state;
  }
}