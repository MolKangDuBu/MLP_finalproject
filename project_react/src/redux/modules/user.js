import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import axios from "axios";
import { history } from "../../App";
import "animate.css";
import Swal from "sweetalert2";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  is_login: false,
  list: [],
};

const logInDB = (userEmail, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(userEmail, password)
      .then((res) => {
        console.log(res);
        if (!res.data.ok) {
          // window.alert(res.data.errorMessage);
          Swal.fire({
            title: "로그인에 실패하셨습니다😨",
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          return;
        }

        Swal.fire({
          title: `${res.data.userNickname}님 반갑습니다.`,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        dispatch(setUser(res.data));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userNickname", res.data.userNickname);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

const loginCheckDB = () => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "http://3.34.130.88/api/users/me",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);

        dispatch(
          setUser({
            userNickname: res.data.userNickname,
          })
        );
      })
      .catch((err) => {
        console.log("로그인 확인 실패", err);
      });
  };
};

const signUpDB = (userEmail, userNickname, password, passwordConfirm) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(userEmail, userNickname, password, passwordConfirm)
      .then((res) => {
        const modal = getState().modal.is_open;
        console.log(modal);
        console.log(res.data.ok);
        if (!res.data.ok) {
          // window.alert(res.data.errorMessage);
          Swal.fire({
            // title: "빠진 항목이 있나 확인 해주세요😊",
            title: res.data.errorMessage,
            icon: "warning",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          return;
        }
        // window.alert("회원가입이 완료되었습니다!");
        Swal.fire({
          title: "회원가입이 완료되었습니다😊",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        history.replace("/");
        console.log(res);
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  setUser,
  signUpDB,
  logInDB,
  logOutDB,
  loginCheckDB,
};

export { actionCreators };
