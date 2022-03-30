import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainRouter from './Routers/MainRouter';
import ResetStyle from './style/ResetStyle';
import { setIsLoggedIn } from './Modules/user';

const checkCookie = cname => {
  const name = `${cname}=`;
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookies.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let c = cookieArr[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return true;
    }
  }
  return false;
};

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user);
  useEffect(() => {
    if (!isLoggedIn && checkCookie('AirdndSES')) {
      dispatch(setIsLoggedIn(true));
    }
  }, [isLoggedIn]);

  return (
    <>
      <MainRouter />
      <ResetStyle />
    </>
  );
}

export default App;
