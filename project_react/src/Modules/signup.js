import * as signupApi from '../Api/signupApi';
import { openModal } from './modal';
const SIGN_UP = 'signup/SIGN_UP';
const SIGN_UP_SUCCESS = 'signup/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'signup/SIGN_UP_ERROR';

const SET_IS_CHECKING = 'signup/SET_IS_CHECKING';
const SET_IS_PWD_FOCUSED = 'signup/SET_IS_PWD_FOCUSED';
const SET_IS_PWD_CHANGED = 'signup/SET_IS_PWD_CHANGED';

const SET_FORM = 'signup/SET_FORM';
const RESET_FORM = 'signup/RESET_FORM';

const SET_VALUE = 'signup/SET_VALUE';
const SET_INVALID = 'signup/SET_INVALID';
const SET_INVALID_EMAIL = 'signup/SET_INVALID_EMAIL';
const SET_PWD_VALIDATION = 'signup/SET_PWD_VALIDATION';

export const signupRequest = userInfo => async dispatch => {
  dispatch({ type: SIGN_UP });
  try {
    const { result } = await signupApi.sendSignUpReq(userInfo);
    dispatch({ type: SIGN_UP_SUCCESS, result });
    if (result === 'Success') {
      dispatch({ type: RESET_FORM, result });
      dispatch(openModal('login'));
    } else if (result === 'AlreadyEmail') {
      dispatch({ type: SET_INVALID_EMAIL });
    }
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR, error });
  }
};

export const setForm = form => ({ type: SET_FORM, form });

export const resetForm = result => ({ type: RESET_FORM, result });

export const setIsChecking = value => ({ type: SET_IS_CHECKING, value });

export const setIsPwdFocused = value => ({ type: SET_IS_PWD_FOCUSED, value });

export const setIsPwdChanged = value => ({ type: SET_IS_PWD_CHANGED, value });

export const setValue = (key, value) => ({
  type: SET_VALUE,
  key,
  value,
});

export const setInvalid = payload => ({
  type: SET_INVALID,
  payload,
});

export const setPwdValidation = payload => ({
  type: SET_PWD_VALIDATION,
  payload,
});

const initialState = {
  loading: false,
  error: null,
  result: '',
  isChecking: false,
  isPwdChanged: false,
  isPwdFocused: false,
  form: {
    email: '',
    firstName: '',
    lastName: '',
    pwd: '',
    birthYear: '년',
    birthMonth: '월',
    birthDay: '일',
    phone: '',
    profileImg: '',
    description: '',
  },
  invalid: {
    email: null,
    firstName: null,
    lastName: null,
    pwd: null,
    birthYear: null,
    birthMonth: null,
    birthDay: null,
    phone: null,
    profileImg: null,
    description: null,
    pwdValidation: {
      pwdLevel: 0,
      pwdContain: false,
      pwdLength: false,
      pwdCase: false,
    },
  },
};

const signup = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: true, result: '', isPwdFocused: false };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result,
      };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error: action.error };
    case SET_IS_CHECKING:
      return {
        ...state,
        isChecking: action.value,
      };
    case SET_IS_PWD_FOCUSED:
      return { ...state, isPwdFocused: action.value };
    case SET_IS_PWD_CHANGED:
      return {
        ...state,
        isPwdChanged: action.value,
      };
    case SET_FORM:
      return { ...initialState, form: action.form };
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
        isPwdChanged: true,
      };
    case SET_INVALID:
      return {
        ...state,
        invalid: action.payload,
        isChecking: true,
      };
    case SET_INVALID_EMAIL:
      return {
        ...state,
        invalid: {
          ...state.invalid,
          email: true,
        },
      };
    case SET_PWD_VALIDATION:
      return {
        ...state,
        invalid: {
          ...state.invalid,
          pwdValidation: action.payload,
        },
      };
    default:
      return state;
  }
};

export default signup;
