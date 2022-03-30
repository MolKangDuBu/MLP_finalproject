import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rgba, lighten, darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';

const TripsNone = () => {
  console.log('blajkjbkajlds');
  return (
    <TripsNoneWrapper>
      <TripsNoneText>
        다시 여행을 떠나실 준비가 되면 에어비앤비가 도와드리겠습니다.{' '}
        <Link to="/help" target="_blank">
          <StButton btnType="underlined" padding="0" fontSize="1.5rem">
            자세히 알아보기
          </StButton>
        </Link>
      </TripsNoneText>
      <TripsNoneMainWrapper>
        <img src="https://etc-corporate.org/uploads/2019/05/Airbnb_Logo_B%C3%A9lo.svg_.png" />
      </TripsNoneMainWrapper>
      <TripsNoneButtonWrapper>
        <Link to="/">
          <Button
            color="black"
            padding="1.5rem 2.3rem"
            border="none"
            hover={`background: ${rgba(theme.color.black, 0.9)}`}
          >
            에어비엔비 둘러보기
          </Button>
        </Link>
      </TripsNoneButtonWrapper>
    </TripsNoneWrapper>
  );
};

const TripsNoneWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  padding: 2rem 0rem;
`;

const TripsNoneText = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.5rem;
`;

const StButton = styled(Button)`
  color: ${({ theme }) => darken(0.2, theme.color.darkGray)};
  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const TripsNoneMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
`;

const TripsNoneButtonWrapper = styled.div`
  padding: 2rem 0rem 0rem;
`;

export default TripsNone;
