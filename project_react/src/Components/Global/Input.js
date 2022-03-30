/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const borderStyle = css`
  border: 1px solid
    ${({ message, theme }) =>
      message ? darken(0.1, theme.color.gray) : lighten(0.2, theme.color.gray)};
  border-radius: ${({ message }) => (message ? '2.2rem' : '4px')};
  padding: ${({ message }) => (message ? '1.3rem 1.5rem' : '1.6rem 1rem')};
`;

const placeholderStyle = css`
  &::placeholder {
    color: ${({ theme }) => darken(0.3, theme.color.darkGray)};
    font-size: 1.6rem;
    font-weight: 300;
  }
`;

const focusStyle = css`
  ${({ borderNone, theme }) =>
    !borderNone &&
    css`
      &:focus {
        ${({ message }) =>
          message &&
          css`
            border: 2px solid ${theme.color.black};
            padding: 1.2rem 1.4rem;
          `};
        border-color: ${({ focusBorderColor, theme }) =>
          focusBorderColor ? theme.color.green : theme.color.black};
      }
    `};
`;

const borderNone = css`
  border: ${({ borderNone }) => borderNone && 'none'};
`;

const nameStyle = css`
  position: relative;
  top: -0.6rem;
  left: 0.1rem;
  color: ${({ theme }) => darken(0.6, theme.color.gray)};
  font-size: 1.2rem;
  font-weight: 200;
`;

const nameMove = keyframes`
  100% {
    ${nameStyle};
  }
`;

const StLabel = styled.label`
  width: 100%;
  cursor: pointer;
`;

const StInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  outline: none;
  ${placeholderStyle};
  ${borderStyle};
  ${focusStyle};
  ${borderNone};
`;

const StLabelName = styled.div`
  padding: 1rem 0;
  font-size: 1.6rem;
  font-weight: 400;
`;

const StNewLabel = styled.label`
  width: ${({ short }) => (short ? '16.8rem' : '100%')};
  padding: 1.2rem 1rem 0rem;
  height: 5.7rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.color.black};
  }
  &:focus-within div {
    ${({ animation }) =>
      animation &&
      css`
        animation-name: ${nameMove};
        animation-duration: 0.2s;
        animation-timing-function: linear;
        animation-fill-mode: both;
      `}
  }
`;

const StNewInput = styled.input`
  background: none;
  position: relative;
  top: ${({ pay }) => (pay ? '-1.1rem' : '-0.7rem')};
  width: 100%;
  border: none;
  font-size: 1.6rem;
  font-weight: 300;
  outline: none;
  ${placeholderStyle};
  ${({ pay }) =>
    pay &&
    css`
      width: 15rem;
      padding-left: 1.8rem;
    `}
`;

const StNewName = styled.div`
  color: ${({ theme }) => darken(0.5, theme.color.gray)};
  font-weight: 200;
  position: relative;
  top: 0.6rem;
  ${({ animation }) =>
    !animation &&
    css`
      ${nameStyle};
    `}
  ${({ value }) =>
    value &&
    css`
      ${nameStyle};
    `}
`;

const StChildren = styled.span``;

const StPay = styled.div`
  width: 1rem;
  height: 1rem;
  margin-top: -0.3rem;
  vertical-align: sub;
`;

const Input = forwardRef(
  (
    {
      children,
      message,
      short,
      borderNone,
      focusBorderColor,
      type,
      placeholder,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    return (
      <StLabel New={short}>
        {children && <StLabelName>{children}</StLabelName>}
        <StInput
          short={short}
          message={message}
          borderNone={borderNone}
          focusBorderColor={focusBorderColor}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
      </StLabel>
    );
  },
);

const NewInput = ({
  short,
  children,
  title,
  animation,
  pay,
  placeholder,
  value,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <>
      <StNewLabel
        short={short}
        pay={pay}
        animation={animation}
        value={value}
        {...rest}
      >
        <StNewName animation={animation} value={value}>
          {title}
        </StNewName>
        {pay ? (
          <>
            <StPay>{pay}</StPay>
            <StNewInput
              pay={pay}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          </>
        ) : (
          <StNewInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </StNewLabel>
      <StChildren>{children}</StChildren>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

NewInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export { Input, NewInput };
