import * as api from '../Api/bookmarkApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';
import {
  fetchBookmarkDataThunk,
  createBookmarkDataThunk,
} from '../lib/bookmarkUtils';

// action type
const SET_BOOKMARKLISTS = 'wishlists/SET_BOOKMARKLISTS';
const FETCH_BOOKMARKLISTS = 'wishlists/FETCH_BOOKMARKLISTS';
const FETCH_BOOKMARKLISTS_SUCCESS = 'wishlists/FETCH_BOOKMARKLISTS_SUCCESS';
const FETCH_BOOKMARKLISTS_ERROR = 'wishlists/FETCH_BOOKMARKLISTS_ERROR';
const CREATE_BOOKMARKLIST = 'wishlists/CREATE_BOOKMARKLIST';
const CREATE_BOOKMARKLIST_SUCCESS = 'wishlists/CREATE_BOOKMARKLIST_SUCCESS';
const CREATE_BOOKMARKLIST_ERROR = 'wishlists/CREATE_BOOKMARKLIST_ERROR';
const ADD_BOOKMARK_OLD_LIST = 'wishlists/ADD_BOOKMARK_OLD_LIST';
const ADD_BOOKMARK_OLD_LIST_SUCCESS = 'wishlists/ADD_BOOKMARK_OLD_LIST_SUCCESS';
const ADD_BOOKMARK_OLD_LIST_ERROR = 'wishlists/ADD_BOOKMARK_OLD_LIST_ERROR';
const ADD_BOOKMARK_NEW_LIST = 'wishlists/ADD_BOOKMARK_NEW_LIST';
const ADD_BOOKMARK_NEW_LIST_SUCCESS = 'wishlists/ADD_BOOKMARK_NEW_LIST_SUCCESS';
const ADD_BOOKMARK_NEW_LIST_ERROR = 'wishlists/ADD_BOOKMARK_NEW_LIST_ERROR';
const REMOVE_BOOKMARK = 'wishlists/REMOVE_BOOKMARK';
const REMOVE_BOOKMARK_SUCCESS = 'wishlists/REMOVE_BOOKMARK_SUCCESS';
const REMOVE_BOOKMARK_ERROR = 'wishlists/REMOVE_BOOKMARK_ERROR';
const OPEN_LIST_MODAL = 'wishlists/OPEN_LIST_MODAL';
const CLOSE_LIST_MODAL = 'wishlists/CLOSE_LIST_MODAL';
const OPEN_NEW_MODAL = 'wishlists/OPEN_NEW_MODAL';
const CLOSE_NEW_MODAL = 'wishlists/CLOSE_NEW_MODAL';
// action creator
export const setBookmarkLists = bookmarkLists => ({
  type: SET_BOOKMARKLISTS,
  bookmarkLists,
});
export const fetchBookmarkLists = fetchDataThunk(
  FETCH_BOOKMARKLISTS,
  api.fetchWishlistsData,
);
export const createBookmarkList = createBookmarkDataThunk(
  CREATE_BOOKMARKLIST,
  api.postWishlists,
);
export const addBookmarkOldList = fetchBookmarkDataThunk(
  ADD_BOOKMARK_OLD_LIST,
  api.postWishlists,
);
export const addBookmarkNewList = fetchBookmarkDataThunk(
  ADD_BOOKMARK_NEW_LIST,
  api.postWishlists,
);
export const removeBookmark = fetchBookmarkDataThunk(
  REMOVE_BOOKMARK,
  api.deleteWishList,
);
export const openListModal = (homeId, homeImg) => ({
  type: OPEN_LIST_MODAL,
  homeId,
  homeImg,
});
export const closeListModal = () => ({ type: CLOSE_LIST_MODAL });
export const openNewModal = () => ({ type: OPEN_NEW_MODAL });
export const closeNewModal = () => ({ type: CLOSE_NEW_MODAL });
// initial state
const initialState = {
  ...reducerUtils.initial(),
  listModal: false,
  newModal: false,
  selectedId: null,
  selectedImg: '',
  // bookmarkLists: [
  //   {
  //     bookmarkListId: 1,
  //     bookmarkListTitle: '흐앙 놀러가자ㅠㅠ 코로나님꺼져주세여',
  //     bookmarks: [
  //       {
  //         homeId: 0,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ], // 첫번째 이미지만 노출
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 2,
  //     bookmarkListTitle: '서울특별시',
  //     bookmarks: [
  //       {
  //         homeId: 1,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 2,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 3,
  //     bookmarkListTitle: '제주도가고싶다',
  //     bookmarks: [
  //       {
  //         homeId: 3,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 4,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 5,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     bookmarkListId: 4,
  //     bookmarkListTitle: '괌으로 고고씽',
  //     bookmarks: [
  //       {
  //         homeId: 6,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 7,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 8,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //       {
  //         homeId: 9,
  //         images: [
  //           'https://a0.muscache.com/im/pictures/45739202/a5c377f1_original.jpg?aki_policy=small',
  //         ],
  //       },
  //     ],
  //   },
  // ],
};
// reducer
const wishlists = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKMARKLISTS:
      return {
        ...state,
        data: {
          bookmarkLists: action.bookmarkLists,
        },
      };
    case FETCH_BOOKMARKLISTS:
    case FETCH_BOOKMARKLISTS_SUCCESS:
    case FETCH_BOOKMARKLISTS_ERROR:
      return handleAsyncActions(FETCH_BOOKMARKLISTS)(state, action);
    case CREATE_BOOKMARKLIST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOOKMARKLIST_SUCCESS:
      console.log(action, action.type, action.param);
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          bookmarkLists: state.data.bookmarkLists.concat({
            bookmarkListTitle: action.param.bookmarkListTitle,
          }),
        },
      };
    case CREATE_BOOKMARKLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case CREATE_BOOKMARKLIST:
    //   return {
    //     ...state,
    //     ...state.data.bookmarkLists.concat(action.bookmarkList),
    //   };

    case ADD_BOOKMARK_OLD_LIST:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOOKMARK_OLD_LIST_SUCCESS:
      console.log(action, action.type, action.param);
      return {
        ...state,
        loading: false,
        listModal: false,
        selectedId: null,
        selectedImg: '',
        data: {
          bookmarkLists: state.data.bookmarkLists.map(bmList =>
            bmList.bookmarkListId === action.param.bookmarkListId
              ? {
                  ...bmList,
                  bookmarks: [
                    ...bmList.bookmarks,
                    {
                      homeId: action.param.bookmarkHomeId,
                      images: action.param.bookmarkImage,
                    },
                  ],
                }
              : bmList,
          ),
        },
      };
    case ADD_BOOKMARK_OLD_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOKMARK_NEW_LIST:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOOKMARK_NEW_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        newModal: false,
        selectedId: null,
        selectedImg: '',
        data: {
          bookmarkLists: state.data.bookmarkLists.concat({
            bookmarkListId: action.payload.result,
            bookmarkListTitle: action.param.bookmarkListTitle,
            bookmarks: [
              {
                homeId: action.param.bookmarkHomeId,
                images: action.param.bookmarkImage,
              },
            ],
          }),
        },
      };
    case ADD_BOOKMARK_NEW_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          bookmarkLists: state.data.bookmarkLists.map(bmList => ({
            ...bmList,
            bookmarks: bmList.bookmarks.filter(
              bm => bm.homeId !== action.param.homeId,
            ),
          })),
        },
      };
    case REMOVE_BOOKMARK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OPEN_LIST_MODAL:
      return {
        ...state,
        listModal: true,
        selectedId: action.homeId,
        selectedImg: action.homeImg,
      };
    case CLOSE_LIST_MODAL:
      return {
        ...state,
        listModal: false,
        selectedId: null,
        selectedImg: '',
      };
    case OPEN_NEW_MODAL:
      return {
        ...state,
        listModal: false,
        newModal: true,
      };
    case CLOSE_NEW_MODAL:
      return {
        ...state,
        listModal: true,
        newModal: false,
      };
    default:
      return state;
  }
};
export default wishlists;
