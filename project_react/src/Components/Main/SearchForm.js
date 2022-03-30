import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import SearchButton from './SearchButton';
import SearchLocationPopup from './SearchLocationPopup';
import SearchCalendarPopup from './SearchCalendarPopup';
import SearchGuestsPopup from './SearchGuestsPopup';
import { MdClose } from 'react-icons/md';

const StSearchForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 66px;
  border-radius: 34px;
  display: flex;
  color: ${({ theme }) => theme.color.black};

  ${({ isSearchBtnClicked }) =>
    isSearchBtnClicked
      ? css`
          border: 1px solid ${({ theme }) => theme.color.line};
        `
      : css`
          border: 1px solid transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 32px,
            rgba(0, 0, 0, 0.1) 0px 3px 8px;
        `};
`;

const StTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

const StFormItemWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 68px;
  margin-top: -2px;
  outline: none;

  &:not(:first-child) ${StTextWrapper}::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    display: block;
    height: 100%;
    width: 1px;
    background: ${({ theme }) => theme.color.gray};
    @media screen and (max-width: 950px) {
      left: -17px;
    }
  }

  ${({ type, name }) =>
    !(type === 'checkIn' && name === 'checkOut') &&
    css`
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 34px;
        margin-top: -1px;
        height: 66px;
        ${StTextWrapper}::before {
          display: none;
        }
      }

      &:hover + & {
        ${StTextWrapper}::before {
          display: none;
        }
      }
    `}

  &:focus-within {
    background: white;
    border-radius: 34px;
    height: 66px;
    margin-top: -1px;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);
    ${StTextWrapper}::before {
      display: none;
    }
    button {
      display: inline-flex;
    }
  }

  &:focus-within + & {
    ${StTextWrapper}::before {
      display: none;
    }
  }
  ${({ name }) =>
    name === 'location' ||
    css`
      display: flex;
      align-items: center;
      padding-left: 20px;
      cursor: pointer;
      @media screen and (max-width: 950px) {
        padding-left: 17px;
      }
    `}
`;

const StPlaceLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 28px;
  cursor: pointer;
  &:hover {
    border-radius: 34px;
    & ${StTextWrapper}::before {
      display: none;
    }
  }
  &:focus-within {
    background: white;
    border-radius: 34px;
    & ${StTextWrapper}::before {
      display: none;
    }
  }
`;

const StPlaceInput = styled.input`
  position: relative;
  top: -2px;
  background: transparent;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 18px;
  margin-top: -10px;
  padding: 0;
  outline: none;
  border: none;
  font-weight: ${({ value }) => value && 500};
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::-ms-placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  @media screen and (max-width: 950px) {
    font-size: 12px;
    width: 100px;
  }
`;

const StTypeText = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
`;

