import React from 'react';
import styled, { css } from 'styled-components';
import MsgSectionHeaderContainer from '../../Containers/Message/MsgSectionHeaderContainer';
import MsgSectionMainContainer from '../../Containers/Message/MsgSectionMainContainer';
import MsgSectionFooterContainer from '../../Containers/Message/MsgSectionFooterContainer';

const MessageSection = ({ msgDetailSectionState, msgListSectionState }) => {
  return (
    <MessageSectionWrapper
      msgListSectionState={msgListSectionState}
      msgDetailSectionState={msgDetailSectionState}
    >
      <MsgSectionHeaderContainer />
      <MsgSectionMainContainer />
      <MsgSectionFooterContainer />
    </MessageSectionWrapper>
  );
};

const MessageSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  min-width: 37.5rem;

  transition: all 0.3s ease;
  ${({ msgDetailSectionState }) =>
    !msgDetailSectionState &&
    css`
      min-width: calc(100% - 37.5rem);
    `}

  @media ${({ theme }) => theme.size.medium} {
    min-width: calc(100% - 37.5rem);
    transition: all 0.3s ease;
    ${({ msgDetailSectionState }) =>
      msgDetailSectionState &&
      css`
        transform: translate3d(-37.5rem, 0, 0);
      `}
  }
`;

export default MessageSection;
