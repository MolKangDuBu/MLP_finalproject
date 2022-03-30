import * as api from '../Api/searchApi';
import { fetchDataThunk, reducerUtils } from '../lib/asyncUtils';
import _ from 'lodash';

// action type
const FETCH_DATA = 'search/FETCH_DATA';
const FETCH_DATA_SUCCESS = 'search/FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'search/FETCH_DATA_ERROR';
const GET_FILTER_FORM = 'search/GET_FILTER_FORM';
const UPDATE_FILTER_FORM = 'search/UPDATE_FILTER_FORM';

const HOVER_HOME = 'search/HOVER_HOME';
const BLUR_HOME = 'search/BLUR_HOME';

const CHANGE_HEART = 'search/CHANGE_HEART';
const NAVIGATE_PAGE = 'search/NAVIGATE_PAGE';

const OPEN_HEADER = 'search/OPEN_HEADER';
const CLOSE_HEADER = 'search/CLOSE_HEADER';
const SET_DATE_HEADER = 'search/SET_DATE_HEADER';

const OPEN_MAP = 'search/OPEN_MAP';
const CLOSE_MAP = 'search/CLOSE_MAP';
const SHOW_MAP = 'search/SHOW_MAP';
const HIDE_MAP = 'search/HIDE_MAP';
const ZOOM_IN = 'search/ZOOM_IN';
const ZOOM_OUT = 'search/ZOOM_OUT';
const ZOOM_SET = 'search/ZOOM_SET';
const OPEN_MARKER = 'search/OPEN_MARKER';
const CLOSE_MARKER = 'search/CLOSE_MARKER';
const SET_MAP_SEARCH = 'search/SET_MAP_SEARCH';
const SET_MAP_BOUNDS = 'search/SET_MAP_BOUNDS';

const OPEN_POPUP = 'search/OPEN_POPUP';
const CLOSE_POPUP = 'search/CLOSE_POPUP';
const HANDLE_RANGE = 'search/HANDLE_RANGE';
const SET_FILTER = 'search/SET_FILTER';
const RESET_FILTER = 'search/RESET_FILTER';
const UNSAVE_FILTER = 'search/UNSAVE_FILTER';

const APPLY_TOGGLE_FILTER = 'search/APPLY_TOGGLE_FILTER';
const APPLY_COUNTER_FILTER = 'search/APPLY_COUNTER_FILTER';
const APPLY_CHECK_FILTER = 'search/APPLY_CHECK_FILTER';
const RESET_MODAL_FILTER = 'search/RESET_MODAL/FILTER';
const UNSAVE_MODAL_FILTER = 'search/UNSAVE_MODAL_FILTER';

// action creator
export const fetchData = fetchDataThunk(FETCH_DATA, api.fetchSearchedData);
export const getFilterForm = filterForm => ({
  type: GET_FILTER_FORM,
  filterForm,
});
export const updateFilterForm = filterForm => ({
  type: UPDATE_FILTER_FORM,
  filterForm,
});

export const hoverHome = homeId => ({ type: HOVER_HOME, homeId });
export const blurHome = () => ({ type: BLUR_HOME });

export const changeHeart = homeId => ({ type: CHANGE_HEART, homeId });
export const navigatePage = page => ({ type: NAVIGATE_PAGE, page });

export const openHeader = () => ({ type: OPEN_HEADER });
export const closeHeader = () => ({ type: CLOSE_HEADER });
export const setDateHeader = () => ({ type: SET_DATE_HEADER });

export const openMap = () => ({ type: OPEN_MAP });
export const closeMap = () => ({ type: CLOSE_MAP });
export const showMap = () => ({ type: SHOW_MAP });
export const hideMap = () => ({ type: HIDE_MAP });
export const zoomIn = () => ({ type: ZOOM_IN });
export const zoomOut = () => ({ type: ZOOM_OUT });
export const zoomSet = zoom => ({ type: ZOOM_SET, zoom });
export const openMarker = id => ({ type: OPEN_MARKER, id });
export const closeMarker = () => ({ type: CLOSE_MARKER });
export const setMapSearch = () => ({ type: SET_MAP_SEARCH });
export const setMapBounds = mapBounds => ({ type: SET_MAP_BOUNDS, mapBounds });

