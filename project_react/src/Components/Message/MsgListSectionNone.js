import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import Button from '../Global/Button';

const MsgListNone = () => {
  return (
    <MsgListNoneWrapper>
      <MsgListNoneTitle>메시지를 모두 읽으셨습니다.</MsgListNoneTitle>
      <MsgListNoneText>
        여행이나 체험을 예약한 경우, 호스트가 보낸 메시지가 여기에 표시됩니다.
      </MsgListNoneText>
      <Link to="/">
        <Button padding="1.5rem 1.8rem">에어비엔비 둘러보기</Button>
      </Link>
    </MsgListNoneWrapper>
  );
};

const MsgListNoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MsgListNoneTitle = styled.h3`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  font-size: 1.8rem;
`;

const MsgListNoneText = styled.p`
  padding-bottom: 1rem;
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-weight: light;
  text-align: center;
`;

export default MsgListNone;
