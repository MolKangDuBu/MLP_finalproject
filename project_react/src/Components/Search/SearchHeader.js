import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Logo from '../Main/Logo';
import Navigation from '../Main/Navigation';
import SearchFormContainer from '../../Containers/Main/SearchFormContainer';
import SettingButtonContainer from '../../Containers/Main/SettingButtonContainer';
import MyPageButtonContainer from '../../Containers/Main/MyPageButtonContainer';
import Button from '../Global/Button';
import { FiSearch } from 'react-icons/fi';

const StSearchHeader = styled.header`
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  height: ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked ? '180px' : '80px'};
  background: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  padding: 20px 20px 15px 20px;
  @media ${({ theme }) => theme.size.iPad} {
    height: ${({ isSearchBtnClicked }) =>
      isSearchBtnClicked ? '230px' : '80px'};
  }
`;

const slideDown = keyframes`
  from {
    transform: scale(0.3, 0.75) translateY(-80px);
  }
  to {
    transform: scale(1, 1) translateY(0px);
  }
`;

const slideUp = keyframes`
  from {
    transform: scale(1, 1) translateY(0px);
    opacity: 0.5;
  }
  to {
    transform: scale(0.3, 0.75) translateY(-80px);
    opacity: 0;
    visibility: hidden;
  }
`;

const StNavSearchWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc(50vw - 425px);
  width: 850px;
  display: flex;
  flex-direction: column;
  z-index: -100;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked ? slideDown : slideUp};
  animation: ${({ initAnimation }) => !initAnimation && 'none'};
  display: ${({ initAnimation }) => (initAnimation ? 'flex' : 'none')};
  @media ${({ theme }) => theme.size.medium} {
    width: 76%;
    top: 0;
    left: calc(50vw - 38%);
  }

  @media ${({ theme }) => theme.size.iPad} {
    width: 90%;
    top: 50px;
    left: calc(50vw - 45%);
  }
`;

const StButtonGroupWrapper = styled.div`
  height: 40px;
  display: flex;
`;

const StOnScrollSearchButton = styled(Button)`
  ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked &&
    css`
      display: none;
    `}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px 10px 20px;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.line};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.line};
    transition: box-shadow 0.2s ease;
    box-shadow: 2px 2px 4px 0px rgba(168, 168, 168, 0.5);
  }
`;

const StOnScrollSearchButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 20px;
`;

const StSearchFormResultWrapper = styled.div`
  display: flex;
  font-size: 13px;
  padding: 5px 20px;
  border-right: ${({ guestCount, theme }) =>
    !guestCount && `1px solid ${theme.color.line}`};
  font-weight: ${({ dataExists }) => (dataExists ? 600 : 400)};
  color: ${({ dataExists, theme }) =>
    dataExists ? theme.color.black : theme.color.darkGray};
`;

const SearchHeader = ({
  initAnimation,
  isSearchBtnClicked,
  handleLogoClick,
  handleSearchBtnClick,
  searchForm,
}) => {
  const { location, checkIn, checkOut, guests } = searchForm;
  const [, checkInMonth, checkInDay] =
    checkIn && checkIn.replace(/\b0/g, '').split('.');
  const [, checkOutMonth, checkOutDay] =
    checkOut && checkOut.replace(/\b0/g, '').split('.');
  const { adult, child } = guests;
  const guestCount = +adult + +child;
  return (
    <StSearchHeader isSearchBtnClicked={isSearchBtnClicked}>
      <Logo handleLogoClick={handleLogoClick}></Logo>
      <StNavSearchWrapper
        isSearchBtnClicked={isSearchBtnClicked}
        initAnimation={initAnimation}
      >
        <Navigation isSearchBtnClicked={isSearchBtnClicked}></Navigation>
        <SearchFormContainer isSearchBtnClicked={isSearchBtnClicked} />
      </StNavSearchWrapper>

      <StOnScrollSearchButton
        btnType="oval"
        fontSize="14px"
        onClick={handleSearchBtnClick}
        isSearchBtnClicked={isSearchBtnClicked}
      >
        <StSearchFormResultWrapper dataExists={location}>
          {location || '장소 추가'}
        </StSearchFormResultWrapper>
        <StSearchFormResultWrapper dataExists={checkIn}>
          {checkInMonth
            ? `${checkInMonth}월 ${checkInDay}일 - ${checkOutMonth}월 ${checkOutDay}일`
            : '날짜 추가'}
        </StSearchFormResultWrapper>
        <StSearchFormResultWrapper guestCount dataExists={guestCount}>
          {guestCount ? `게스트 ${guestCount}명` : '게스트 추가'}
        </StSearchFormResultWrapper>
        <StOnScrollSearchButtonIconWrapper>
          <FiSearch />
        </StOnScrollSearchButtonIconWrapper>
      </StOnScrollSearchButton>

      <StButtonGroupWrapper>
        <SettingButtonContainer />
        <MyPageButtonContainer />
      </StButtonGroupWrapper>
    </StSearchHeader>
  );
};

export default SearchHeader;