export const openPopup = name => ({ type: OPEN_POPUP, name });
export const closePopup = (name, isApplied) => ({
  type: CLOSE_POPUP,
  name,
  isApplied,
});
export const handleRange = handler => ({ type: HANDLE_RANGE, handler });
export const setFilter = (name, value) => ({ type: SET_FILTER, name, value });
export const resetFilter = name => ({ type: RESET_FILTER, name });
export const unsaveFilter = name => ({ type: UNSAVE_FILTER, name });

export const applyToggleFilter = (name, value) => ({
  type: APPLY_TOGGLE_FILTER,
  name,
  value,
});
export const applyCounterFilter = (name, value) => ({
  type: APPLY_COUNTER_FILTER,
  name,
  value,
});
export const applyCheckFilter = (list, name, value) => ({
  type: APPLY_CHECK_FILTER,
  list,
  name,
  value,
});
export const resetModalFilter = name => ({
  type: RESET_MODAL_FILTER,
  name,
});

// initial state
const modals = [
  'instantBooking',
  'bedCount',
  'bedroomCount',
  'BathroomCount',
  'superhost',
  'amenityList',
  'facilityList',
  'hostLangList',
];
const roomTypes = ['roomTypeHouse', 'roomTypePrivate', 'roomTypeShared'];
const prices = ['priceMin', 'priceMax'];
const all = [...modals, ...roomTypes, ...prices, 'refund'];

export const filterInit = {
  refund: 0,
  roomTypeHouse: 0,
  roomTypePrivate: 0,
  roomTypeShared: 0,
  priceMin: 12000,
  priceMax: 1000000,
};

export const modalInit = {
  instantBooking: 0,
  bedCount: 0,
  bedroomCount: 0,
  bathroomCount: 0,
  superhost: 0,
  amenityList: [],
  facilityList: [],
  hostLangList: [],
};

const popupInit = {
  refund: false,
  roomType: false,
  price: false,
  modal: false,
  all: false,
};

const initialState = {
  ...reducerUtils.initial(),
  filterForm: {},
  headerState: false,
  viewState: 'result',
  mapSearch: true,
  mapState: true,
  mapZoom: 11,
  mapBounds: {
    swLat: 0,
    swLng: 0,
    neLat: 0,
    neLng: 0,
  },
  markerState: null,
  // hoveredHome: null,
  popupState: popupInit,
  popupApplied: popupInit,
  filterApplied: {
    ...filterInit,
    ...modalInit,
  },
  filterPrevState: {},
  isFilterChanged: false,
  page: 1,
};

const getFilterGroup = (key, state, keep) => {
  const obj = keep ? state.filterApplied : filterInit;
  switch (key) {
    case 'roomType':
      return _.pick(obj, roomTypes);
    case 'price':
      return _.pick(obj, prices);
    case 'modal':
      return keep ? _.pick(obj, [...modals]) : modalInit;
    case 'all':
      return keep ? obj : { ...filterInit, ...modalInit };
    default:
      return { [key]: false };
  }
};

