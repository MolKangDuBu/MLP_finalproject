import React from 'react';
import styled from 'styled-components';
import Checkbox from '../Global/Checkbox';
import { StContentWrapper, StLargeSpan, StSmallSpan } from './FilterPopup';

const RoomType = ({ check, onChange, isModal }) => {
  return (
    <StCheckboxList isModal={isModal}>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.roomTypeHouse}
          onChange={() => onChange('roomTypeHouse')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>집 전체</StLargeSpan>
            <StSmallSpan>집 전체를 단독으로 사용합니다</StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.roomTypePrivate}
          onChange={() => onChange('roomTypePrivate')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>개인실</StLargeSpan>
            <StSmallSpan>
              침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께
              이용할 수도 있습니다
            </StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
      <StCheckboxWrapper>
        <Checkbox
          value
          checked={check.roomTypeShared}
          onChange={() => onChange('roomTypeShared')}
        >
          <StContentWrapper content="roomType">
            <StLargeSpan>다인실</StLargeSpan>
            <StSmallSpan>
              사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께
              이용합니다
            </StSmallSpan>
          </StContentWrapper>
        </Checkbox>
      </StCheckboxWrapper>
    </StCheckboxList>
  );
};

const StCheckboxWrapper = styled.li`
  margin-bottom: 1rem;
`;

const StCheckboxList = styled.ul`
  padding: ${({ isModal }) => (isModal ? '0' : '2rem')};
  height: ${({ isModal }) => (isModal ? 'fit-content' : '380px')};
`;

export default RoomType;
