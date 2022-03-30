import * as api from '../Api/messageApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

// ACTION TYPE
const FETCH_INBOX = 'message/FETCH_INBOX';
const FETCH_INBOX_SUCCESS = 'message/FETCH_INBOX_SUCCESS';
const FETCH_INBOX_ERROR = 'message/FETCH_INBOX_ERROR';

const SET_ACTIVE_ID = 'message/SET_ACTIVE_ID';
const SET_ACTIVE_MSG = 'message/SET_ACTIVE_MSG';
const OPEN_POPUP = 'message/OPEN_POPUP';
const CLOSE_POPUP = 'message/CLOSE_POPUP';
const ACTIVE_RESERVATION = 'message/ACTIVE_RESERVATION';

const SHOW_MESSAGE_DETAIL_SECTION = 'message/SHOW_MESSAGE_DETAIL_SECTION';
const HIDE_MESSAGE_DETAIL_SECTION = 'message/HIDE_MESSAGE_DETAIL_SECTION';
const SHOW_MESSAGE_LIST_SECTION = 'message/SHOW_MESSAGE_LIST_SECTION';
const HIDE_MESSAGE_LIST_SECTION = 'message/HIDE_MESSAGE_LIST_SECTION';
const CHANGE_MEDIA_SIZE = 'message/CHANGE_MEDIA_SIZE';

const ARCHAIVE_MESSAGE = 'message/ARCHAIVE_MESSAGE';
const UNARCHAIVE_MESSAGE = 'message/UNARCHAIVE_MESSAGE';
const SHOW_TOAST = 'message/SHOW_TOAST';
const HIDE_TOAST = 'message/HIDE_TOAST';
const UNDO = 'message/UNDO';
const SHOW_UNDO_TOAST = 'message/SHOW_UNDO_TOAST';
const HIDE_UNDO_TOAST = 'message/HIDE_UNDO_TOAST';

const ALL_MESSAGE_LIST = 'message/ALL_MESSAGE_LIST';
const HIDE_MESSAGE_LIST = 'message/HIDE_MESSAGE_LIST';
const UNREAD_MESSAGE_LIST = 'message/UNREAD_MESSAGE_LIST';

const OPEN_MODAL = 'message/OPEN_MODAL';
const CLOSE_MODAL = 'message/CLOSE_MODAL';
const PDF_INPUT = 'message/PDF_INPUT';

// ACTION CREATOR
export const fetchInbox = fetchDataThunk(FETCH_INBOX, api.fetchMessagesData);
export const setActiveId = id => ({ type: SET_ACTIVE_ID, id });
export const setActiveMsg = msg => ({ type: SET_ACTIVE_MSG, msg });
export const openPopup = name => ({ type: OPEN_POPUP, name });
export const closePopup = name => ({ type: CLOSE_POPUP, name });
export const activeReservation = reservation => ({
  type: ACTIVE_RESERVATION,
  reservation,
});
export const showMsgDetailSection = () => ({
  type: SHOW_MESSAGE_DETAIL_SECTION,
});
export const hideMsgDetailSection = () => ({
  type: HIDE_MESSAGE_DETAIL_SECTION,
});
export const showMsgListSection = () => ({ type: SHOW_MESSAGE_LIST_SECTION });
export const hideMsgListSection = () => ({ type: HIDE_MESSAGE_LIST_SECTION });
export const changeMediaSize = media => ({ type: CHANGE_MEDIA_SIZE, media });

export const archiveMsg = (msg, activeState, state) => ({
  type: ARCHAIVE_MESSAGE,
  msg,
  activeState,
  state,
});

export const unarchiveMsg = (msg, activeState, state) => ({
  type: UNARCHAIVE_MESSAGE,
  msg,
  activeState,
  state,
});

export const showToast = () => ({ type: SHOW_TOAST });
export const hideToast = () => ({ type: HIDE_TOAST });
export const undo = (id, state) => ({ type: UNDO, id, state });
export const showUndoToast = () => ({ type: SHOW_UNDO_TOAST });
export const hideUndoToast = () => ({ type: HIDE_UNDO_TOAST });

export const allMsgList = index => ({ type: ALL_MESSAGE_LIST, index });
export const hideMsgList = index => ({ type: HIDE_MESSAGE_LIST, index });
export const unreadMsgList = index => ({ type: UNREAD_MESSAGE_LIST, index });

export const openModal = name => ({ type: OPEN_MODAL, name });
export const closeModal = name => ({ type: CLOSE_MODAL, name });

export const pdfInput = value => ({ type: PDF_INPUT, value });

// INITIAL STATE
const popupInit = {
  filter: false,
};

const modalInit = {
  business: false,
  flag: false,
  support: false,
  pdf: false,
  language: false,
  value: '',
};

const toastInit = {
  toast: false,
  undoToast: false,
};

const mediaInit = {
  media: 'large',
  msgDetailSectionState: true,
  msgListSectionState: true,
};

