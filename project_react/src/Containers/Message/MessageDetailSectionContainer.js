import React from 'react';
import { useSelector } from 'react-redux';
import MessageDetailSection from '../../Components/Message/MessageDetailSection';

const MessageDetailSectionContainer = () => {
  const { msgDetailSectionState } = useSelector(
    state => state.message.mediaState,
  );

  return <MessageDetailSection msgDetailSectionState={msgDetailSectionState} />;
};

export default MessageDetailSectionContainer;
