import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import signup from './signup';
import login from './login';
import searchForm from './searchForm';
import wishlists from './wishlists';
import trips from './trips';
import message from './message';
import home from './home';
import modal from './modal';
import map from './map';
import reservation from './reservation';
import socket from './socket';
import mouseEvents from './mouseEvents';

const rootReducer = combineReducers({
  user,
  signup,
  login,
  search,
  searchForm,
  wishlists,
  trips,
  message,
  home,
  modal,
  map,
  reservation,
  socket,
  mouseEvents,
});

export default rootReducer;
