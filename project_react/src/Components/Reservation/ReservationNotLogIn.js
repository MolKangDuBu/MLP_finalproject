import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';

const ReservationNotLogIn = ({ onClick }) => {
  return (
    <StWrapper>
      <StButton color="main" hover onClick={onClick}>
        로그인 하세요
      </StButton>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding-bottom: 60px;
`;

const StButton = styled(Button)`
  border: none;
  padding: 16px 35px;
`;

export default ReservationNotLogIn;
