import React from 'react';
import styled, { css } from 'styled-components';
import CommonLayout from './CommonLayout';
import Toggle from '../Global/Toggle';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import DeatailGuestPopupContainer from '../../Containers/Detail/DeatailGuestPopupContainer';

const GuestInfo = ({
  hostFirstName,
  profileImg,
  isSupperhost,
  onNextPage,
  onSetMessage,
  onToggle,
  toggle,
  toHostMessage,
  blankMessage,
}) => {
  return (
    <CommonLayout title="일행이 있나요?">
      <StGuestsWrapper>
        <StSubTitle padding="16px 0">인원</StSubTitle>
        <StGuestPopup />
      </StGuestsWrapper>
      <StBusinessWrapper>
        <StSubTitle>출장을 떠나시나요?</StSubTitle>
        <Toggle checked={toggle} handleClick={onToggle} />
      </StBusinessWrapper>
      <StToHostWrapper>
        <div>
          <StSubTitle>호스트에게 인사하기</StSubTitle>
          <div>
            {hostFirstName}님에게 간단히 자신을 소개하고 여행 목적에 대해
            알려주세요.
          </div>
        </div>
        <Profile
          size="48px"
          lastName={hostFirstName}
          mark
          isSupperhost={isSupperhost}
          profileImg={profileImg}
        />
      </StToHostWrapper>
      <StTextarea
        value={toHostMessage}
        onBlur={onSetMessage}
        onChange={onSetMessage}
        placeholder={`${hostFirstName}님, 안녕하세요! 숙소에서 보낼 멋진 2박이 기다려집니다!`}
        blankMessage={blankMessage}
      ></StTextarea>
      {blankMessage && (
        <StWarningMsg>호스트에게 전할 메세지를 입력하세요</StWarningMsg>
      )}
      <StButton btnType="color" color="main" onClick={onNextPage}>
        계속하기
      </StButton>
    </CommonLayout>
  );
};

const StGuestsWrapper = styled.div`
  margin-bottom: 48px;
  width: 50%;
`;

const StSubTitle = styled.h3`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 26px;
  padding: ${props => props.padding || '0'};
`;

const StGuestPopup = styled(DeatailGuestPopupContainer)`
  padding: 8px 16px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 2px;
  div {
    font-size: 1.6rem;
  }
  div:last-child {
    top: 38px;
  }
`;

const StBusinessWrapper = styled.div`
  margin-bottom: 48px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StToHostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 32px;

  & > div {
    display: inline-block;
    width: calc(100% - 48px);
  }

  & > a {
    @media ${({ theme }) => theme.size.medium} {
      order: -1;
      margin-right: calc(100% - 48px);
      margin-bottom: 8px;
    }
  }
`;

const StTextarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 12rem;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border-color: ${({ theme }) => theme.color.line};

  &:focus {
    border-color: ${({ theme }) => theme.color.green};
  }

  ${({ blankMessage }) =>
    blankMessage &&
    css`
      background-color: #fff8f6;
      border-color: ${({ theme }) => theme.color.warning} !important;
    `}
`;

const StWarningMsg = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.warning};
`;

const StButton = styled(Button)`
  padding: 14px 24px;
  margin: 64px 0;
`;

export default GuestInfo;
