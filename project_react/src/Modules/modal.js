// action types
const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';

// action creators
export const openModal = name => ({ type: OPEN_MODAL, name });
export const closeModal = () => ({ type: CLOSE_MODAL });

// initialState
const initialState = {
  name: null,
};

// reducer
const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { name: action.name };
    case CLOSE_MODAL:
      return { name: null };
    default:
      return state;
  }
};

export default modal;
