import * as api from '../Api/searchApi';
import { fetchDataThunk, reducerUtils } from '../lib/asyncUtils';

const FETCH_CENTER = 'map/FETCH_CENTER';
const FETCH_CENTER_SUCCESS = 'map/FETCH_CENTER_SUCCESS';
const FETCH_CENTER_ERROR = 'map/FETCH_CENTER_ERROR';

export const fetchCenter = fetchDataThunk(FETCH_CENTER, api.fetchMapCenter);

const initialState = reducerUtils.initial();

const map = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CENTER:
      return {
        ...reducerUtils.loading(),
      };
    case FETCH_CENTER_SUCCESS:
      return {
        ...reducerUtils.success(action.payload),
      };
    case FETCH_CENTER_ERROR:
      return {
        ...reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
};

export default map;
