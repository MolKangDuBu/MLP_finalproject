import React from 'react';
import styled from 'styled-components';
import Logo from '../Main/Logo';
import SettingButtonContainer from '../../Containers/Main/SettingButtonContainer';
import MyPageButtonContainer from '../../Containers/Main/MyPageButtonContainer';

const StTripsHeader = styled.header`
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
  padding: 20px 120px 15px 120px;

  @media ${({ theme }) => theme.size.medium} {
    padding: 20px 75px 20px 65px;
  }

  @media ${({ theme }) => theme.size.iPad} {
    padding: 20px 25px 15px 10px;
  }
`;

const StButtonGroupWrapper = styled.div`
  height: 40px;
  display: flex;
`;

const TripsHeader = ({ handleLogoClick }) => {
  return (
    <StTripsHeader>
      <Logo handleLogoClick={handleLogoClick}></Logo>
      <StButtonGroupWrapper>
        <SettingButtonContainer />
        <MyPageButtonContainer />
      </StButtonGroupWrapper>
    </StTripsHeader>
  );
};

export default TripsHeader;