const initialState = {
  messages: reducerUtils.initial(), // api 연결되면 그때 작업
  mediaState: mediaInit,
  popupState: popupInit,
  modalState: modalInit,
  toastState: toastInit,
  isHost: false,
  activeId: 0,
  activeMsg: {},
  activeReservation: {},
  tempMsg: {}, // archived or unarchived msg
  profileImg:
    'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',

  // messages: {
  //   loading: false,
  //   error: false,
  //   data: {
  //     all: [
  //       {
  //         // all
  //         hostname: 'Yun님',
  //         reservationId: 1,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 1,
  //           checkin: '2020-04-06',
  //           lastMsgDate: '2020-09-09 06:19:20',
  //           lastMsg:
  //             '그럼 대화를 길게 써 보기도 할까요? 최대 몇 자까지 되는지 궁금하네여 MEDIUMTEXT로 설정해 뒀거든요 아~너무궁금~^^ 언제까지 입력을 할까요? 화면에서 세 줄 정도로 나왔으면 좋겠다고 저는 생각합니다 줄줄이 소시지 늘어나라 글자글자',
  //           checkout: '2020-04-07',
  //         },
  //         chatHistory: [],
  //         id: 186,
  //         state: 'all',
  //       },
  //       {
  //         hostname: 'Sori님',
  //         reservationId: 11,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 0,
  //           checkin: '2020-06-25',
  //           lastMsgDate: '2020-09-09 06:20:07',
  //           lastMsg: '아침이에염 참새가 울고 있음',
  //           checkout: '2020-06-26',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-09 06:20:07',
  //             name: 'Sori님',
  //             id: 25,
  //             text: '아침이에염 참새가 울고 있음',
  //             userId: 22,
  //           },
  //           {
  //             timeStamp: '2020-09-09 02:55:02',
  //             name: 'MR',
  //             id: 10,
  //             text: '아이고 밤이 늦었다 엄마는 졸리다',
  //             userId: 1,
  //           },
  //           {
  //             timeStamp: '2020-09-08 23:07:45',
  //             name: 'Sori님',
  //             id: 9,
  //             text: '네 안녕하세염',
  //             userId: 22,
  //           },
  //           {
  //             timeStamp: '2020-09-08 23:06:45',
  //             name: 'MR',
  //             id: 8,
  //             text: '22번님 ㅎㅇㅎㅇ',
  //             userId: 1,
  //           },
  //         ],
  //         id: 22,
  //         state: 'all',
  //       },
  //       {
  //         hostname: 'Ling님',
  //         reservationId: 9,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 0,
  //           checkin: '2020-08-31',
  //           lastMsgDate: '2020-09-09 06:23:10',
  //           lastMsg: '또 바라만 보고 있는 나를 그댄 알고 있?',
  //           checkout: '2020-09-01',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-09 06:23:10',
  //             name: 'Ling님',
  //             id: 28,
  //             text: '또 바라만 보고 있는 나를 그댄 알고 있?',
  //             userId: 230,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:22:20',
  //             name: 'Ling님',
  //             id: 27,
  //             text: '푸르른 나무처럼 말없이 빛난 별처럼',
  //             userId: 230,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:22:15',
  //             name: 'MR',
  //             id: 26,
  //             text: '안녕하세요 예약 못해서 죽은 귀신입니다',
  //             userId: 1,
  //           },
  //         ],
  //         id: 230,
  //         state: 'all',
  //       },
  //     ],
  //     hidden: [
  //       {
  //         hostname: 'Joy님',
  //         reservationId: 6,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 0,
  //           checkin: '2020-08-28',
  //           lastMsgDate: '2020-09-08 22:45:09',
  //           lastMsg: '하하 이제 당신 펜션은 제 겁니다',
  //           checkout: '2020-08-29',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-08 22:45:09',
  //             name: 'MR',
  //             id: 5,
  //             text: '하하 이제 당신 펜션은 제 겁니다',
  //             userId: 1,
  //           },
  //         ],
  //         id: 132,
  //         state: 'hidden',
  //       },
  //       {
  //         hostname: 'Dina님',
  //         reservationId: 3,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 1,
  //           checkin: '2020-08-28',
  //           lastMsgDate: '2020-09-09 06:27:10',
  //           lastMsg: '그람유! 지 두 눈으로 똑똑히 봤구먼유',
  //           checkout: '2020-08-31',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-09 06:27:10',
  //             name: 'Dina님',
  //             id: 32,
  //             text: '그람유! 지 두 눈으로 똑똑히 봤구먼유',
  //             userId: 292,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:26:52',
  //             name: 'MR',
  //             id: 31,
  //             text: '그것이 참말이어유??',
  //             userId: 1,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:26:39',
  //             name: 'Dina님',
  //             id: 30,
  //             text:
  //               'ㄳㄳ합니다 원앙과 함께라면 취업운도 급상승한다는 뇌피셜이 있답니다',
  //             userId: 292,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:24:59',
  //             name: 'MR',
  //             id: 29,
  //             text: '안녕하세요 원앙금침 예약한 최미래입니다',
  //             userId: 1,
  //           },
  //         ],
  //         id: 292,
  //         state: 'hidden',
  //       },
  //     ],
  //     unread: [
  //       {
  //         hostname: 'Hyeongu님',
  //         reservationId: 8,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 0,
  //           checkin: '2020-09-25',
  //           lastMsgDate: '2020-09-08 22:48:42',
  //           lastMsg: '173번 호스트에게 인사 ~!',
  //           checkout: '2020-09-26',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-08 22:48:42',
  //             name: 'MR',
  //             id: 7,
  //             text: '173번 호스트에게 인사 ~!',
  //             userId: 1,
  //           },
  //         ],
  //         id: 173,
  //         state: 'unread',
  //       },
  //       {
  //         hostname: 'Gunwoo님',
  //         reservationId: 2,
  //         contents: {
  //           hostProfileImg:
  //             'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=720',
  //           isCanceled: 0,
  //           checkin: '2020-08-29',
  //           lastMsgDate: '2020-09-09 06:11:20',
  //           lastMsg: '좀 더 가까워지고 싶어~~~',
  //           checkout: '2020-09-01',
  //         },
  //         chatHistory: [
  //           {
  //             timeStamp: '2020-09-09 06:11:20',
  //             name: 'Gunwoo님',
  //             id: 13,
  //             text: '좀 더 가까워지고 싶어~~~',
  //             userId: 183,
  //           },
  //           {
  //             timeStamp: '2020-09-09 06:10:20',
  //             name: 'MR',
  //             id: 12,
  //             text: 'Stand by me 나를 바라봐 줘',
  //             userId: 1,
  //           },
  //         ],
  //         id: 183,
  //         state: 'unread',
  //       },
  //     ],
  //   },
  // },
};

