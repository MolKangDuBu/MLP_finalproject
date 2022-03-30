import React from 'react';
import styled from 'styled-components';
import MessageListSectionContainer from '../../Containers/Message/MessageListSectionContainer';
import MessageDetailSectionContainer from '../../Containers/Message/MessageDetailSectionContainer';
import MessageSectionContainer from '../../Containers/Message/MessageSectionContainer';
import MsgDetailPdfModalContainer from '../../Containers/Message/MsgDetailPdfModalContainer';
import MsgDetailLanguageModalContainer from '../../Containers/Message/MsgDetailLanguageModalContainer';
import MsgDetailBusinessModalContainer from '../../Containers/Message/MsgDetailBusinessModalContainer';
import MsgDetailSupportModalContainer from '../../Containers/Message/MsgDetailSupportModalContainer';
import MsgFlagModalContainer from '../../Containers/Message/MsgFlagModalContainer';

const MessageMain = () => {
  return (
    <MessageMainWrapper>
      <MessageListSectionContainer />
      <MessageSectionContainer />
      <MessageDetailSectionContainer />
      <MsgDetailPdfModalContainer />
      <MsgDetailLanguageModalContainer />
      <MsgDetailBusinessModalContainer />
      <MsgDetailSupportModalContainer />
      <MsgFlagModalContainer />
    </MessageMainWrapper>
  );
};

const MessageMainWrapper = styled.div`
  display: flex;
  padding-top: 8rem;
  overflow-x: hidden;
`;

export default MessageMain;