const StContentText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme, value }) =>
    theme && value
      ? css`
          ${({ theme }) => theme.color.black}
        `
      : css`
          ${({ theme }) => theme.color.darkGray}
        `};
  font-weight: ${({ value }) => value && 500};
  @media ${({ theme }) => theme.size.iPad} {
    font-size: 12px;
    width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media screen and (max-width: 950px) {
    font-size: 12px;
    width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StResetBtn = styled(Button)`
  position: absolute;
  display: inline-flex;
  width: 26px;
  height: 26px;
  font-size: 16px;
  top: calc(50% - 13px);
  right: ${({ name }) => (name === 'guests' ? '65px' : '15px')};
  border: none;
  background: ${({ theme }) => theme.color.shadow};
  ${({ pointer }) =>
    pointer
      ? css`
          pointer-events: auto;
          visibility: auto;
        `
      : css`
          pointer-events: none;
          visibility: hidden;
        `};
  &:hover {
    background: ${({ theme }) => theme.color.line};
  }
  @media ${({ theme }) => theme.size.iPad} {
    right: ${({ name }) => (name === 'guests' ? '55px' : '10px')};
  }

  @media screen and (max-width: 950px) {
    width: 22px;
    height: 22px;
    font-size: 14px;
    top: calc(50% - 11px);
    right: ${({ name }) => (name === 'guests' ? '55px' : '10px')};
  }
`;

const SearchForm = ({
  isSearchBtnClicked,
  type,
  changeType,
  searchData,
  changeSearchData,
  changeAutoComplete,
  locationResult,
  handleSubmit,
  setCheckIn,
  setCheckOut,
  increaseGuestCount,
  decreaseGuestCount,
  refObj,
}) => {
  const { location, checkIn, checkOut, guests } = searchData;
  const { adult, child, infant } = guests;
  const guestCount = adult + child + infant;

  const {
    searchFormRef,
    locationWrapperRef,
    checkInWrapperRef,
    checkOutWrapperRef,
    guestsWrapperRef,
    locationListRef,
    calendarPopupRef,
    guestsPopupRef,
    locationResetBtnRef,
    checkInResetBtnRef,
    checkOutResetBtnRef,
    guestsResetBtnRef,
  } = refObj;

  return (
    <StSearchForm
      onSubmit={handleSubmit}
      isSearchBtnClicked={isSearchBtnClicked}
      ref={searchFormRef}
    >
      <StFormItemWrapper
        type={type}
        name="location"
        width="30%"
        tabIndex="1"
        ref={locationWrapperRef}
        onClick={() => changeType('location')}
      >
        <StPlaceLabel>
          <StTextWrapper>
            <StTypeText>위치</StTypeText>
            <StPlaceInput
              value={location}
              name="location"
              placeholder="어디로 여행가세요?"
              onFocus={e => {
                changeAutoComplete(e.target.value);
              }}
              onChange={e => {
                changeAutoComplete(e.target.value);
              }}
              autoComplete="off"
              required
            ></StPlaceInput>
          </StTextWrapper>
        </StPlaceLabel>
        <SearchLocationPopup
          type={type}
          changeType={changeType}
          searchData={searchData}
          ref={locationListRef}
          locationResult={locationResult}
          changeSearchData={changeSearchData}
        ></SearchLocationPopup>
        <StResetBtn
          btnType="circle"
          name="location"
          ref={locationResetBtnRef}
          pointer={type === 'location' && location}
          onClick={() => {
            changeSearchData('location', '');
          }}
        >
          <MdClose />
        </StResetBtn>
      </StFormItemWrapper>
      <StFormItemWrapper
        type={type}
        name="checkIn"
        width="20%"
        tabIndex="2"
        ref={checkInWrapperRef}
      >
        <StTextWrapper>
          <StTypeText>체크인</StTypeText>
          <StContentText value={checkIn}>
            {checkIn || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        <StResetBtn
          btnType="circle"
          name="checkIn"
          pointer={type === 'checkIn' && checkIn}
          ref={checkInResetBtnRef}
          onClick={() => {
            changeSearchData('checkIn', '');
            checkOut && changeSearchData('checkOut', '');
          }}
        >
          <MdClose />
        </StResetBtn>
      </StFormItemWrapper>
      <StFormItemWrapper
        type={type}
        name="checkOut"
        width="20%"
        tabIndex="3"
        ref={checkOutWrapperRef}
      >
        <SearchCalendarPopup
          type={type}
          changeType={changeType}
          searchData={searchData}
          ref={calendarPopupRef}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
        ></SearchCalendarPopup>
        <StTextWrapper>
          <StTypeText>체크아웃</StTypeText>
          <StContentText value={checkOut}>
            {checkOut || '날짜 추가'}
          </StContentText>
        </StTextWrapper>
        <StResetBtn
          btnType="circle"
          name="checkOut"
          pointer={type === 'checkOut' && checkOut}
          ref={checkOutResetBtnRef}
          onClick={() => {
            changeSearchData('checkOut', '');
          }}
        >
          <MdClose />
        </StResetBtn>
      </StFormItemWrapper>
      <StFormItemWrapper
        type={type}
        name="guests"
        width="30%"
        tabIndex="4"
        ref={guestsWrapperRef}
      >
        <StTextWrapper>
          <StTypeText>인원</StTypeText>
          <StContentText value={guestCount} name="guests">
            {guestCount
              ? !infant
                ? `게스트 ${+adult + +child}명`
                : `게스트 ${+adult + +child}명, 유아 ${infant}명`
              : '게스트 추가'}
          </StContentText>
        </StTextWrapper>
        <StResetBtn
          btnType="circle"
          name="guests"
          pointer={type === 'guests' && guestCount > 0}
          ref={guestsResetBtnRef}
          onClick={() => {
            changeSearchData('guests', { adult: 0, child: 0, infant: 0 });
          }}
        >
          <MdClose />
        </StResetBtn>
        <SearchGuestsPopup
          type={type}
          searchData={searchData}
          increaseGuestCount={increaseGuestCount}
          decreaseGuestCount={decreaseGuestCount}
          ref={guestsPopupRef}
        ></SearchGuestsPopup>
      </StFormItemWrapper>
      <SearchButton></SearchButton>
    </StSearchForm>
  );
};
export default React.memo(SearchForm);
