import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { FcExport } from 'react-icons/fc';
import Button from '../Global/Button';
import Profile from '../Global/Profile';
// import CarouselContainer from '../../Containers/Global/CarouselContainer';

const MsgDetailReservedHomeBox = ({
  title,
  ciDateString,
  ciDayName,
  ciH,
  ciM,
  coDateString,
  coDayName,
  coH,
  coM,
  hostProfileImg,
  hostname,
  address,
  guest,
  price,
  isCanceled,
  hover,
  onMouseOver,
  onMouseLeave,
  imageArray,
  imageCount,
}) => {
  return (
    <MsgDetailRhBoxWrapper>
      <div>
        <img src="" alt="#" />
      </div>
      {/* <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <CarouselContainer
          size="superLarge"
          isHovered={hover}
          imageArray={imageArray}
          imageCount={imageCount}
          blockLink
        />
      </div> */}
      <MsgDetailRhBoxTitle>{title}</MsgDetailRhBoxTitle>
      <MsgDetailRhBoxReservedStateText>
        {!isCanceled && '예약이 완료되었습니다.'}
      </MsgDetailRhBoxReservedStateText>
      <MsgDetailRhBoxDescription isCanceled={isCanceled}>
        {isCanceled ? (
          <>
            <StFcExport />
            <StRefundText>
              환불액 ₩{price}을(를) 지급해드립니다. 아직 환불을 받지 못한 경우
              거래 은행에 문의하여 입금 예정일을 확인하세요.
            </StRefundText>
          </>
        ) : (
          '여행 중 발생한 문제로 인해 상대방에게 금액을 지급하거나 요청해야 할 경우, 해결 센터를 이용하시기 바랍니다.'
        )}
      </MsgDetailRhBoxDescription>
      <MsgDetailRhBoxButtonWrapper>
        <a
          href="https://www.airbnb.co.kr/resolutions"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button padding="1.3rem 0rem">지급 또는 결제 요청</Button>
        </a>
      </MsgDetailRhBoxButtonWrapper>
      <MsgDetailRhCheckInOutWrapper>
        {isCanceled ? (
          <MsgDetailRhRefund>
            <div>회원님의 예약이 취소되었습니다</div>
            <div>
              회원님은 ₩{price} 전액을 환불받을 수 있습니다. 회원님의 환불
              계좌로 입금됩니다.
            </div>
          </MsgDetailRhRefund>
        ) : (
          <>
            <MsgDetailRhCheckInWrapper>
              <MsgDetailRhCheckInOutText>체크인</MsgDetailRhCheckInOutText>
              <MsgDetailRhCheckInOutDate>
                {ciDateString} ({ciDayName})
              </MsgDetailRhCheckInOutDate>
              <MsgDetailRhCheckInOutTime>
                {ciH}:{ciM}
              </MsgDetailRhCheckInOutTime>
            </MsgDetailRhCheckInWrapper>
            <MsgDetailRhCheckOutWrapper>
              <MsgDetailRhCheckInOutText>체크아웃</MsgDetailRhCheckInOutText>
              <MsgDetailRhCheckInOutDate>
                {coDateString} ({coDayName})
              </MsgDetailRhCheckInOutDate>
              <MsgDetailRhCheckInOutTime>
                {coH}:{coM}
              </MsgDetailRhCheckInOutTime>
            </MsgDetailRhCheckOutWrapper>
          </>
        )}
      </MsgDetailRhCheckInOutWrapper>
      <MsgDetailRhSimpleInfoWrapper>
        <MsgDetailRhSimpleInfoText>간략 정보</MsgDetailRhSimpleInfoText>
        <MsgDetailRhSimpleInfoHostWrapper>
          <MsgDetailRhSimpleInfoHostDataWrapper>
            <MsgDetailRhSimpleInfoHostName>
              호스트:{' '}
              <StLink
                to="/users/show/hostid"
                style={{ textDecoration: 'underline' }}
                target="_blank"
              >
                {hostname}
              </StLink>
              님
            </MsgDetailRhSimpleInfoHostName>
            <MsgDetailRhSimpleInfoHomeInfo>
              숙소({address})의 집 전체 · 게스트 {guest + 1}명
            </MsgDetailRhSimpleInfoHomeInfo>
            <MsgDetailRhSimpleInfoPrice>
              {isCanceled ? '₩0' : `₩${price}`}
            </MsgDetailRhSimpleInfoPrice>
          </MsgDetailRhSimpleInfoHostDataWrapper>
          <MsgDetailRhSimpleInfoProfileWrapper>
            <Profile lastName="박" size="4.8rem" profileImg={hostProfileImg} />
          </MsgDetailRhSimpleInfoProfileWrapper>
        </MsgDetailRhSimpleInfoHostWrapper>
      </MsgDetailRhSimpleInfoWrapper>
    </MsgDetailRhBoxWrapper>
  );
};

const MsgDetailRhBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.5rem 2.5rem 4rem;
`;

const MsgDetailRhBoxTitle = styled.div`
  padding-top: 3rem;
  font-size: 2.2rem;
  word-break: keep-all;
  line-height: 2.4rem;
`;

const MsgDetailRhBoxReservedStateText = styled.div`
  padding-top: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
`;

const MsgDetailRhBoxDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 1.6rem;
  line-height: 2.5rem;
  font-weight: light;
`;

const StFcExport = styled(FcExport)`
  font-size: 10rem;
  & > svg {
    padding: 0rem;
  }
  margin-top: -3.1rem;
`;

const StRefundText = styled.div`
  padding-left: 1rem;
  line-height: 2.5rem;
`;

const MsgDetailRhBoxButtonWrapper = styled.div`
  padding-top: 1rem;
  & > a > button {
    width: 100%;
  }
`;
const MsgDetailRhRefund = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  & > :last-child {
    padding-top: 1rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;

const MsgDetailRhCheckInOutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0rem;
  padding: 2.5rem 0rem;
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailRhCheckInWrapper = styled.div`
  flex-grow: 1;
  padding-right: 3rem;
`;

const MsgDetailRhCheckOutWrapper = styled.div`
  flex-grow: 1;
  padding-left: 3rem;
  border-left: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailRhCheckInOutText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const MsgDetailRhCheckInOutDate = styled.div`
  padding-top: 2.5rem;
`;

const MsgDetailRhCheckInOutTime = styled.div`
  padding-top: 1rem;
  font-size: 2.5rem;
`;

const MsgDetailRhSimpleInfoWrapper = styled.div``;

const MsgDetailRhSimpleInfoText = styled.div`
  color: ${({ theme }) => darken(0.1, theme.color.gray)};
  font-size: 1.2rem;
`;

const MsgDetailRhSimpleInfoHostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.8rem;
`;

const MsgDetailRhSimpleInfoHostDataWrapper = styled.div``;

const MsgDetailRhSimpleInfoHostName = styled.div`
  line-height: 2.5rem;
`;

const StLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const MsgDetailRhSimpleInfoHomeInfo = styled.div`
  line-height: 2.5rem;
  word-break: keep-all;
`;

const MsgDetailRhSimpleInfoPrice = styled.div`
  line-height: 2.5rem;
`;

const MsgDetailRhSimpleInfoProfileWrapper = styled.div``;

export default MsgDetailReservedHomeBox;
