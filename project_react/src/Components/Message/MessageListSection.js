import React from 'react';
import styled, { css } from 'styled-components';
import MsgListSectionHeaderContainer from '../../Containers/Message/MsgListSectionHeaderContainer';
import MsgListSectionMainContainer from '../../Containers/Message/MsgListSectionMainContainer';

const MessageListSection = ({ msgListSectionState, msgDetailSectionState }) => {
  return (
    <MessageListSectionWrapper
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    >
      <MsgListSectionHeaderContainer />
      <MsgListSectionMainContainer />
    </MessageListSectionWrapper>
  );
};

const MessageListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 37.5rem;
  opacity: 1;

  @media ${({ theme }) => theme.size.medium} {
    transition: all 0.3s ease;
    ${({ msgDetailSectionState }) =>
      msgDetailSectionState &&
      css`
        opacity: 0;
        transform: translate3d(-37.5rem, 0, 0);
      `}
  }
`;

export default MessageListSection;
