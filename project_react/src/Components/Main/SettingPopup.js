import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { FaWonSign } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
const StSettingPopupWrapper = styled.div`
  position: relative;
`;

const StSettingPopup = styled(Popup)`
  right: 0px;
  width: 180px;
  color: ${({ theme }) => theme.color.black};
`;

const StOptionButton = styled(Button)`
  font-size: 14px;
  width: 100%;
  justify-content: flex-start;
`;

const StButtonText = styled.span`
  line-height: 16px;
  margin-left: 12px;
  font-weight: 400;
`;

const SettingPopup = ({ popupVisible, closePopup }) => {
  const popupRef = useRef();
  const handlePopup = ({ target }) => {
    if (popupVisible && !popupRef.current.contains(target)) {
      closePopup();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handlePopup);
    return () => {
      document.removeEventListener('click', handlePopup);
    };
  }, [handlePopup]);

  return (
    <StSettingPopupWrapper ref={popupRef}>
      <StSettingPopup popupState={popupVisible} right="0" padding="1rem 0">
        <StOptionButton border="none">
          <span className="a11yHidden">언어 바꾸기 버튼</span>
          <FiGlobe />
          <StButtonText>한국어(KR)</StButtonText>
        </StOptionButton>
        <StOptionButton border="none">
          <span className="a11yHidden">화폐 바꾸기 버튼</span>
          <FaWonSign />
          <StButtonText>KRW</StButtonText>
        </StOptionButton>
      </StSettingPopup>
    </StSettingPopupWrapper>
  );
};

export default React.memo(SettingPopup);
