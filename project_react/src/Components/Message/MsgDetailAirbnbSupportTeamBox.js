import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { AiFillHome } from 'react-icons/ai';
import {
  MdKeyboardArrowRight,
  MdHelp,
  MdPhoneIphone,
  MdFlag,
} from 'react-icons/md';

const MsgDetailAirbnbSupportTeamBox = ({
  isCanceled,
  onClickOpenModal,
  onClickOpenFlagModal,
}) => {
  return (
    <MsgDetailAstWrapper>
      <MsgDetailAstOuterWrapper>
        <MsgDetailAstInnerWrapper>
          <MsgDetailAstTitle>에어비엔비 지원</MsgDetailAstTitle>
        </MsgDetailAstInnerWrapper>
        <a
          href="https://www.airbnb.co.kr/help/home"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StButton>
            <MsgDetailAstButtonWrapper>
              <MsgDetailAstButtonInnerWrapper>
                <MdHelp />
                <MsgDetailAstButtonText>도움말 센터</MsgDetailAstButtonText>
              </MsgDetailAstButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailAstButtonWrapper>
          </StButton>
        </a>
        <a
          href="https://www.airbnb.co.kr/resolutions"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StButton>
            <MsgDetailAstButtonWrapper>
              <MsgDetailAstButtonInnerWrapper>
                <AiFillHome />
                <MsgDetailAstButtonText>해결 센터</MsgDetailAstButtonText>
              </MsgDetailAstButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailAstButtonWrapper>
          </StButton>
        </a>
        {isCanceled ? (
          <StButton onClick={onClickOpenFlagModal}>
            <MsgDetailAstButtonWrapper>
              <MsgDetailAstButtonInnerWrapper>
                <MdFlag />
                <MsgDetailAstButtonText>호스트 신고하기</MsgDetailAstButtonText>
              </MsgDetailAstButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailAstButtonWrapper>
          </StButton>
        ) : (
          <>
            <a href="tel:+8210-6415-4738">
              <StButton>
                <MsgDetailAstButtonWrapper>
                  <MsgDetailAstButtonInnerWrapper>
                    <MdPhoneIphone />
                    <MsgDetailAstButtonText>
                      호스트에게 전화하기
                    </MsgDetailAstButtonText>
                  </MsgDetailAstButtonInnerWrapper>
                  <MdKeyboardArrowRight />
                </MsgDetailAstButtonWrapper>
              </StButton>
            </a>
            <StButton onClick={onClickOpenModal}>
              <MsgDetailAstButtonWrapper>
                <MsgDetailAstButtonInnerWrapper>
                  <MdPhoneIphone />
                  <MsgDetailAstButtonText>
                    출장자를 위한 고객 지원팀에 연락하기
                  </MsgDetailAstButtonText>
                </MsgDetailAstButtonInnerWrapper>
                <MdKeyboardArrowRight />
              </MsgDetailAstButtonWrapper>
            </StButton>
          </>
        )}
      </MsgDetailAstOuterWrapper>
    </MsgDetailAstWrapper>
  );
};

const MsgDetailAstWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailAstOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailAstInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const MsgDetailAstTitle = styled.h3`
  padding-bottom: 3rem;
  font-size: 2.2rem;
  font-weight: 500;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailAstButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailAstButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailAstButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailAirbnbSupportTeamBox;
