import React, { useEffect, useRef } from 'react';
import LoginModal from '../../Components/Main/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import {
  loginRequest,
  resetForm,
  setIsChecking,
  setIsPwdShown,
  setValue,
  setInvalid,
} from '../../Modules/login';

const LoginModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'login';
  const {
    loading,
    result,
    isChecking,
    isPwdShown,
    form,
    invalid,
  } = useSelector(state => state.login);

  const { email, pwd } = form;

  const emailRef = useRef();
  const pwdRef = useRef();
  const refObj = {
    emailRef,
    pwdRef,
  };

  const openSignupMenuModal = () => {
    dispatch(openModal('signup_menu'));
  };

  const onToggleShowPwd = () => {
    dispatch(setIsPwdShown());
  };

  const onFormChange = (key, value) => {
    dispatch(setValue(key, value));
  };

  const checkEmail = email => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return !emailRegExp.test(email);
  };

  const checkPwd = pwd => {
    return pwd.length < 8;
  };

  const onSuccess = () => {
    const userInfo = {
      email,
      pwd,
    };
    dispatch(loginRequest(userInfo));
  };

  const changeFocus = () => {
    const invalidCount = Object.values(invalid).filter(v => v).length;
    if (invalidCount) {
      refObj[
        `${Object.entries(invalid).find(v => v[1])[0]}Ref`
      ].current.focus();
      return;
    }
    onSuccess();
  };

  const checkForm = () => {
    const payload = {
      email: checkEmail(email),
      pwd: checkPwd(pwd),
    };

    dispatch(setInvalid(payload));
  };

  const cleanupModal = () => {
    dispatch(resetForm(''));
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkForm();
  };

  if (isChecking) {
    changeFocus();
    dispatch(setIsChecking(false));
  }

  return (
    <LoginModal
      modalVisible={modalVisible}
      form={form}
      invalid={invalid}
      refObj={refObj}
      loading={loading}
      result={result}
      isPwdShown={isPwdShown}
      openSignupMenuModal={openSignupMenuModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      // cleanupModal={cleanupModal}
      onFormChange={onFormChange}
      onToggleShowPwd={onToggleShowPwd}
      handleSubmit={handleSubmit}
    ></LoginModal>
  );
};

export default React.memo(LoginModalContainer);
