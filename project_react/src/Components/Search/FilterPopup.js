import React from 'react';
import Popup from '../Global/Popup';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import ModalFooter from '../Global/ModalFooter';
import RefundContainer from '../../Containers/Search/RefundContainer';
import RangeSliderContainer from '../../Containers/Search/RangeSliderContainer';
import RoomTypeContainer from '../../Containers/Search/RoomTypeContainer';

const RefundPopup = ({ popupState, isDisabled, onReset, onSave }) => {
  return (
    <FilterPopup
      size="350px"
      popupState={popupState}
      isDisabled={isDisabled}
      onSave={onSave}
      onReset={onReset}
    >
      <RefundContainer />
    </FilterPopup>
  );
};

const RoomTypePopup = ({ popupState, isDisabled, onReset, onSave }) => {
  return (
    <FilterPopup
      size="365px"
      popupState={popupState}
      isDisabled={isDisabled}
      onReset={onReset}
      onSave={onSave}
    >
      <RoomTypeContainer />
    </FilterPopup>
  );
};

const PricePopup = ({
  popupState,
  isDisabled,
  range,
  setRange,
  onReset,
  onSave,
}) => {
  return (
    <FilterPopup
      size="430px"
      popupState={popupState}
      isDisabled={isDisabled}
      onReset={onReset}
      onSave={onSave}
    >
      <StContentWrapper content="price">
        <RangeSliderContainer range={range} setRange={setRange} />
      </StContentWrapper>
    </FilterPopup>
  );
};

const SetDatePopup = ({ popupState, onSetDate }) => {
  return (
    <StPopup popupState={popupState} size="350px">
      <StContentWrapper content="setDate">
        <StLargeSpan>요금을 확인하려면 여행 날짜를 입력하세요</StLargeSpan>
        <Button
          btnType="color"
          color="black"
          fontSize="1.4rem"
          onClick={onSetDate}
        >
          날짜 입력
        </Button>
      </StContentWrapper>
    </StPopup>
  );
};

const FilterPopup = ({
  children,
  popupState,
  isDisabled,
  size,
  onReset,
  onSave,
}) => {
  return (
    <StPopup popupState={popupState} size={size}>
      {children}
      <StFooter align="space-between">
        <Button
          btnType="underlined"
          padding="1rem"
          fontSize="1.6rem"
          onClick={onReset}
          disabled={isDisabled}
        >
          지우기
        </Button>
        <Button
          btnType="color"
          color="black"
          padding="1rem 1.5rem"
          fontSize="1.4rem"
          hover="background: #000"
          transition
          onClick={onSave}
        >
          저장
        </Button>
      </StFooter>
    </StPopup>
  );
};

const spanStyle = css`
  line-height: 2rem;
  margin-right: 3rem;
  word-break: keep-all;
  display: block;
`;

const StPopup = styled(Popup)`
  top: 5rem;
  padding: 0;
  width: ${({ size }) => size};
`;

const StFooter = styled(ModalFooter)`
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;
`;

const contentStyles = {
  modal: css`
    display: flex;
    justify-content: space-between;
    padding: 0;
  `,
  refund: css`
    display: flex;
    height: 165px;
    padding-top: 3rem;
  `,
  roomType: css`
    padding: 1rem;
    height: 100%;
    & > * {
      margin: 0 0 0.3rem;
    }
  `,
  setDate: css`
    height: 110px;
    & > * {
      margin-bottom: 1.3rem;
    }
  `,
  price: css`
    height: 330px;
  `,
};

export const StContentWrapper = styled.div`
  padding: 2rem;
  ${({ content }) =>
    css`
      ${contentStyles[content]}
    `}
`;

export const StSmallSpan = styled.span`
  font-size: 1.4rem;
  ${spanStyle}
`;

export const StLargeSpan = styled.span`
  font-size: 1.6rem;
  ${spanStyle}
`;

export { RefundPopup, RoomTypePopup, PricePopup, SetDatePopup };
