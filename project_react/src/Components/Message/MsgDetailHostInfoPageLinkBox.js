import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Profile from '../Global/Profile';
import Button from '../Global/Button';
import { MdKeyboardArrowRight, MdPhoneIphone } from 'react-icons/md';

const MsgDetailHostInfoPageLinkBox = ({ hostname, hostProfileImg }) => {
  return (
    <MsgDetailHpLinkWrapper>
      <MsgDetailHpLinkOuterWrapper>
        <MsgDetailHpLinkInnerWrapper>
          <MsgDetailHpLinkTitleWrapper>
            <MsgDetailHpLinkTitle>호스트 {hostname}님</MsgDetailHpLinkTitle>
            <StLink to="/users/show/hostId" target="_blank">
              프로필 보기
            </StLink>
          </MsgDetailHpLinkTitleWrapper>
          <MsgDetailHpLinkProfileWrapper>
            <Profile lastName="김" profileImg={hostProfileImg} />
          </MsgDetailHpLinkProfileWrapper>
        </MsgDetailHpLinkInnerWrapper>
        <a href="tel:+8210-6415-4738">
          <StButton>
            <MsgDetailHpLinkButtonWrapper>
              <MsgDetailHpLinkButtonInnerWrapper>
                <MdPhoneIphone />
                <MsgDetailHpLinkButtonText>
                  호스트에게 전화하기
                </MsgDetailHpLinkButtonText>
              </MsgDetailHpLinkButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailHpLinkButtonWrapper>
          </StButton>
        </a>
      </MsgDetailHpLinkOuterWrapper>
    </MsgDetailHpLinkWrapper>
  );
};

const MsgDetailHpLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailHpLinkOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailHpLinkInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.5rem 2.5rem 2.5rem;
`;

const MsgDetailHpLinkTitleWrapper = styled.div`
  font-weight: bold;
`;

const MsgDetailHpLinkTitle = styled.h3`
  padding-bottom: 1.2rem;
  font-size: 2.2rem;
`;

const StLink = styled(Link)`
  font-weight: 400;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const MsgDetailHpLinkProfileWrapper = styled.div``;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailHpLinkButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailHpLinkButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailHpLinkButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailHostInfoPageLinkBox;
