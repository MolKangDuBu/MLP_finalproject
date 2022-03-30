import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import { IoIosCopy } from 'react-icons/io';
import { MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';

const MsgDetailAddressBox = ({ addr, lat, lng }) => {
  return (
    <MsgDetailAdrsWrapper>
      <MsgDetailAdrsOuterWrapper>
        <MsgDetailAdrsInnerWrapper>
          <MsgDetailAdrsTitle>찾아가는 방법</MsgDetailAdrsTitle>
          <MsgDetailAdrsAddrestWrapper>
            <MsgDetailAdrsAddressTitle>주소</MsgDetailAdrsAddressTitle>
            <MsgDetailAdrsAddress>{addr}</MsgDetailAdrsAddress>
          </MsgDetailAdrsAddrestWrapper>
        </MsgDetailAdrsInnerWrapper>
        <CopyToClipboard text={addr}>
          <StButton>
            <MsgDetailAdrsButtonWrapper>
              <MsgDetailAdrsButtonInnerWrapper>
                <IoIosCopy />
                <MsgDetailAdrsButtonText>주소 복사하기</MsgDetailAdrsButtonText>
              </MsgDetailAdrsButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailAdrsButtonWrapper>
          </StButton>
        </CopyToClipboard>
        <a
          href={`https://www.google.com/maps/place/${addr}/@${lat}/@${lng}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StButton>
            <MsgDetailAdrsButtonWrapper>
              <MsgDetailAdrsButtonInnerWrapper>
                <MdLocationOn />
                <MsgDetailAdrsButtonText>
                  찾아가는 방법 보기
                </MsgDetailAdrsButtonText>
              </MsgDetailAdrsButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailAdrsButtonWrapper>
          </StButton>
        </a>
      </MsgDetailAdrsOuterWrapper>
    </MsgDetailAdrsWrapper>
  );
};

const MsgDetailAdrsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailAdrsOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailAdrsInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const MsgDetailAdrsTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
`;

const MsgDetailAdrsAddrestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0rem;
  word-break: keep-all;
`;

const MsgDetailAdrsAddressTitle = styled.div`
  font-weight: bold;
`;

const MsgDetailAdrsAddress = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailAdrsButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailAdrsButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailAdrsButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailAddressBox;
