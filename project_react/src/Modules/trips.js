import * as api from '../Api/tripsApi';
import {
  fetchDataThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

// action type
const FETCH_TRIPS = 'trips/FETCH_TRIPS';
const FETCH_TRIPS_SUCCESS = 'trips/FETCH_TRIPS_SUCCESS';
const FETCH_TRIPS_ERROR = 'trips/FETCH_TRIPS_ERROR';

const FETCH_UPCOMING = 'trips/FETCH_UPCOMING';
const FETCH_UPCOMING_SUCCESS = 'trips/FETCH_UPCOMING_SUCCESS';
const FETCH_UPCOMING_ERROR = 'trips/FETCH_UPCOMING_ERROR';

const FETCH_PAST = 'trips/FETCH_PAST';
const FETCH_PAST_SUCCESS = 'trips/FETCH_PAST_SUCCESS';
const FETCH_PAST_ERROR = 'trips/FETCH_PAST_ERROR';

const FETCH_CANCELED = 'trips/FETCH_CANCELED';
const FETCH_CANCELED_SUCCESS = 'trips/FETCH_CANCELED_SUCCESS';
const FETCH_CANCELED_ERROR = 'trips/FETCH_CANCELED_ERROR';

// action creator
export const fetchTrips = fetchDataThunk(FETCH_TRIPS, api.fetchTripsData);
export const fetchUpcoming = fetchDataThunk(FETCH_UPCOMING, api.fetchTripsData);
export const fetchPast = fetchDataThunk(FETCH_PAST, api.fetchTripsData);
export const fetchCanceled = fetchDataThunk(FETCH_CANCELED, api.fetchTripsData);

// initial state
const initialState = {
  ...reducerUtils.initial(),
  upcoming: reducerUtils.initial(),
  past: reducerUtils.initial(),
  canceled: reducerUtils.initial(),
};

// reducer
const trips = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS:
    case FETCH_TRIPS_SUCCESS:
    case FETCH_TRIPS_ERROR:
      return handleAsyncActions(FETCH_TRIPS)(state, action);
    case FETCH_UPCOMING:
    case FETCH_UPCOMING_SUCCESS:
    case FETCH_UPCOMING_ERROR:
      return handleAsyncActions(FETCH_UPCOMING, 'upcoming')(state, action);
    case FETCH_PAST:
    case FETCH_PAST_SUCCESS:
    case FETCH_PAST_ERROR:
      return handleAsyncActions(FETCH_PAST, 'past')(state, action);
    case FETCH_CANCELED:
    case FETCH_CANCELED_SUCCESS:
    case FETCH_CANCELED_ERROR:
      return handleAsyncActions(FETCH_CANCELED, 'canceled')(state, action);
    default:
      return state;
  }
};

export default trips;
