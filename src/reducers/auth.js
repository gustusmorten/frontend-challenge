
import { removeItem, setStore } from 'helpers/helpers';
import { Types } from '../actions/actionTypes';

const initialState = {
    isLogin: false,
    user: {
        name: "" ,
        house: null,
        isStaff: false,
        isStudent: false,
        email: ""
    },
    error: false,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      setStore('user', action.payload.user);
      return {
        ...state,
        user: action.payload.user
        ,
        isLogin: true,
        error: false

      }
    case Types.LOGOUT:
      removeItem('user');
      return {
        ...state,
        profile: {
          name : null,
          house : null
        },
        isLogin: false,
        error: false

      }
    case Types.LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
        error: false
      }
    case Types.SET_ERROR:
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default AuthReducer;

export const getUser = state => state.auth.user;
export const getIslogin = state => state.auth.isLogin;
export const getError = state => state.auth.error;
export const getUserHouse = state => state.auth.user.house;
export const getUserIsStaff = state => state.auth.user.isStaff;
export const getUserIsStudent = state => state.auth.user.isStudent;

