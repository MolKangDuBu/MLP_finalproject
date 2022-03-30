import React from 'react';
import { useSelector } from 'react-redux';
import MessageListSection from '../../Components/Message/MessageListSection';

const MessageListSectionContainer = () => {
  // ! redux
  const { msgListSectionState, msgDetailSectionState } = useSelector(
    state => state.message.mediaState,
  );

  return (
    <MessageListSection
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    />
  );
};

export default MessageListSectionContainer;
