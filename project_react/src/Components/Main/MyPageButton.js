import React from 'react';
import styled from 'styled-components';
import Button from '../Global/Button';
import { FaBars } from 'react-icons/fa';
import imgPath from '../../Assets/Img/profile.png';

const StMyPageButton = styled(Button)`
  padding: 5px 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.line};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.line};
    box-shadow: ${({ isScrollTop }) =>
      isScrollTop || '2px 2px 4px rgba(0, 0, 0, 0.18)'};
  }
  &:focus {
    box-shadow: none;
  }
`;

const StProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  border-radius: 50%;
`;

const StProfileSvg = styled.svg`
  width: 32px;
  height: 32px;
  margin-left: 8px;
  fill: ${({ theme }) => theme.color.darkGray};
`;

const MyPageButton = ({ isScrollTop, togglePopup, isLoggedIn, data }) => {
  const { profileImg } = data;
  return (
    <StMyPageButton
      btnType="oval"
      isScrollTop={isScrollTop}
      onClick={togglePopup}
    >
      <FaBars></FaBars>
      {isLoggedIn && profileImg && <StProfileImg src={profileImg} />}
      {isLoggedIn && !profileImg && <StProfileImg src={imgPath} />}
      {!isLoggedIn && (
        <StProfileSvg>
          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
        </StProfileSvg>
      )}
    </StMyPageButton>
  );
};

export default React.memo(MyPageButton);
