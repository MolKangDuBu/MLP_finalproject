import React from 'react';
import styled from 'styled-components';
import Popup from '../Global/Popup';
import Button from '../Global/Button';
import { Link } from 'react-router-dom';

const MsgListFilterPopup = ({
  popupState,
  popupRef,
  onClickAll,
  onClickHidden,
  onClickUnread,
  allMsgCount,
  hiddenMsgCount,
  unreadMsgCount,
}) => {
  return (
    <MsgListFilterPopupWrapper ref={popupRef}>
      <StMsgListFilterPopup
        popupState={popupState}
        top="3.5rem"
        left="12rem"
        padding="1rem 0rem"
      >
        <Link to={`/guest/inbox?filter=all`}>
          <StMsgListFilterPopupButton onClick={onClickAll}>
            <MsgListFilterPopupButtonText>
              모든 메시지 ({allMsgCount})
            </MsgListFilterPopupButtonText>
          </StMsgListFilterPopupButton>
        </Link>
        <Link to={`/guest/inbox?filter=hidden`}>
          <StMsgListFilterPopupButton onClick={onClickHidden}>
            <MsgListFilterPopupButtonText>
              숨긴 메시지 ({hiddenMsgCount})
            </MsgListFilterPopupButtonText>
          </StMsgListFilterPopupButton>
        </Link>
        <Link to={`/guest/inbox?filter=unread`}>
          <StMsgListFilterPopupButton onClick={onClickUnread}>
            <MsgListFilterPopupButtonText>
              읽지 않은 메시지 ({unreadMsgCount})
            </MsgListFilterPopupButtonText>
          </StMsgListFilterPopupButton>
        </Link>
      </StMsgListFilterPopup>
    </MsgListFilterPopupWrapper>
  );
};

const MsgListFilterPopupWrapper = styled.div`
  position: absolute;
  z-index: 20;
`;

const StMsgListFilterPopup = styled(Popup)`
  border: none;
`;

const StMsgListFilterPopupButton = styled(Button)`
  width: 23rem;
  height: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgListFilterPopupButtonText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 0rem;
  width: calc(100% - 4rem);
  font-size: 1.5rem;
  font-weight: light;
`;

export default MsgListFilterPopup;
