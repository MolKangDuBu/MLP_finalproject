import React from 'react';
import styled from 'styled-components';
import { NextButton, PrevButton } from '../Global/SlideButton';

const RecentPagination = () => {
  return (
    <StWrapper>
      <StSpan>1 / 3</StSpan>
      <PrevButton />
      <NextButton />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 1rem;
  }
`;

const StSpan = styled.span`
  font-size: 1.4rem;
  margin-right: 1rem;
`;

export default RecentPagination;
