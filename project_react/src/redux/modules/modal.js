import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const IS_OPEN = "IS_OPEN";
const isOpen = createAction(IS_OPEN, (isOpen) => ({ isOpen }));

const initialState = {
  is_open: true,
};

export default handleActions(
  {
    [IS_OPEN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_open = action.payload.isOpen;
      }),
  },
  initialState
);

const actionCreators = {
  isOpen,
};

export { actionCreators };
