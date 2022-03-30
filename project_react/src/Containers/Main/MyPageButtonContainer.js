import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openModal } from '../../Modules/modal';
import { logoutRequest } from '../../Modules/user';
import MyPageButton from '../../Components/Main/MyPageButton';
import MyPagePopup from '../../Components/Main/MyPagePopup';
import LoginModalContainer from './LoginModalContainer';
import SignupMenuModalContainer from './SignupMenuModalContainer';
import SignupEmailModalContainer from './SignupEmailModalContainer';

const MyPageButtonContainer = ({ isScrollTop }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [popupVisible, setPopupVisible] = useState(false);
  const { isLoggedIn, data } = useSelector(state => state.user);
  const closePopup = () => {
    setPopupVisible(false);
  };

  const togglePopup = () => {
    setPopupVisible(prevState => !prevState);
  };

  const openModalByName = name => {
    dispatch(openModal(name));
  };

  const movePage = pageName => {
    history.push(`/${pageName}`);
  };

  const onClickLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <>
      <MyPageButton
        isScrollTop={isScrollTop}
        togglePopup={togglePopup}
        isLoggedIn={isLoggedIn}
        data={data}
      ></MyPageButton>
      <MyPagePopup
        popupVisible={popupVisible}
        closePopup={closePopup}
        isLoggedIn={isLoggedIn}
        openModalByName={openModalByName}
        movePage={movePage}
        onClickLogout={onClickLogout}
      ></MyPagePopup>
      <LoginModalContainer />
      <SignupMenuModalContainer />
      <SignupEmailModalContainer />
    </>
  );
};

export default React.memo(MyPageButtonContainer);
