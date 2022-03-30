import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import { GoogleLogin } from 'react-google-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';
const StSignupMenuModal = styled(Modal)``;

const StSignupFormWrapper = styled.div`
  padding: 20px;
`;

const StDividerLine = styled.hr`
  border: none;
  margin: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const StDividerText = styled.span`
  position: absolute;
  font-size: 14px;
  top: 210px;
  left: calc(50% - 34px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StFacebookButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  background: #4568b1;
  color: ${({ theme }) => theme.color.white};
  transition: 0.125s all ease-in;
  height: 52px;
  margin-bottom: 12px;
  border: none;

  &:hover {
    background: #4568b1;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StGoogleButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  transition: 0.125s all ease-in;
  height: 52px;
  border: 2px solid #495057;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StButtonText = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

const StEmailButton = styled(Button)`
  width: 100%;
  font-size: 22px;
  height: 52px;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border: none;
  &:hover {
    background: ${({ theme }) => theme.color.main};
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StLoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StLoginText = styled.span`
  font-size: 14px;
  line-height: 19px;
`;

const StLoginButton = styled(Button)`
  margin-top: 5px;
  margin-left: 10px;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.green};
  border-radius: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const SignupMenuModal = ({
  modalVisible,
  openLoginModal,
  openSignupEmailModal,
  closeModal,
  onSuccessGoogle,
  onFailureGoogle,
}) => {
  return (
    <StSignupMenuModal
      modalState={modalVisible}
      header
      title="회원가입"
      width="570px"
      height="380px"
      setModalState={closeModal}
    >
      <StSignupFormWrapper>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={onSuccessGoogle}
          onFailure={onFailureGoogle}
          render={renderProps => (
            <StFacebookButton onClick={renderProps.onClick}>
              <FaFacebookF />
              <StButtonText>페이스북 계정으로 회원 가입</StButtonText>
            </StFacebookButton>
          )}
        ></GoogleLogin>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={onSuccessGoogle}
          onFailure={onFailureGoogle}
          render={renderProps => (
            <StGoogleButton onClick={renderProps.onClick}>
              <FcGoogle />
              <StButtonText>구글 계정으로 회원 가입</StButtonText>
            </StGoogleButton>
          )}
        ></GoogleLogin>
        <StDividerLine />
        <StDividerText>또는</StDividerText>
        <StEmailButton onClick={openSignupEmailModal}>
          <AiOutlineMail />
          <StButtonText>이메일로 회원 가입</StButtonText>
        </StEmailButton>
        <StDividerLine />
        <StLoginButtonWrapper>
          <StLoginText>이미 에어비앤비 계정이 있나요?</StLoginText>
          <StLoginButton btnType="color" onClick={openLoginModal}>
            로그인
          </StLoginButton>
        </StLoginButtonWrapper>
      </StSignupFormWrapper>
    </StSignupMenuModal>
  );
};

export default React.memo(SignupMenuModal);
