import * as loginApi from '../Api/loginApi';
import { setUser } from './user';
import { closeModal } from './modal';
import { setBookmarkLists } from './wishlists';

const LOG_IN = 'login/LOG_IN';
const LOG_IN_SUCCESS = 'login/LOG_IN_SUCCESS';
const LOG_IN_ERROR = 'login/LOG_IN_ERROR';

const SET_IS_CHECKING = 'login/SET_IS_CHECKING';
const SET_IS_PWD_SHOWN = 'login/SET_IS_PWD_SHOWN';

const RESET_FORM = 'login/RESET_FORM';

const SET_VALUE = 'login/SET_VALUE';
const SET_INVALID = 'login/SET_INVALID';

export const loginRequest = userInfo => async dispatch => {
  dispatch({ type: LOG_IN });
  try {
    const data = await loginApi.sendLoginReq(userInfo);
    console.log('[login] ', data);
    const { result, user, bookmarkLists } = data;
    dispatch({ type: LOG_IN_SUCCESS, result });
    if (result === 'Success') {
      dispatch(setUser(user));
      dispatch(setBookmarkLists(bookmarkLists));
      dispatch(resetForm(''));
      dispatch(closeModal());
    }
  } catch (error) {
    dispatch({ type: LOG_IN_ERROR, error });
  }
};

export const resetForm = result => ({ type: RESET_FORM, result });

export const setIsChecking = value => ({ type: SET_IS_CHECKING, value });

export const setIsPwdShown = () => ({ type: SET_IS_PWD_SHOWN });

export const setValue = (key, value) => ({
  type: SET_VALUE,
  key,
  value,
});

export const setInvalid = payload => ({
  type: SET_INVALID,
  payload,
});

const initialState = {
  loading: false,
  error: null,
  result: '',
  isChecking: false,
  isPwdShown: false,
  form: {
    email: '',
    pwd: '',
  },
  invalid: {
    email: null,
    pwd: null,
  },
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true };
    case LOG_IN_SUCCESS:
      return { ...state, loading: false, result: action.result };
    case LOG_IN_ERROR:
      return { ...state, loading: false, error: action.error };
    case SET_IS_CHECKING:
      return {
        ...state,
        isChecking: action.value,
      };
    case SET_IS_PWD_SHOWN:
      return {
        ...state,
        isPwdShown: !state.isPwdShown,
      };
    case RESET_FORM:
      return { ...initialState, result: action.result };
    case SET_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.key]: action.value,
        },
        invalid: {
          ...state.invalid,
          [action.key]: false,
        },
      };
    case SET_INVALID:
      return {
        ...state,
        invalid: action.payload,
        isChecking: true,
      };

    default:
      return state;
  }
};

export default login;
