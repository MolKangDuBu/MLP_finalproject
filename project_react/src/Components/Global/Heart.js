/* eslint-disable react/display-name */
import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { TiHeartFullOutline as HeartIcon } from 'react-icons/ti';

const sizes = {
  large: {
    strokeWidth: '1.5px',
    fontSize: '3rem',
  },
  medium: {
    strokeWidth: '2px',
    fontSize: '2.5rem',
  },
  small: {
    strokeWidth: '3px',
    fontSize: '2rem',
  },
  smaller: {
    strokeWidth: '2px',
    fontSize: '1.6rem',
  },
};

const defaultColorStyles = css`
  ${({ bgColor, stroke, ckType, checked, theme }) =>
    ckType
      ? checked
        ? css`
            color: ${theme.color.main};
            & > svg > path {
              stroke: ${theme.color.white};
            }
          `
        : css`
            color: ${rgba(theme.color.black, 0.5)};
            & > svg > path {
              stroke: ${theme.color.white};
            }
          `
      : css`
          color: ${theme.color[bgColor]};
          & > svg > path {
            stroke: ${theme.color[stroke]};
          }
        `}
`;

const hoverColorStyles = css`
  ${({ hover, checked, theme }) =>
    hover && checked
      ? css`
          color: ${theme.color.main};
          & > svg > path {
            stroke: ${theme.color.main};
          }
        `
      : css`
          color: ${theme.color.white};
          & > svg > path {
            stroke: ${theme.color.black};
          }
        `}
`;

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    & > svg > path {
      stroke-width: ${sizes[size].strokeWidth};
    }
  `}
`;

const hoverStyles = css`
  ${({ hover, theme }) =>
    hover &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      &:hover {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: ${theme.color.lightGray};
      }
    `}
`;

// default heart
const StDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${defaultColorStyles}
  ${sizeStyles}
  ${hoverStyles}
`;

const StHeartLabel = styled.label`
  cursor: pointer;
`;

const StHeartInput = styled.input`
  display: none;
`;

// CkHeartDiv
const StCkDiv = styled.div`
  ${hoverColorStyles}
  ${sizeStyles}
  ${hoverStyles}
`;

const Heart = React.memo(
  ({ size, bgColor, stroke, ckType, hover, checked, ...rest }) => {
    return hover ? (
      <StCkDiv // hover={true}
        size={size}
        bgColor={bgColor}
        stroke={stroke}
        ckType={ckType}
        hover={hover} // CkHeart의 hover기능 props 여부에 따라 hover 적용, 없으면 무시
        checked={checked} // checked=true, checked=false
        {...rest}
      >
        <HeartIcon />
      </StCkDiv>
    ) : (
      <StDiv // default heart
        size={size}
        bgColor={bgColor}
        stroke={stroke}
        ckType={ckType}
        hover={hover} // hover={false}
        checked={checked}
        {...rest}
      >
        <HeartIcon />
      </StDiv>
    );
  },
);

// onClick 이벤트는 onCheck 이름으로 내려주세요
const CkHeart = React.memo(
  ({ ckType, hover, checked, onCheck, theme, ...event }) => {
    return (
      <StHeartLabel hover={hover} {...event}>
        <StHeartInput type="checkbox" />
        {hover ? (
          // hover=true
          <Heart
            size="large"
            ckType={ckType}
            hover={hover}
            checked={checked}
            theme={theme}
            onClick={onCheck}
          />
        ) : (
          // hover=false
          <Heart
            size="large"
            ckType={ckType}
            checked={checked}
            theme={theme}
            onClick={onCheck}
          />
        )}
      </StHeartLabel>
    );
  },
);

Heart.defaultProps = {
  size: 'small',
};

export { Heart, CkHeart };
