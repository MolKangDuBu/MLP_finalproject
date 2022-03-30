import React from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';
import DropDown from '../Global/DropDown';
import Loader from '../Global/Loader';
import { Input } from '../Global/Input';
import { RiEyeCloseLine, RiMailLine, RiUserLine } from 'react-icons/ri';
import { MdCheck, MdClose } from 'react-icons/md';
import { AiOutlineWarning } from 'react-icons/ai';

const StSignupEmailModal = styled(Modal)`
  overflow-y: scroll;
`;

const StDividerLine = styled.hr`
  border: none;
  margin: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const StSignupFormWrapper = styled.div`
  padding: 20px;
`;

const StSignupForm = styled.form`
  width: 100%;
`;

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

const StBirthDayTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding: 10px 5px;
  color: ${({ theme }) => theme.color.black};
`;

const StBirthDayText = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding-left: 5px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StValidationText = styled.p`
  color: ${({ theme }) => theme.color.warning};
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0 0 5px;
`;

const StPwdValidationList = styled.div`
  margin-top: 5px;
  padding-left: 5px;
`;

const StPwdValidationItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: ${({ theme, isPwdValid }) =>
    isPwdValid ? '#2f9e44' : theme.color.warning};
`;

const StPwdValidationText = styled.span`
  font-size: 14px;
  padding-left: 5px;
`;

const StPwdValidationLevelText = styled.span`
  color: ${({ pwdLevel, theme }) =>
    pwdLevel ? '#2f9e44' : theme.color.warning};
`;

const StBirthDayWrapper = styled.div`
  display: flex;
  background: transparent;
  justify-content: space-between;
  padding-top: 20px;
`;

const StBirthDayDropDown = styled(DropDown)`
  ${({ isInvalid }) =>
    isInvalid &&
    css`
      border: 1px solid ${({ theme }) => theme.color.warning};
      background: #fff8f6;
      &:focus {
        border: 1px solid ${({ theme }) => theme.color.warning};
        background: #fff8f6;
        & + span {
          color: ${({ theme }) => theme.color.warning};
        }
      }
    `};
`;

const StSubmitButton = styled(Button)`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  width: 100%;
  padding: 20px 0;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  transition: 0.125s all ease-in;
  height: 52px;
  &:hover {
    background: ${({ theme }) => theme.color.main};
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
  }
  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
    `}
`;

const StLoginButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StLoginText = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const StLoginButton = styled(Button)`
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
  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
    `}
`;

const StSubmitLoader = styled(Loader)`
  top: -22px;
