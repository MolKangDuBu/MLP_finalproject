import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { MdCheckBox } from 'react-icons/md';

const dragDisable = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const hoverStyle = css`
  border-color: ${({ theme }) => theme.color.black};
  ${({ map, theme }) =>
    map &&
    css`
      color: ${darken(0.4, theme.color.gray)};
      font-weight: 600;
    `}
`;

const StCheckBoxLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover span {
    ${hoverStyle}
  }

  ${({ value }) =>
    value &&
    css`
      width: 100%;
    `};
  background: ${({ map, theme }) => map && theme.color.white};
`;

const StCheckBoxInput = styled.input`
  display: none;
`;

const StCheckBoxOutLine = styled.span`
  display: inline-block;
  min-width: 2.5rem;
  min-height: 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  margin: 0.4rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  ${({ map, theme }) =>
    map &&
    css`
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 4px;
      margin: 0.4rem;
      border: 1px solid ${theme.color.gray};
    `}
  &:hover {
    ${hoverStyle}
  }
`;

const StCheckBox = styled(MdCheckBox)`
  font-size: 3.3rem;
  min-width: 3.3rem;
  min-height: 3.3rem;
  ${({ map }) =>
    map &&
    css`
      font-size: 3.3rem;
    `}
`;

const StCheckBoxText = styled.span`
  padding: 0 0.8rem 0 0.8rem;
  font-size: 2rem;
  font-weight: 400;
  vertical-align: 47%;
  ${({ map }) =>
    map &&
    css`
      font-size: 1.4rem;
      font-weight: 600;
      vertical-align: 60%;
    `}
  ${dragDisable}
`;

// onClick 이벤트는 onCheck 이름으로 내려주세요
const Checkbox = ({ children, value, map, checked, onCheck, ...event }) => {
  return (
    <StCheckBoxLabel map={map} {...event}>
      <StCheckBoxInput type="checkbox" onClick={onCheck} />
      {checked ? <StCheckBox map={map} /> : <StCheckBoxOutLine map={map} />}
      {value && <StCheckBoxText map={map}>{children}</StCheckBoxText>}
    </StCheckBoxLabel>
  );
};

export default Checkbox;
