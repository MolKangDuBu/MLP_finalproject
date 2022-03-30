import React from 'react';
import { MdDone } from 'react-icons/md';
import styled, { css } from 'styled-components';

const StToggleButton = styled.button`
  box-sizing: border-box;
  position: relative;
  padding: 0;
  width: 48px;
  height: 32px;
  border-radius: 28px;
  border: none;
  background: ${({ theme }) => theme.color.gray};
  cursor: pointer;
  outline: none;
  min-width: 48px;
  ${({ checked }) =>
    checked &&
    css`
      background: ${({ theme }) => theme.color.black};
    `}
  &:hover {
    background: ${({ theme }) => theme.color.gray};
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.color.white} 0px 0px 0px 2px,
      ${({ theme }) => theme.color.black} 0px 0px 0px 4px,
      rgba(255, 255, 255, 0.5) 0px 0px 0px 5px;
    outline: none;
    transition: box-shadow 0.2s ease 0s;
  }
`;

const StToggleCircle = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: 2px;
  left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.color.white};
  font-size: 28px;
  border-radius: 50%;
  transition: 0.4s;
  ${({ checked }) =>
    checked &&
    css`
      transform: translate3d(16px, 0px, 0px);
      color: ${({ theme }) => theme.color.black};
    `};
`;

const Toggle = ({ checked, handleClick }) => {
  return (
    <StToggleButton checked={checked} onClick={handleClick}>
      <StToggleCircle checked={checked}>
        {checked ? <MdDone /> : null}
      </StToggleCircle>
    </StToggleButton>
  );
};
export default React.memo(Toggle);
