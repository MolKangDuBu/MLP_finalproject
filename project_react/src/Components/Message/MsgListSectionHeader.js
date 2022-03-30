import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { MdFilterList } from 'react-icons/md';
import MsgListSectionFilterPopupContainer from '../../Containers/Message/MsgListSectionFilterPopupContainer';

const MsgListSectionHeader = ({
  state,
  popupState,
  onClickPopup,
  popupBtnRef,
  popupRef,
}) => {
  return (
    <MsgListSectionHeaderWrapper>
      <MsgListSectionHeaderTitle>
        {(state === 'all' || state === undefined) && '메시지 주고받기'}
        {state === 'hidden' && '보관 처리됨'}
        {state === 'unread' && '읽지 않음'}
      </MsgListSectionHeaderTitle>
      <StMsgListSectionHeaderFilterButton
        btnType="circle"
        border={popupState ? '2px solid black' : 'none'}
        hover={{ backgroundColor: theme.color.lightGray }}
        onClick={onClickPopup}
        popupState={popupState}
        ref={popupBtnRef}
      >
        <StMsgListSectionHeaderFilterButtonIcon />
      </StMsgListSectionHeaderFilterButton>
      <MsgListSectionFilterPopupContainer
        popupState={popupState}
        popupRef={popupRef}
      />
    </MsgListSectionHeaderWrapper>
  );
};

const MsgListSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid ${({ theme }) => darken(0.1, theme.color.lightGray)};
  /* width: 37.5rem; */
  /* min-width: 37.5rem; */
  height: 7.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const MsgListSectionHeaderTitle = styled.h2`
  color: ${({ theme }) => theme.color.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StMsgListSectionHeaderFilterButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme, popupState }) =>
    popupState && theme.color.lightGray};
`;

const StMsgListSectionHeaderFilterButtonIcon = styled(MdFilterList)`
  font-size: 2rem;
`;

export default MsgListSectionHeader;
