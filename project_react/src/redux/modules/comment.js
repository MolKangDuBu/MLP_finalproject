import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import "animate.css";
import Swal from "sweetalert2";

const GET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({
  comment_data,
}));

const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

const initialState = {
  list: [],
};

const getCommentDB = (placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getComment(placeId)
      .then((res) => {
        dispatch(getComment(res.data.comment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentDB = (userNickname, commentContent, placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(userNickname, commentContent, placeId)
      .then((res) => {
        dispatch(
          addComment({
            userNickname,
            commentContent,
            commentId: res.data.commentId,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    apis.deleteComment(commentId).then((res) => {
      dispatch(deleteComment(commentId));
      console.log(res);
      // window.alert("삭제가 완료되었습니다.");
      Swal.fire({
        title: "삭제가 완료되었습니다😊",
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      // window.location.reload();
    });
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment_data);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (c) => c.commentId !== action.payload.commentId
        );
      }),
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  getCommentDB,
  getComment,
  addComment,
  deleteComment,
  deleteCommentDB,
};

export { actionCreators };
