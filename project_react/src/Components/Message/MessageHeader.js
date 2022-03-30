import React from 'react';
import styled from 'styled-components';
import Logo from '../Main/Logo';
import SettingButtonContainer from '../../Containers/Main/SettingButtonContainer';
import MyPageButtonContainer from '../../Containers/Main/MyPageButtonContainer';

const MessageHeader = ({ handleLogoClick }) => {
  return (
    <StMessageHeader>
      <Logo handleLogoClick={handleLogoClick}></Logo>
      <StButtonGroupWrapper>
        <SettingButtonContainer />
        <MyPageButtonContainer />
      </StButtonGroupWrapper>
    </StMessageHeader>
  );
};

const StMessageHeader = styled.header`
  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  height: 80px;
  background: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  padding: 20px 20px 15px 20px;
`;

const StButtonGroupWrapper = styled.div`
  height: 40px;
  display: flex;
`;

export default MessageHeader;
