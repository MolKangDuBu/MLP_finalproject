import React, { useEffect } from 'react';
import SignupMenuModal from '../../Components/Main/SignupMenuModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import { setForm } from '../../Modules/signup';
const SignupMenuModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'signup_menu';
  const openLoginModal = () => {
    dispatch(openModal('login'));
  };

  const openSignupEmailModal = () => {
    dispatch(openModal('signup_email'));
  };

  const onSuccessGoogle = res => {
    console.log('[onSuccessGoogle]');
    console.log('res: ', res);
    console.log('profileObj: ', res.profileObj);
    const { email, familyName, givenName, imageUrl } = res.profileObj;
    const form = {
      email,
      firstName: givenName || '',
      lastName: familyName || '',
      pwd: '',
      birthYear: '년',
      birthMonth: '월',
      birthDay: '일',
      phone: '',
      profileImg: imageUrl || '',
      description: '',
    };
    dispatch(setForm(form));
    dispatch(openModal('signup_email'));
  };

  const onFailureGoogle = ({ profileObj }) => {
    console.log('[onFailure]');
    console.log('profileObj: ', profileObj);
  };

  return (
    <SignupMenuModal
      modalVisible={modalVisible}
      openLoginModal={openLoginModal}
      openSignupEmailModal={openSignupEmailModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      onSuccessGoogle={onSuccessGoogle}
      onFailureGoogle={onFailureGoogle}
    ></SignupMenuModal>
  );
};

export default SignupMenuModalContainer;
