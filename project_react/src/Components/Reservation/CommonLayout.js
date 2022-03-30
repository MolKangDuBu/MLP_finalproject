import React from 'react';
import styled from 'styled-components';
import LuckyChance from '../Global/LuckyChance';
import AsideContainer from '../../Containers/Reservation/AsideContainer';

const StMain = styled.main`
  display: flex;
  align-items: flex-start;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  color: ${({ theme }) => theme.color.softBlack};

  @media ${({ theme }) => theme.size.medium} {
    max-width: 700px;
  }
`;

const StLeftWrapper = styled.div`
  width: 58%;
`;

const StTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.125em;
`;

const CommonLayout = ({ children, title, hidden }) => {
  const almostFull = true;

  return (
    <StMain>
      <StLeftWrapper>
        <StTitle>{title}</StTitle>
        {almostFull && !hidden && (
          <LuckyChance lastName="haeun" margin="16px 0 36px" />
        )}
        {children}
      </StLeftWrapper>
      <AsideContainer />
    </StMain>
  );
};

export default CommonLayout;
