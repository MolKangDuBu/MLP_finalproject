import React from 'react';
import styled, { css } from 'styled-components';

const StNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          color: ${({ theme }) => theme.color.white};
          & ${StItemSpan}::before {
            background: ${({ theme }) => theme.color.white};
          }
        `
      : css`
          color: ${({ theme }) => theme.color.black};
          & ${StItemSpan}::before {
            background: ${({ theme }) => theme.color.black};
          }
        `}
`;

const StList = styled.ul`
  display: flex;
`;

const StItem = styled.li``;

const StItemLabel = styled.label`
  display: block;
`;

const StItemSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 10px 12px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 18px;
    height: 2px;
    border-radius: 1px;
    transform: scaleX(0);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;

const StItemInput = styled.input`
  display: none;
  &:hover + ${StItemSpan}::before {
    transform: scaleX(0.5);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
  &:checked + ${StItemSpan}::before {
    transform: scaleX(1.3);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;

const Navigation = ({ isScrollTop, isSearchBtnClicked }) => {
  return (
    <StNav isScrollTop={isScrollTop} isSearchBtnClicked={isSearchBtnClicked}>
      <StList>
        <StItem>
          <StItemLabel>
            <StItemInput
              type="radio"
              name="nav"
              value="short-term-stay"
              defaultChecked
            />
            <StItemSpan>숙소</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="long-term-stay" />
            <StItemSpan>월 단위 숙박</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="experience" />

            <StItemSpan>체험</StItemSpan>
          </StItemLabel>
        </StItem>
        <StItem>
          <StItemLabel>
            <StItemInput type="radio" name="nav" value="online-experience" />
            <StItemSpan>온라인체험</StItemSpan>
          </StItemLabel>
        </StItem>
      </StList>
    </StNav>
  );
};

export default React.memo(Navigation);
