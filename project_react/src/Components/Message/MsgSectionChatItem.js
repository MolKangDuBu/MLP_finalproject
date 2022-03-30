import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import { AiFillFlag } from 'react-icons/ai';

const MsgSectionChatItem = ({
  onClickOpenModal,
  hostname,
  hostProfileImg,
  profileImg,
  name,
  text,
  isHost,
  h,
  m,
  msg,
}) => {
  return (
    <MsgItemWrapper>
      <MsgProfileWrapper>
        <Profile
          size="4.2rem"
          lastName="Kim"
          profileImg={isHost ? hostProfileImg : profileImg}
        />
      </MsgProfileWrapper>
      <MsgItemInner>
        <MsgSendUserWrapper>
          <MsgUserName>{isHost ? hostname : name}</MsgUserName>
          <MsgSendTime>
            {h}:{m}
          </MsgSendTime>
        </MsgSendUserWrapper>
        <MsgText>{text}</MsgText>
        <MsgText>{msg}</MsgText>
      </MsgItemInner>
      <MsgButtonWrapper>
        {isHost && (
          <StMsgButton
            btnType="circle"
            border="none"
            hover={{
              backgroundColor: theme.color.lightGray,
            }}
            onClick={onClickOpenModal}
          >
            <AiFillFlag />
          </StMsgButton>
        )}
      </MsgButtonWrapper>
    </MsgItemWrapper>
  );
};

const MsgItemWrapper = styled.div`
  display: flex;
`;

const MsgProfileWrapper = styled.div``;

const MsgItemInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1rem;
`;

const MsgButtonWrapper = styled.div`
  align-self: center;
`;

const StMsgButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.color.darkGray};
`;

const MsgSendUserWrapper = styled.div`
  display: flex;
`;

const MsgUserName = styled.div`
  padding-right: 0.5rem;
  font-size: 1.7rem;
  font-weight: bold;
`;

const MsgSendTime = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
  font-size: 1.2rem;
  font-weight: light;
  margin-top: 1px;
`;

const MsgText = styled.div`
  line-height: 2.5rem;
`;

export default MsgSectionChatItem;
