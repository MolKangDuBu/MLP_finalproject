import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgListSectionFilterPopup from '../../Components/Message/MsgListSectionFilterPopup';
import { closePopup } from '../../Modules/message';

const MsgListSectionFilterPopupContainer = ({ popupState, popupRef }) => {
  // ! redux
  const { data } = useSelector(state => state.message.messages);
  const dispatch = useDispatch();

  // ! variable
  const allMsgCount = data && data.all.length;
  const hiddenMsgCount = data && data.hidden.length;
  const unreadMsgCount = data && data.unread.length;

  // ! event
  const onClickAll = () => {
    dispatch(closePopup('filter'));
  };

  const onClickHidden = () => {
    dispatch(closePopup('filter'));
  };

  const onClickUnread = () => {
    dispatch(closePopup('filter'));
  };

  return (
    <MsgListSectionFilterPopup
      popupState={popupState}
      popupRef={popupRef}
      onClickAll={onClickAll}
      onClickHidden={onClickHidden}
      onClickUnread={onClickUnread}
      allMsgCount={allMsgCount}
      hiddenMsgCount={hiddenMsgCount}
      unreadMsgCount={unreadMsgCount}
    />
  );
};

export default MsgListSectionFilterPopupContainer;
