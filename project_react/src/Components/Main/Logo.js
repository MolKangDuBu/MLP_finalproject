import React from 'react';
import styled, { css } from 'styled-components';
import { FaAirbnb } from 'react-icons/fa';

const StLogoLink = styled.a`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-decoration: none;
  ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          color: ${({ theme }) => theme.color.white};
        `
      : css`
          color: ${({ theme }) => theme.color.main};
        `}

  & svg {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
`;

const StLogoTitle = styled.h1`
  @media ${({ theme }) => theme.size.iPad} {
    display: none;
  }
  ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          color: ${({ theme }) => theme.color.white};
        `
      : css`
          color: ${({ theme }) => theme.color.main};
        `};
  font-size: 25px;
  font-weight: bold;
`;

const Logo = ({ isScrollTop, handleLogoClick }) => {
  return (
    <StLogoLink
      href="/"
      isScrollTop={isScrollTop}
      onClick={e => handleLogoClick(e)}
    >
      <FaAirbnb />
      <StLogoTitle isScrollTop={isScrollTop}>airdnd</StLogoTitle>
    </StLogoLink>
  );
};

export default React.memo(Logo);
