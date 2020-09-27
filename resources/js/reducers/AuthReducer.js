const initialState = {
  auth: {
    loggedIn: false,
    user: {},
    loginError: '',
    registerError: '',
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
          loginError: '',
          registerError: '',
        }
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        auth: {
          loggedIn: false,
          user: {},
          loginError: 'メールアドレスかパスワードが間違っています。',
          registerError: '',
        }
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: true,
          user: action.data,
          loginError: '',
          registerError: '',
        }
      };
    case "REGISTER_FAILED":
      return {
        ...state,
        auth: {
          loggedIn: false,
          user: {},
          loginError: '',
          registerError: 'そのメールアドレスは登録できません。',
        }
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: true,
          user: action.data,
          loginError: '',
          registerError: '',
        }
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        auth: {
          loggedIn: false,
          user: {},
          loginError: '',
          registerError: '',
        }
      };
    default:
      return state;
  }
}