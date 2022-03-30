import React from 'react';
import Button from '../Global/Button';
import styled, { css } from 'styled-components';
import { FilterButtonContainer } from '../../Containers/Search/FilterListContainer';
import { MapButton } from './MapButton';
import SetDatePopupContainer from '../../Containers/Search/SetDatePopupContainer';
import PricePopupContainer from '../../Containers/Search/PricePopupContainer';
import RoomTypePopupContainer from '../../Containers/Search/RoomTypePopupContainer';
import RefundPopupContainer from '../../Containers/Search/RefundPopupContainer';

export const FilterButton = React.memo(
  ({ children, text, onClick, isOpen, isApplied }) => {
    return (
      <StFilterWrapper>
        <FilterBtn
          btnType="oval"
          onClick={onClick}
          isApplied={isApplied}
          isOpen={isOpen}
        >
          {text}
        </FilterBtn>
        {children}
      </StFilterWrapper>
    );
  },
);

export const FilterList = React.memo(
  ({ mapState, onShowMap, dateDiff, dataTotal }) => {
    return (
      <StWrapper>
        {dataTotal !== 0 && (
          <FilterButtonContainer name="refund" text="유연한 환불 정책">
            <RefundPopupContainer />
          </FilterButtonContainer>
        )}
        {dataTotal !== 0 && (
          <FilterButtonContainer name="roomType" text="숙소 유형">
            <RoomTypePopupContainer />
          </FilterButtonContainer>
        )}
        <FilterButtonContainer name="price" text="요금">
          {dateDiff ? <PricePopupContainer /> : <SetDatePopupContainer />}
        </FilterButtonContainer>
        <FilterButtonContainer
          name="modal"
          text="필터 추가하기"
        ></FilterButtonContainer>
        <MapButton mapState={mapState} onShowMap={onShowMap} />
      </StWrapper>
    );
  },
);

const FilterBtn = styled(Button)`
  margin-right: 1rem;
  font-size: 14px;
  ${({ isApplied, isOpen, theme }) =>
    (isApplied || isOpen) &&
    css`
      border: 2px solid ${theme.color.black};
      background: ${theme.color.lightGray};
      padding: 0.8rem 1.8rem;
      &:hover {
        border: 2px solid ${theme.color.black};
      }
    `};
`;

const StWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 0 3rem;
`;

const StFilterWrapper = styled.div`
  position: relative;
`;