`;

const StResultWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  font-size: 24px;
  font-weight: 500;
  height: 66px;
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

const SignupEmailModal = ({
  modalVisible,
  form,
  invalid,
  refObj,
  range,
  loading,
  result,
  isPwdFocused,
  openLoginModal,
  closeModal,
  cleanupModal,
  onFormChange,
  handleSubmit,
  onPwdFocused,
  onGoogleLoginSuccess,
  onGoogleLoginFailure,
}) => {
  const {
    email,
    firstName,
    lastName,
    pwd,
    birthMonth,
    birthDay,
    birthYear,
  } = form;
  const {
    pwdValidation: { pwdLevel, pwdLength, pwdContain, pwdCase },
  } = invalid;
  const {
    emailRef,
    firstNameRef,
    lastNameRef,
    pwdRef,
    birthMonthRef,
    birthDayRef,
    birthYearRef,
  } = refObj;
  return (
    <StSignupEmailModal
      modalState={modalVisible}
      header
      title="회원가입"
      width="570px"
      height="670px"
      setModalState={closeModal}
      cleanup={cleanupModal}
    >
      <StSignupFormWrapper>
        <StSignupForm onSubmit={handleSubmit}>
          {result && result !== 'Success' && (
            <StResultWrapper result={result}>
              <StErrorWrapper>
                <AiOutlineWarning></AiOutlineWarning>
              </StErrorWrapper>
              <StResultTextWrapper>
                {result === 'AlreadyEmail' && (
                  <StResultText>이메일이 이미 존재합니다.</StResultText>
                )}
                {result === 'Error' && (
                  <StResultText>회원가입에 실패하였습니다.</StResultText>
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
            {email.length > 0 && invalid.email && result !== 'AlreadyEmail' && (
              <StValidationText isInvalid={invalid.email}>
                이메일 형식이 맞지 않습니다.
              </StValidationText>
            )}
          </StInputWrapper>
          <StInputWrapper>
            <StInput
              value={firstName}
              onChange={({ target: { value } }) =>
                onFormChange('firstName', value)
              }
              focusBorderColor
              placeholder="이름 (예: 길동)"
              ref={firstNameRef}
              isInvalid={invalid.firstName}
            ></StInput>
            <RiUserLine />
            {firstName.length === 0 && invalid.firstName && (
              <StValidationText isInvalid={invalid.firstName}>
                이름을 입력하세요.
              </StValidationText>
            )}
            {firstName.length > 35 && invalid.firstName && (
              <StValidationText isInvalid={invalid.firstName}>
                이름을 입력할 수 있는 최대 글자 수는 35자입니다. 다시
                시도하세요.
              </StValidationText>
            )}
            {firstName.length !== 0 &&
              firstName.length < 35 &&
              invalid.firstName && (
                <StValidationText isInvalid={invalid.firstName}>
                  이름에 유효한 글자를 입력하세요.
                </StValidationText>
              )}
          </StInputWrapper>

          <StInputWrapper>
            <StInput
              value={lastName}
              onChange={({ target: { value } }) =>
                onFormChange('lastName', value)
              }
              focusBorderColor
              placeholder="성 (예: 홍)"
              ref={lastNameRef}
              isInvalid={invalid.lastName}
            ></StInput>
            <RiUserLine />
            {lastName.length === 0 && invalid.lastName && (
              <StValidationText isInvalid={invalid.lastName}>
                성을 입력하세요.
              </StValidationText>
            )}
            {lastName.length > 35 && invalid.lastName && (
              <StValidationText isInvalid={invalid.lastName}>
                성을 입력할 수 있는 최대 글자 수는 35자입니다. 다시 시도하세요.
              </StValidationText>
            )}
            {lastName.length !== 0 &&
              lastName.length < 35 &&
              invalid.lastName && (
                <StValidationText isInvalid={invalid.lastName}>
                  성에 유효한 글자를 입력하세요.
                </StValidationText>
              )}
          </StInputWrapper>
          <StInputWrapper name="password">
            <StInput
              type="password"
              value={pwd}
              onChange={({ target: { value } }) => onFormChange('pwd', value)}
              onFocus={() => onPwdFocused(true)}
              focusBorderColor
              placeholder="비밀번호 설정하기"
              ref={pwdRef}
              isInvalid={invalid.pwd}
            ></StInput>
            <RiEyeCloseLine />
            {pwd.length === 0 && invalid.pwd && (
              <StValidationText isInvalid={invalid.pwd}>
                비밀번호를 입력하세요.
              </StValidationText>
            )}
            {pwd.length > 0 && invalid.pwd && (
              <StValidationText isInvalid={invalid.pwd}>
                비밀번호 형식이 맞지 않습니다.
              </StValidationText>
            )}
            {isPwdFocused && (
              <StPwdValidationList>
                <StPwdValidationItem isPwdValid={pwdLevel}>
                  {pwdLevel >= 1 ? <MdCheck /> : <MdClose />}
                  <StPwdValidationText>
                    비밀번호 보안 수준:
                    <StPwdValidationLevelText pwdLevel={pwdLevel}>
                      {pwdLevel
                        ? pwdLevel === 2
                          ? ' 강함'
                          : ' 보통'
                        : ' 약함'}
                    </StPwdValidationLevelText>
                  </StPwdValidationText>
                </StPwdValidationItem>
                {pwdLevel === 0 && (
                  <>
                    <StPwdValidationItem isPwdValid={pwdContain}>
                      {pwdContain ? <MdCheck /> : <MdClose />}
                      <StPwdValidationText>
                        비밀번호에 본인 이름이나 이메일 주소를 포함할 수
                        없습니다.
                      </StPwdValidationText>
                    </StPwdValidationItem>
                    <StPwdValidationItem isPwdValid={pwdLength}>
                      {pwdLength ? <MdCheck /> : <MdClose />}
                      <StPwdValidationText>최소 8자</StPwdValidationText>
                    </StPwdValidationItem>
                    <StPwdValidationItem isPwdValid={pwdCase}>
                      {pwdCase ? <MdCheck /> : <MdClose />}
                      <StPwdValidationText>
                        숫자나 기호를 포함하세요
                      </StPwdValidationText>
                    </StPwdValidationItem>
                  </>
                )}
              </StPwdValidationList>
            )}
          </StInputWrapper>
          <StBirthDayTitle>생일</StBirthDayTitle>
          <StBirthDayText>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
            에어비앤비 이용자에게 공개되지 않습니다.
          </StBirthDayText>
          <StBirthDayWrapper>
            <StBirthDayDropDown
              name="birthMonth"
              width="40%"
              title="월"
              options={range(1, 12, 1)}
              outline
              value={birthMonth}
              isInvalid={invalid.birthMonth}
              onChange={({ target: { value } }) =>
                onFormChange('birthMonth', value)
              }
              ref={birthMonthRef}
            ></StBirthDayDropDown>
            <StBirthDayDropDown
              name="birthDay"
              width="22%"
              title="일"
              options={range(1, 31, 1)}
              outline
              value={birthDay}
              isInvalid={invalid.birthDay}
              onChange={({ target: { value } }) =>
                onFormChange('birthDay', value)
              }
              ref={birthDayRef}
            ></StBirthDayDropDown>
            <StBirthDayDropDown
              name="birthYear"
              width="33%"
              title="년"
              options={range(1900, new Date().getFullYear(), 1).reverse()}
              outline
              value={birthYear}
              isInvalid={invalid.birthYear}
              onChange={({ target: { value } }) =>
                onFormChange('birthYear', value)
              }
              ref={birthYearRef}
            ></StBirthDayDropDown>
          </StBirthDayWrapper>
          {(isNaN(birthMonth) || isNaN(birthDay) || isNaN(birthYear)) &&
            (invalid.birthMonth || invalid.birthDay || invalid.birthYear) && (
              <StValidationText>
                계속하시려면 생일을 선택하세요.
              </StValidationText>
            )}
          {!isNaN(birthMonth) &&
            !isNaN(birthDay) &&
            !isNaN(birthYear) &&
            (invalid.birthMonth || invalid.birthDay || invalid.birthYear) && (
              <StValidationText>
                입력하신 생일을 다시 한번 확인하세요. 올바른 날짜 형식이
                아닙니다.
              </StValidationText>
            )}
          <StSubmitButton isLoading={loading} border="none" type="submit">
            {loading ? <StSubmitLoader /> : '가입하기'}
          </StSubmitButton>
        </StSignupForm>
        <StDividerLine />
        <StLoginButtonWrapper>
          <StLoginText>이미 에어비앤비 계정이 있나요?</StLoginText>
          <StLoginButton
            isLoading={loading}
            btnType="color"
            onClick={openLoginModal}
          >
            로그인
          </StLoginButton>
        </StLoginButtonWrapper>
      </StSignupFormWrapper>
    </StSignupEmailModal>
  );
};

export default React.memo(SignupEmailModal);
