import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Popup from '../Global/Popup';

const StMyPagePopupWrapper = styled.div`
  position: relative;
`;

const StMyPagePopup = styled(Popup)`
  right: 0px;
  width: 250px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.black};
`;

const StMyPageOptionItem = styled.li``;

const StMyPageOptionList = styled.ul`
  ${({ isLoggedIn }) =>
    isLoggedIn
      ? css`
          & ${StMyPageOptionItem}:nth-child(-n+3) {
            font-weight: 600;
          }
          & ${StMyPageOptionItem}:nth-child(3n)::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.color.line};
            margin-top: 0.6rem;
            margin-bottom: 0.6rem;
          }
        `
      : css`
          & ${StMyPageOptionItem}:nth-child(1) {
            font-weight: 600;
          }
          & ${StMyPageOptionItem}:nth-child(2)::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: ${({ theme }) => theme.color.line};
            margin-top: 0.6rem;
            margin-bottom: 0.6rem;
          }
        `}
`;

const StMyPageOptionButton = styled.button`
  display: inline-flex;
  justify-content: flex-start;
  outline: none;
  border: none;
  font-weight: inherit;
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const MyPagePopup = ({
  popupVisible,
  closePopup,
  isLoggedIn,
  openModalByName,
  movePage,
  onClickLogout,
}) => {
  const popupRef = useRef();
  const handlePopup = ({ target }) => {
    if (popupVisible && !popupRef.current.contains(target)) {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup]);
  return (
    <StMyPagePopupWrapper ref={popupRef}>
      <StMyPagePopup popupState={popupVisible} right="0" padding="1rem 0">
        <StMyPageOptionList isLoggedIn={isLoggedIn}>
          {!isLoggedIn && (
            <>
              <StMyPageOptionItem>
                <StMyPageOptionButton onClick={() => openModalByName('login')}>
                  로그인
                </StMyPageOptionButton>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionButton
                  onClick={() => openModalByName('signup_menu')}
                >
                  회원가입
                </StMyPageOptionButton>
              </StMyPageOptionItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <StMyPageOptionItem>
                <StMyPageOptionButton
                  onClick={() => {
                    movePage('guest/inbox');
                  }}
                >
                  메시지
                </StMyPageOptionButton>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionButton
                  onClick={() => {
                    movePage('trips/v1?tab=upcoming');
                  }}
                >
                  여행
                </StMyPageOptionButton>
              </StMyPageOptionItem>
              <StMyPageOptionItem>
                <StMyPageOptionButton
                  onClick={() => {
                    movePage('wishlists');
                  }}
                >
                  저장목록
                </StMyPageOptionButton>
              </StMyPageOptionItem>
            </>
          )}

          <StMyPageOptionItem>
            <StMyPageOptionButton>숙소 호스트 되기</StMyPageOptionButton>
          </StMyPageOptionItem>
          <StMyPageOptionItem>
            <StMyPageOptionButton>체험 호스팅하기</StMyPageOptionButton>
          </StMyPageOptionItem>
          {isLoggedIn && (
            <StMyPageOptionItem>
              <StMyPageOptionButton>계정</StMyPageOptionButton>
            </StMyPageOptionItem>
          )}
          <StMyPageOptionItem>
            <StMyPageOptionButton>도움말</StMyPageOptionButton>
          </StMyPageOptionItem>
          {isLoggedIn && (
            <StMyPageOptionItem>
              <StMyPageOptionButton onClick={onClickLogout}>
                로그아웃
              </StMyPageOptionButton>
            </StMyPageOptionItem>
          )}
        </StMyPageOptionList>
      </StMyPagePopup>
    </StMyPagePopupWrapper>
  );
};

export default React.memo(MyPagePopup);
