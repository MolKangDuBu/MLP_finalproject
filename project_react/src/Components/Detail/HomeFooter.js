import React from 'react';
import styled from 'styled-components';
import Footer from '../Main/Footer';

const HomeFooter = () => {
  return (
    <StFooterWrapper>
      <StFooter />
    </StFooterWrapper>
  );
};

const StFooter = styled(Footer)`
  max-width: 1200px;
  padding: 48px 40px 30px;
  margin: 0 auto;
`;

const StFooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export default HomeFooter;
