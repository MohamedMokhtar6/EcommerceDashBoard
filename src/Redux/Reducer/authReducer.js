import { LOGIN_USER } from "../type";

const inital = {
  loading: true,
  loginUser: [],
  loginAdmin: [],
  currentUser: [],
  currentAdmin: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default authReducer;
