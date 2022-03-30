/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { FiPlus, FiMinus } from 'react-icons/fi';
const StSearchGuestsPopupWrapper = styled.div`
  position: relative;
`;

const StSearchGuestsPopup = styled(Popup)`
  top: 46px;
  right: 0px;
  border-radius: 20px;
  padding: 20px;
  min-width: 360px;
  color: ${({ theme }) => theme.color.black};
`;

const StSearchGuestsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StSearchGuestsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.line};
  }
`;

const StSearchGuestsTextWrapper = styled.div``;

const StSearchGuestsType = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const StSearchGuestsTypeAge = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StSearchGuestsCountWrapper = styled.div``;

const StSearchGuestsCountBtn = styled(Button)`
  border-color: ${({ theme }) => theme.color.gray};
  &:hover {
    border-color: ${({ theme }) => theme.color.black};
  }
  ${({ minusBtn, guestCount }) =>
    minusBtn &&
    !guestCount &&
    css`
      border-color: ${({ theme }) => theme.color.line};
      color: ${({ theme }) => theme.color.line};
      cursor: not-allowed;
      &:hover {
        border-color: ${({ theme }) => theme.color.line};
      }
    `}
`;

const StSearchGuestsCount = styled.span`
  display: inline-block;
  text-align: center;
  width: 30px;
`;

const SearchGuestsPopup = forwardRef(
  ({ type, searchData, increaseGuestCount, decreaseGuestCount }, ref) => {
    const { guests } = searchData;
    const { adult, child, infant } = guests;

    return (
      <StSearchGuestsPopupWrapper ref={ref}>
        <StSearchGuestsPopup popupState={type === 'guests'}>
          <StSearchGuestsList>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>성인</StSearchGuestsType>
                <StSearchGuestsTypeAge>만 13세 이상</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={adult}
                  onClick={() => decreaseGuestCount(guests, 'adult')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{adult}</StSearchGuestsCount>

                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(guests, 'adult')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>어린이</StSearchGuestsType>
                <StSearchGuestsTypeAge>2~12세</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={child}
                  onClick={() => decreaseGuestCount(guests, 'child')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{child}</StSearchGuestsCount>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() => increaseGuestCount(searchData.guests, 'child')}
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
            <StSearchGuestsItem>
              <StSearchGuestsTextWrapper>
                <StSearchGuestsType>유아</StSearchGuestsType>
                <StSearchGuestsTypeAge>2세 미만</StSearchGuestsTypeAge>
              </StSearchGuestsTextWrapper>
              <StSearchGuestsCountWrapper>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  minusBtn
                  guestCount={infant}
                  onClick={() => decreaseGuestCount(guests, 'infant')}
                >
                  <FiMinus></FiMinus>
                </StSearchGuestsCountBtn>
                <StSearchGuestsCount>{infant}</StSearchGuestsCount>
                <StSearchGuestsCountBtn
                  btnType="circle"
                  onClick={() =>
                    increaseGuestCount(searchData.guests, 'infant')
                  }
                >
                  <FiPlus></FiPlus>
                </StSearchGuestsCountBtn>
              </StSearchGuestsCountWrapper>
            </StSearchGuestsItem>
          </StSearchGuestsList>
        </StSearchGuestsPopup>
      </StSearchGuestsPopupWrapper>
    );
  },
);

export default React.memo(SearchGuestsPopup);
