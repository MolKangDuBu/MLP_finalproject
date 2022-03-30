import React from 'react';
import styled, { css } from 'styled-components';
import { IoIosHeart } from 'react-icons/io';

const sizes = {
  large: {
    fontSize: '3rem',
  },
  medium: {
    fontSize: '2.5rem',
  },
  small: {
    fontSize: '2rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
  `}
`;

const BgColorStyles = css`
  ${({ checked }) =>
    checked &&
    css`
      color: ${({ theme }) => theme.color.main};
    `}
`;

const hoverStyles = css`
  ${({ hover }) =>
    hover &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      line-height: 5rem;
      border-radius: 50%;
      position: relative;
      top: 0.4rem;
      &:hover {
        width: 5rem;
        line-height: 5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.lightGray};
      }
    `}
`;

const strokeStyles = css`
  ${({ checked }) =>
    checked &&
    css`
      & > svg > path {
        color: blue;
        stroke: red;
        stroke-width: 1rem;
      }
    `}
`;

const StHeartLabel = styled.label`
  /* common */
  /* hover */
  ${hoverStyles}
`;
const StHeartInput = styled.input`
  /* common */
  display: none;
`;

const StHeartIcon = styled.span`
  /* common */
  cursor: pointer;
  /* size */
  ${sizeStyles}
  /* color */
  ${BgColorStyles}
  ${strokeStyles}
`;

const StHeart = ({ size, hover, position, ...rest }) => {
  return (
    <StHeartLabel hover={hover}>
      <StHeartInput {...rest} />
      <StHeartIcon size={size} position={position} {...rest}>
        {rest.checked ? <IoIosHeart /> : <IoIosHeart />}
      </StHeartIcon>
    </StHeartLabel>
  );
};

const Heart = ({ size, hover, position, ...rest }) => (
  <StHeart size={size} hover={hover} position={position} {...rest} />
);

export default Heart;
