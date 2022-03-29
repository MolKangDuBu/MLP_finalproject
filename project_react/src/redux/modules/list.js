import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import axios from "axios";
import { history } from "../../App";

const GET_LIST = "GET_LIST";
const GET_LIST_DETAIL = "GET_LIST_DETAIL";

const initialState = {
  list: [],
};

const getList = createAction(GET_LIST, (list) => ({ list }));
const getListDetail = createAction(GET_LIST_DETAIL, (listOne) => ({ listOne }));

const getListDB = (listId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getlist(listId)
      .then((res) => {
        dispatch(getList(res.data.locationPlaces));
      })
      .catch((err) => {
        console.log("nooo");
        console.log(err);
      });
  };
};

const getListDetailDB = (placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getDetail(placeId)
      .then((res) => {
        dispatch(getListDetail(res.data.place));
      })
      .catch((err) => {
        console.log("nooo");
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [GET_LIST_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.listOne = action.payload.listOne;
      }),
  },
  initialState
);

const actionCreators = {
  getList,
  getListDB,
  getListDetail,
  getListDetailDB,
};

export { actionCreators };
