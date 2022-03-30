import React, { useEffect, useRef } from 'react';
import SignupEmailModal from '../../Components/Main/SignupEmailModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../Modules/modal';
import {
  signupRequest,
  resetForm,
  setIsChecking,
  setIsPwdFocused,
  setIsPwdChanged,
  setValue,
  setInvalid,
  setPwdValidation,
} from '../../Modules/signup';

const SignupModalContainer = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.modal);
  const modalVisible = name === 'signup_email';
  const {
    loading,
    error,
    result,
    isChecking,
    isPwdFocused,
    isPwdChanged,
    form,
    invalid,
  } = useSelector(state => state.signup);
  const {
    email,
    firstName,
    lastName,
    pwd,
    birthMonth,
    birthDay,
    birthYear,
    phone,
    profileImg,
    description,
  } = form;

  const {
    pwdValidation: { pwdLevel },
  } = invalid;

  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const pwdRef = useRef();
  const birthMonthRef = useRef();
  const birthDayRef = useRef();
  const birthYearRef = useRef();
  const refObj = {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwdRef,
    birthMonthRef,
    birthDayRef,
    birthYearRef,
  };

  const openLoginModal = () => {
    dispatch(openModal('login'));
  };

  const onPwdFocused = value => {
    dispatch(setIsPwdFocused(value));
  };

  const checkPwd = () => {
    const pwdLength = pwd && pwd.length >= 8;
    const emailResult =
      !email.split('@')[0] || !pwd.includes(email.split('@')[0]);
    const firstNameResult = !firstName || !pwd.includes(firstName);
    const lastNameResult = !lastName || !pwd.includes(lastName);
    const pwdContain = pwd && emailResult && firstNameResult && lastNameResult;
    const numberPattern = /[0-9]/;
    const specialCasePattern = /[~!@#$%^&*()_+|<>?:{}]/;
    const pwdCase = numberPattern.test(pwd) || specialCasePattern.test(pwd);
    const pwdCaseBoth = numberPattern.test(pwd) && specialCasePattern.test(pwd);
    const pwdLevel =
      pwdContain && pwdLength && pwdCaseBoth
        ? 2
        : pwdContain && pwdLength && pwdCase
        ? 1
        : 0;

    return {
      pwdLevel,
      pwdContain,
      pwdLength,
      pwdCase,
    };
  };

  const updatePwd = () => {
    const payload = checkPwd();
    dispatch(setPwdValidation(payload));
  };

  const checkEmail = email => {
    const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return !emailRegExp.test(email);
  };

  const checkName = name => {
    const numberRegExp = /[\d]/;
    const specialCharRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    return (
      name.length < 1 ||
      name.length > 35 ||
      numberRegExp.test(name) ||
      specialCharRegExp.test(name)
    );
  };

  const checkDate = (year, month, day) => {
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }
    return day > monthLength[month - 1];
  };

  const onFormChange = (key, value) => {
    if (key.slice(0, 6) === 'birth') {
      value = Number(value);
    }
    dispatch(setValue(key, value));
  };

  const onSuccess = async () => {
    const userInfo = {
      email,
      firstName,
      lastName,
      pwd,
      birthday: `${birthYear}-${birthMonth}-${birthDay}`,
      phone,
      profileImg,
      description,
    };
    console.log('userInfo: ', userInfo);
    dispatch(signupRequest(userInfo));
  };

  const changeFocus = () => {
    const invalidCount = Object.values(invalid)
      .slice(0, 7)
      .filter(v => v).length;
    if (invalidCount) {
      refObj[
        `${
          Object.entries(invalid)
            .slice(0, 7)
            .find(v => v[1])[0]
        }Ref`
      ].current.focus();
      return;
    }
    onSuccess();
  };

  const checkForm = () => {
    const payload = {
      email: checkEmail(email),
      firstName: checkName(firstName),
      lastName: checkName(lastName),
      pwd: !pwdLevel,
      birthMonth:
        isNaN(birthMonth) || checkDate(birthYear, birthMonth, birthDay),
      birthDay: isNaN(birthDay) || checkDate(birthYear, birthMonth, birthDay),
      birthYear: isNaN(birthYear) || checkDate(birthYear, birthMonth, birthDay),
      phone: null,
      profileImg: null,
      description: null,
      pwdValidation: checkPwd(),
    };

    dispatch(setInvalid(payload));
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkForm();
  };

  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step,
    );

  const onGoogleLoginSuccess = res => {
    console.log('[googleLoginSucess]: ', res);
  };

  const onGoogleLoginFailure = res => {
    console.log('[googleLoginFailure]: ', res);
  };

  if (isPwdChanged) {
    updatePwd();
    dispatch(setIsPwdChanged(false));
  }

  if (isChecking) {
    changeFocus();
    dispatch(setIsChecking(false));
  }

  return (
    <SignupEmailModal
      modalVisible={modalVisible}
      form={form}
      invalid={invalid}
      refObj={refObj}
      range={range}
      loading={loading}
      result={result}
      isPwdFocused={isPwdFocused}
      openLoginModal={openLoginModal}
      closeModal={() => {
        dispatch(closeModal());
      }}
      onFormChange={onFormChange}
      handleSubmit={handleSubmit}
      onPwdFocused={onPwdFocused}
      onGoogleLoginSuccess={onGoogleLoginSuccess}
      onGoogleLoginFailure={onGoogleLoginFailure}
    ></SignupEmailModal>
  );
};
export default React.memo(SignupModalContainer);
