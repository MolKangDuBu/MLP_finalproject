import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

const StDropDownWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${({ width }) => width || '200px'};
  background: transparent;
  z-index: 0;
`;

const StDropDownSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  height: ${({ height }) => height || '48px'};
  padding: ${({ padding }) => padding || '10px'};
  -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${({ radius }) => radius || '4px'};
  text-indent: 5px;
  ${({ outline }) =>
    outline
      ? css`
          &:focus {
            border: 1px solid ${({ theme }) => theme.color.green};
            border-radius: ${({ radius }) => radius || '4px'};
          }
        `
      : css`
          &:focus {
            border: 1px solid ${({ theme }) => theme.color.black};
            border-radius: ${({ radius }) => radius || '4px'};
          }
        `}
`;

const StDropDownOption = styled.option`
  box-sizing: border-box;
  display: block;
  white-space: pre;
  min-height: 12px;
  padding: 0px 2px 1px;
`;

const StDropDownIconWrapper = styled.span`
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  width: 20px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  z-index: 0;
  pointer-events: none;
`;

const DropDown = forwardRef(
  (
    {
      name,
      title,
      options,
      width,
      height,
      padding,
      radius,
      outline,
      value,
      ...rest
    },
    ref,
  ) => {
    return (
      <StDropDownWrapper width={width}>
        <StDropDownSelect
          ref={ref}
          name={name}
          height={height}
          padding={padding}
          radius={radius}
          outline={outline}
          value={value}
          {...rest}
        >
          <StDropDownOption key={0} disabled>
            {title}
          </StDropDownOption>
          {options.map((option, i) => (
            <StDropDownOption key={i + 1} value={option}>
              {option}
            </StDropDownOption>
          ))}
        </StDropDownSelect>
        <StDropDownIconWrapper>
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </StDropDownIconWrapper>
      </StDropDownWrapper>
    );
  },
);
export default React.memo(DropDown);