// REDUCER
const message = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INBOX:
    case FETCH_INBOX_SUCCESS:
    case FETCH_INBOX_ERROR:
      return handleAsyncActions(FETCH_INBOX, 'messages')(state, action);

    case SHOW_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        mediaState: {
          ...state.mediaState,
          msgDetailSectionState: true,
        },
      };
    case HIDE_MESSAGE_DETAIL_SECTION:
      return {
        ...state,
        mediaState: {
          ...state.mediaState,
          msgDetailSectionState: false,
        },
      };
    case SHOW_MESSAGE_LIST_SECTION:
      return {
        ...state,
        mediaState: {
          ...state.mediaState,
          msgListSectionState: true,
        },
      };
    case HIDE_MESSAGE_LIST_SECTION:
      return {
        ...state,
        mediaState: {
          ...state.mediaState,
          msgListSectionState: false,
        },
      };
    case CHANGE_MEDIA_SIZE:
      return {
        ...state,
        mediaStata: {
          ...state.mediaState,
          media: action.media,
        },
      };
    case SET_ACTIVE_ID:
      return {
        ...state,
        activeId: action.id,
      };
    case SET_ACTIVE_MSG:
      return {
        ...state,
        activeMsg: { ...action.msg },
      };
    case ACTIVE_RESERVATION:
      return {
        ...state,
        activeReservation: { ...action.reservation },
      };
    case OPEN_POPUP:
      return {
        ...state,
        popupState: {
          ...state.popupState,
          [action.name]: true,
        },
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popupState: {
          ...state.popupState,
          [action.name]: false,
        },
      };
    case ARCHAIVE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {
            ...state.messages.data,
            all: state.messages.data.all.filter(
              msg => msg.id !== action.msg.id,
            ),
            hidden: state.messages.data.hidden.concat({
              ...action.msg,
              state: action.state,
            }),
          },
        },
        tempMsg: { ...action.msg },
      };
    case UNARCHAIVE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {
            ...state.messages.data,
            all: state.messages.data.hidden.filter(
              msg => msg.id !== action.msg.id,
            ),
            hidden: state.messages.data.all.concat({
              ...action.msg,
              state: action.state,
            }),
          },
        },
        tempMsg: { ...action.msg },
      };
    case SHOW_TOAST:
      return {
        ...state,
        toastState: {
          ...state.toastState,
          toast: true,
        },
      };
    case HIDE_TOAST:
      return {
        ...state,
        toastState: {
          ...state.toastState,
          toast: false,
        },
      };

    case UNDO:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {
            ...state.messages.data,
            all: state.messages.data[action.state].filter(
              msg => msg.id !== action.msg.id,
            ),
            hidden: state.messages.data[action.state].concat({
              ...action.msg,
              state: action.state,
            }),
          },
        },
        tempMsg: { ...action.msg },
      };

    // case UNDO2:
    //   return {
    //     ...state,
    //     messages: state.messages.data['all'].map(msg =>
    //       msg.id === action.id ? { ...msg, state: action.state } : msg,
    //     ),
    //     tempMsg: {},
    //   };

    case SHOW_UNDO_TOAST:
      return {
        ...state,
        toastState: {
          ...state.toastState,
          undoToast: true,
        },
      };
    case HIDE_UNDO_TOAST:
      return {
        ...state,
        toastState: {
          ...state.toastState,
          undoToast: false,
        },
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          [action.name]: true,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          [action.name]: false,
        },
      };
    case PDF_INPUT:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          value: action.value,
        },
      };
    default:
      return state;
  }
};

export default message;
