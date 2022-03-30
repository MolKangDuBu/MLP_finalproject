import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Global/Button';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const StSettingButton = styled(Button)`
  color: ${({ isScrollTop }) =>
    isScrollTop
      ? css`
          ${({ theme }) => theme.color.white}
        `
      : css`
          ${({ theme }) => theme.color.black}
        `};
  font-weight: 600;
  font-size: 18px;
  background: transparent;
  border: none;
  &:hover {
    border: none;
    background: rgba(176, 176, 176, 0.25);
  }
  &:focus {
    box-shadow: none;
  }
`;

const SettingButton = ({ isScrollTop, togglePopup }) => {
  return (
    <StSettingButton
      btnType="oval"
      isScrollTop={isScrollTop}
      onClick={togglePopup}
    >
      <FiGlobe style={{ marginRight: '2px' }} />
      <FiChevronDown />
    </StSettingButton>
  );
};

export default React.memo(SettingButton);
