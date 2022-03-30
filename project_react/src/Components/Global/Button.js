/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

// btnType: color(배경색 있는 버튼), underlined(밑줄 있는 버튼), circle(원형 버튼), oval(타원형 버튼)
const Button = forwardRef(
  (
    {
      children,
      btnType,
      color,
      border,
      width,
      height,
      fontSize,
      fontWeight,
      padding,
      hover,
      focus,
      transition,
      type,
      disabled,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <StBtn
        ref={ref}
        btnType={btnType}
        color={color} // 'black'
        border={border} // 'none', '3px solid gray'
        width={width} // '3rem'
        height={height} // '3rem'
        fontSize={fontSize} // '2rem'
        fontWeight={fontWeight} // '700'
        padding={padding} // '0'
        hover={hover} // 'background: gray'
        focus={focus} // true
        disabled={disabled} // true
        transition={transition} // true
        type={type || 'button'} // 'submit'
        onClick={onClick} // () => {}
        {...rest}
      >
        {children}
      </StBtn>
    );
  },
);

const hovers = btnType => {
  switch (btnType) {
    case undefined:
    case 'underlined':
      return css`
        background: ${({ theme }) => theme.color.lightGray};
      `;
    case 'oval':
      return css`
        border: 1px solid ${({ theme }) => theme.color.black};
      `;
    default:
      return null;
  }
};

const borders = btnType => {
  switch (btnType) {
    case 'color':
    case 'underlined':
      return css`
        border: none;
      `;
    case 'oval':
      return css`
        border: 1px solid ${({ theme }) => theme.color.gray};
        border-radius: 30px;
      `;
    case 'circle':
      return css`
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.color.gray};
      `;
    default:
      return css`
        border: 1px solid ${({ theme }) => theme.color.black};
      `;
  }
};

const hoverStyles = css`
  ${({ btnType, hover }) =>
    css`
      &:hover {
        ${hover ? hover : hovers(btnType)};
      }
    `}
`;

const borderStyles = css`
  ${({ btnType, border }) => css`
    ${borders(btnType)};
    border: ${border && border};
  `}
`;

const fontStyles = css`
  ${({ btnType, fontSize, fontWeight }) => css`
    font-size: ${fontSize || '1.6rem'};
    font-weight: ${fontWeight || '400'};
    text-decoration: ${btnType === 'underlined' && 'underline'};
  `}
`;

const colorStyles = css`
  ${({ color, theme }) =>
    color &&
    css`
      background: ${theme.color[color] || 'transparent'};
      color: ${theme.color.white};
      border: none;
    `}
`;

const sizeStyles = css`
  ${({ btnType, width, height, padding }) => css`
    width: ${btnType === 'circle' ? '32px' : width};
    height: ${btnType === 'circle' ? '32px' : height};
    padding: ${btnType === 'circle' ? '0' : padding ? padding : '1rem 2rem'};
  `}
`;

const focusStyles = css`
  ${({ focus, theme }) =>
    focus &&
    css`
      &:focus {
        box-shadow: 0px 0px 0px 2px ${theme.color.white},
          0px 0px 0px 4px ${theme.color.black};
      }
    `}
`;

const transitionStyles = css`
  ${({ transition }) =>
    transition &&
    css`
      transition: 0.2s;
      &:active {
        transform: scale(0.94);
      }
    `}
`;

export const StBtn = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 8px;
  overflow: hidden;
  ${fontStyles};
  ${colorStyles};
  ${sizeStyles};
  ${borderStyles};
  ${hoverStyles};
  ${focusStyles};
  ${transitionStyles};
`;

export default React.memo(Button);
