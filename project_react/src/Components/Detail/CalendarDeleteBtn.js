import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';

const CalendarDeleteBtn = ({ onClick, ...rest }) => (
  <StDeleteDate btnType="underlined" transition onClick={onClick} {...rest}>
    날짜 지우기
  </StDeleteDate>
);

const StDeleteDate = styled(Button)`
  vertical-align: super;
  padding: 8px;
  margin-left: calc(100% - 145px);
  font-size: 14px;
  font-weight: 600;
`;

export default CalendarDeleteBtn;
