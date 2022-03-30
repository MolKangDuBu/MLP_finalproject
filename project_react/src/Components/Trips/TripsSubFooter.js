import React from 'react';
import styled from 'styled-components';

const TripsSubFooter = ({ children }) => {
  return <TripsSubFooterWrapper>{children}</TripsSubFooterWrapper>;
};

const TripsSubFooterWrapper = styled.div`
  padding: 2rem 0rem;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.5rem;
`;

export default TripsSubFooter;
