// action
const SEND_CHAT = 'socket/SEND_CHAT';
const RECEIVE_CHAT = 'socket/RECEIVE_CHAT';
const CLEAR_INPUT = 'socket/CLEAR_INPUT';

const SEND_IMAGE = 'socket/SEND_IMAGE';
const RECEIVE_IMAGE = 'socket/RECEIVE_IMAGE';
const CLEAR_IMAGE = 'socket/CLEAR_IMAGE';

// action creator
export const sendChat = msg => ({ type: SEND_CHAT, msg });
export const receiveChat = (id, msg) => ({ type: RECEIVE_CHAT, id, msg });
export const clearInput = () => ({ type: CLEAR_INPUT });

export const sendImage = image => ({ type: SEND_IMAGE, image });
export const receiveImage = (id, image) => ({ type: RECEIVE_IMAGE }, id, image);
export const clearImage = () => ({ type: CLEAR_IMAGE });
// initialState
const initialState = {
  msg: '',
  image: '',
  chat: [{ id: 1, msg: '메시지', image: '' }],
};

// reducer
const socket = (state = initialState, action) => {
  switch (action.type) {
    case SEND_CHAT:
      return {
        ...state,
        msg: action.msg,
        image: '',
      };
    case RECEIVE_CHAT:
      return {
        ...state,
        chat: state.chat.concat({ id: action.id, msg: action.msg }),
      };
    case CLEAR_INPUT:
      return {
        ...state,
        msg: '',
        image: '',
      };
    case SEND_IMAGE:
      return {
        ...state,
        msg: '',
        image: action.image,
      };
    case RECEIVE_IMAGE:
      return {
        ...state,
        msg: '',
        chat: state.chat.concat({
          id: action.id,
          msg: '',
          image: action.image,
        }),
      };
    case CLEAR_IMAGE:
      return {
        ...state,
        msg: '',
        image: '',
      };
    default:
      return state;
  }
};

export default socket;
