import React from 'react';
import Division from './Division';
import styled from 'styled-components';
import DetailCalendarContainer from '../../Containers/Detail/DetailCalendarContainer';
import CalendarDeleteBtnContainer from '../../Containers/Detail/CalendarDeleteBtnContainer';
import CalendarKeybordBtnContainer from '../../Containers/Detail/CalendarKeybordBtnContainer';

const Schedule = ({
  checkinString,
  checkoutString,
  allChecked,
  onlyCheckin,
  minimumStay,
}) => {
  return (
    <Division title="체크인 날짜를 선택해주세요." padding="8px">
      <StTravelTerm>
        {onlyCheckin
          ? `최소 숙박 일수: ${minimumStay}박`
          : allChecked
          ? `${checkinString} - ${checkoutString}`
          : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
      </StTravelTerm>
      <DetailCalendarContainer />
      <CalendarKeybordBtnContainer />
      <CalendarDeleteBtnContainer />
    </Division>
  );
};

const StTravelTerm = styled.div`
  padding-top: 4px;
  margin-bottom: 20px;
  line-height: 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export default Schedule;