// reducer
const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        ...reducerUtils.loading(),
        headerState: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...reducerUtils.success(action.payload),
        isFilterChanged: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        ...reducerUtils.error(action.payload),
      };
    case GET_FILTER_FORM:
      return {
        ...state,
        filterForm: action.filterForm,
        filterApplied: {
          ...state.filterApplied,
          ..._.pick(action.filterForm, [...all, 'page']),
        },
        popupApplied: {
          refund: action.filterForm.refund || false,
          roomType: roomTypes.some(key => action.filterForm[key]),
          price: prices.some(key => action.filterForm[key]),
          modal: modals.some(key => action.filterForm[key]),
          all: false,
        },
        mapBounds: {
          ...state.mapBounds,
          swLat: action.filterForm.swLat,
          swLng: action.filterForm.swLng,
          neLat: action.filterForm.neLat,
          neLng: action.filterForm.neLng,
        },
        page: action.filterForm.page || 1,
        mapState:
          action.filterForm.mapState === undefined
            ? 1
            : action.filterForm.mapState,
      };
    case UPDATE_FILTER_FORM:
      return {
        ...state,
        filterForm: {
          ...state.filterForm,
          ...action.filterForm,
        },
        page: 1,
      };
    case HOVER_HOME:
      return {
        ...state,
        hoveredHome: action.homeId,
      };
    case BLUR_HOME:
      return {
        ...state,
        hoveredHome: null,
      };
    case CHANGE_HEART:
      return {
        ...state,
        data: {
          ...state.data,
          homes: state.data.homes.map(home =>
            home.homeId === action.homeId
              ? { ...home, isBookmarked: !home.isBookmarked }
              : home,
          ),
          recentHomes: state.data.recentHomes.map(home =>
            home.homeId === action.homeId
              ? { ...home, isBookmarked: !home.isBookmarked }
              : home,
          ),
        },
      };
    case NAVIGATE_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case OPEN_HEADER:
      return {
        ...state,
        headerState: true,
      };
    case CLOSE_HEADER:
      return {
        ...state,
        headerState: false,
      };
    case SET_DATE_HEADER:
      return {
        ...state,
        popupState: popupInit,
        headerState: true,
      };
    case SHOW_MAP:
      return {
        ...state,
        mapState: true,
      };
    case HIDE_MAP:
      return {
        ...state,
        mapState: false,
      };
    case OPEN_MAP:
      return {
        ...state,
        viewState: 'map',
      };
    case CLOSE_MAP:
      return {
        ...state,
        viewState: 'result',
      };
    case ZOOM_IN:
      return {
        ...state,
        mapZoom: state.mapZoom + 1,
      };
    case ZOOM_OUT:
      return {
        ...state,
        mapZoom: state.mapZoom - 1,
      };
    case ZOOM_SET:
      return {
        ...state,
        mapZoom: action.zoom,
      };
    case OPEN_MARKER:
      return {
        ...state,
        markerState: action.id,
      };
    case CLOSE_MARKER:
      return {
        ...state,
        markerState: null,
      };
    case SET_MAP_SEARCH:
      return {
        ...state,
        mapSearch: !state.mapSearch,
      };
    case SET_MAP_BOUNDS:
      return {
        ...state,
        mapBounds: action.mapBounds,
        page: 1,
      };
    case OPEN_POPUP:
      return {
        ...state,
        popupState: {
          ...popupInit,
          [action.name]: true,
        },
        filterPrevState: getFilterGroup(action.name, state, 'keep'),
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popupState: {
          ...state.popupState,
          [action.name]: false,
        },
        popupApplied: {
          ...state.popupApplied,
          [action.name]: action.isApplied,
        },
        isFilterChanged: !_.isEqual(
          state.filterPrevState,
          getFilterGroup(action.name, state, 'keep'),
        ),
        filterPrevState: {},
      };
    case SET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case RESET_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...getFilterGroup(action.name),
        },
      };
    case UNSAVE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...state.filterPrevState,
        },
        popupState: {
          ...state.popupState,
          [action.name]: false,
        },
        filterPrevState: {},
      };
    case APPLY_TOGGLE_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case APPLY_COUNTER_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.name]: action.value,
        },
      };
    case APPLY_CHECK_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          [action.list]: action.value
            ? state.filterApplied[action.list].filter(
                name => name !== action.name,
              )
            : state.filterApplied[action.list].concat(action.name),
        },
      };
    case RESET_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...getFilterGroup(action.name, state),
        },
      };
    case UNSAVE_MODAL_FILTER:
      return {
        ...state,
        filterApplied: {
          ...state.filterApplied,
          ...state.filterPrevState,
        },
      };
    default:
      return state;
  }
};

export default search;
