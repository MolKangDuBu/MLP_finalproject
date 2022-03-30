import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import Loader from '../Global/Loader';
import { Input } from '../Global/Input';
import { GoogleLogin } from 'react-google-login';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiMailLine, RiLock2Line } from 'react-icons/ri';
import { AiOutlineWarning } from 'react-icons/ai';

const StLoginModal = styled(Modal)`
  overflow-y: scroll;
`;

const StLoginModalWrapper = styled.div`
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

const StLoginForm = styled.form``;

const StInputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;

  & > svg {
    position: absolute;
    top: 17px;
    right: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

const StInput = styled(Input)`
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      background: #fff8f6;
      border: 1px solid ${({ theme }) => theme.color.warning};
      &:focus {
        border: 1px solid ${({ theme }) => theme.color.warning};
      }
    `};
`;

const StValidationText = styled.p`
  color: ${({ theme }) => theme.color.warning};
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0 0 5px;
`;

const StShowPwdButtonWrapper = styled.div`
  height: 20px;
  padding-right: 4px;
  display: flex;
  justify-content: flex-end;
`;

const StShowPwdButton = styled(Button)`
  color: ${({ theme }) => theme.color.green};
  font-size: 14px;
  padding: 0;
  border: none;
  border-radius: unset;
  &:hover {
    background: transparent;
    text-decoration: underline;
  }
`;

const StSubmitButton = styled(Button)`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  width: 100%;
  padding: 0;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  transition: 0.125s all ease-in;
  height: 52px;
  &:hover {
    background: ${({ theme }) => theme.color.main};
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
`;

const StSubmitLoader = styled(Loader)`
  top: -22px;
`;
const StSignupButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

const StSignupText = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const StSignupButton = styled(Button)`
  color: ${({ theme }) => theme.color.green};
  margin-left: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 0;
  border: none;
  border-radius: unset;
  &:hover {
    background: transparent;
    text-decoration: underline;
  }
`;

const StResultWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  font-size: 24px;
  font-weight: 500;
  height: 66px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 52px;
  height: 100%;
  padding: 20px 8px;
  font-size: 24px;
  background: #fc642e;
  color: ${({ theme }) => theme.color.white};
`;

const StResultTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-color: ${({ theme }) => theme.color.line};
  border-style: solid;
  border-width: 2px 2px 2px 0;
  border-radius: 0 8px 8px 0;
  padding: 20px 8px;
`;
const StResultText = styled.span`
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
  vertical-align: middle;
`;

const LoginModal = ({
  modalVisible,
  form,
  invalid,
  refObj,
  loading,
  result,
  isPwdShown,
  onFormChange,
  cleanupModal,
  openSignupMenuModal,
  closeModal,
  onToggleShowPwd,
  handleSubmit,
}) => {
  const { email, pwd } = form;
  const { emailRef, pwdRef } = refObj;
  return (
    <StLoginModal
      modalState={modalVisible}
      header
      width="570px"
      height="545px"
      title="로그인"
      setModalState={closeModal}
      cleanup={cleanupModal}
    >
      <StLoginModalWrapper>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={res => console.log(res)}
          onFailure={res => console.log(res)}
          render={() => (
            <StFacebookButton>
              <FaFacebookF />
              <StButtonText>페이스북 계정으로 로그인</StButtonText>
            </StFacebookButton>
          )}
        ></GoogleLogin>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_LOGIN_API_KEY}
          cookiePolicy={'single_host_origin'}
          onSuccess={res => console.log(res)}
          onFailure={res => console.log(res)}
          render={() => (
            <StGoogleButton>
              <FcGoogle />
              <StButtonText>구글 계정으로 로그인</StButtonText>
            </StGoogleButton>
          )}
        ></GoogleLogin>
        <StDividerLine />
        <StDividerText>또는</StDividerText>
        <StLoginForm onSubmit={handleSubmit}>
          {result && result !== 'Success' && (
            <StResultWrapper result={result}>
              <StErrorWrapper>
                <AiOutlineWarning></AiOutlineWarning>
              </StErrorWrapper>
              <StResultTextWrapper>
                {result === 'NoId' && (
                  <StResultText>
                    이 이메일 주소와 연결된 계정이 없습니다. 다른 이메일 주소를
                    사용해 보세요.
                  </StResultText>
                )}
                {result === 'WrongPwd' && (
                  <StResultText>비밀번호가 틀립니다.</StResultText>
                )}
              </StResultTextWrapper>
            </StResultWrapper>
          )}
          <StInputWrapper>
            <StInput
              value={email}
              onChange={({ target: { value } }) => onFormChange('email', value)}
              focusBorderColor
              placeholder="이메일 주소"
              ref={emailRef}
              isInvalid={invalid.email}
            ></StInput>
            <RiMailLine />
            {email.length === 0 && invalid.email && (
              <StValidationText isInvalid={invalid.email}>
                이메일을 입력하세요.
              </StValidationText>
            )}
            {email.length > 0 && invalid.email && (
              <StValidationText isInvalid={invalid.email}>
                이메일 형식이 맞지 않습니다.
              </StValidationText>
            )}
          </StInputWrapper>
          <StInputWrapper name="password">
            <StInput
              type={isPwdShown ? 'text' : 'password'}
              value={pwd}
              onChange={({ target: { value } }) => onFormChange('pwd', value)}
              focusBorderColor
              placeholder="비밀번호"
              ref={pwdRef}
              isInvalid={invalid.pwd}
            ></StInput>
            <RiLock2Line />
            {pwd.length === 0 && invalid.pwd && (
              <StValidationText isInvalid={invalid.pwd}>
                비밀번호를 입력하세요.
              </StValidationText>
            )}
            {pwd.length > 0 && invalid.pwd && (
              <StValidationText isInvalid={invalid.pwd}>
                비밀번호는 최소 8글자 이상이어야 합니다. 다시 시도해 주세요.
              </StValidationText>
            )}
          </StInputWrapper>
          <StShowPwdButtonWrapper>
            <StShowPwdButton onClick={onToggleShowPwd}>
              {isPwdShown ? '비밀번호 숨기기' : '비밀번호 보이기'}
            </StShowPwdButton>
          </StShowPwdButtonWrapper>
          <StSubmitButton border="none" type="submit" disabled={loading}>
            {loading ? <StSubmitLoader /> : '로그인하기'}
          </StSubmitButton>
        </StLoginForm>
        <StDividerLine />
        <StSignupButtonWrapper>
          <StSignupText>에어비앤비 계정이 없으세요? </StSignupText>
          <StSignupButton btnType="color" onClick={openSignupMenuModal}>
            회원가입하기
          </StSignupButton>
        </StSignupButtonWrapper>
      </StLoginModalWrapper>
    </StLoginModal>
  );
};

export default React.memo(LoginModal);
