// action types
import * as userApi from '../Api/userApi';

const SET_USER = 'user/SET_USER';

const LOG_OUT = 'user/LOG_OUT';
const LOG_OUT_SUCCESS = 'user/LOG_OUT_SUCCESS';
const LOG_OUT_ERROR = 'user/LOG_OUT_ERROR';

const SET_IS_LOGGED_IN = 'user/SET_IS_LOGGED_IN';

// action creators
export const setIsLoggedIn = value => ({ type: SET_IS_LOGGED_IN, value });

export const setUser = data => ({
  type: SET_USER,
  data,
});

export const logoutRequest = () => async dispatch => {
  dispatch({ type: LOG_OUT });
  try {
    const { result } = await userApi.sendLogOutReq();
    dispatch({ type: LOG_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOG_OUT_ERROR, error });
  }
};

// initialState
const initialState = {
  isLoggedIn: false,
  data: {
    id: null,
    email: '',
    pwd: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthDay: '',
    profileImg: '',
    description: '',
    isHost: false,
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        isLoggedIn: true,
        data: action.data,
      };
    case LOG_OUT:
    case LOG_OUT_ERROR:
      return state;
    case LOG_OUT_SUCCESS:
      return initialState;
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.value,
      };
    default:
      return state;
  }
};

export default user;
