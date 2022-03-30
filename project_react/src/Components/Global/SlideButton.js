import React from 'react';
import { StBtn } from './Button';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styled, { css } from 'styled-components';

// styleType: transparent, plane
const NextButton = React.memo(({ styleType, ...rest }) => {
  return (
    <StSlideButton
      styleType={styleType}
      btnType="circle"
      fontSize="2rem"
      {...rest}
    >
      <MdNavigateNext />
    </StSlideButton>
  );
});

const PrevButton = React.memo(({ styleType, ...rest }) => {
  return (
    <StSlideButton
      styleType={styleType}
      btnType="circle"
      fontSize="2rem"
      {...rest}
    >
      <MdNavigateBefore />
    </StSlideButton>
  );
});

const styleTypes = {
  transparent: css`
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  `,
  plane: css`
    border: none;
    &:hover {
      background: ${({ theme }) => theme.color.lightGray};
    }
    &:disabled {
      cursor: not-allowed;
    }
  `,
};

const StSlideButton = styled(StBtn)`
  ${({ styleType, theme }) => css`
    ${styleTypes[styleType]};
    ${styleType !== 'plane' &&
    css`
      border: 1px solid ${theme.color.shadow};
      box-shadow: 0px 0px 2px ${theme.color.shadow};
      transition: 0.3s;
      &:hover {
        box-shadow: 0px 0px 10px ${theme.color.shadow};
        transition: 0.3s;
        transform: scale(1.1);
      }
    `}
  `};
`;

export { NextButton, PrevButton };
