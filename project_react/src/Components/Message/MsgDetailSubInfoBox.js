import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { MdKeyboardArrowRight, MdPrint, MdReceipt } from 'react-icons/md';
import { FaGlobe, FaDoorOpen } from 'react-icons/fa';
import Profile from '../Global/Profile';
import Button from '../Global/Button';

const MsgDetailSubInfoBox = ({
  guest,
  profileImg,
  guestProfileImg,
  reservationId,
  isCanceled,
  onClickOpenModal,
  onClickOpenPrint,
  onClickOpenReceiptPDF,
  homeId,
}) => {
  return (
    <MsgDetailSiWrapper>
      {isCanceled ? (
        <MsgDetailSiOuterWrapper>
          <MsgDetailSiInnerWrapper>
            <MsgDetailSiTitle>예약 세부정보</MsgDetailSiTitle>
            <MsgDetailSiReservedNumberWrapper isCanceled={isCanceled}>
              <MsgDetailSiReservedNumberText>
                예약 번호
              </MsgDetailSiReservedNumberText>
              <MsgDetailSiReservedNumber>
                {reservationId}
              </MsgDetailSiReservedNumber>
            </MsgDetailSiReservedNumberWrapper>
            <MsgDetailSiReservedNumberWrapper>
              <MsgDetailSiReservedNumberText>
                환불 정책
              </MsgDetailSiReservedNumberText>
              <MsgDetailSiReservedNumber>
                유연. 체크인 1일 전까지 취소 시 전액 환불.
              </MsgDetailSiReservedNumber>
            </MsgDetailSiReservedNumberWrapper>
            <MsgDetailSiReservedNumberWrapper>
              <MsgDetailSiReservedNumberText>
                결제 세부정보
              </MsgDetailSiReservedNumberText>
              <MsgDetailSiReservedNumber>
                <div>총 비용: ₩0</div>
                <Link to="/printreceipt" target="_blank">
                  <Button
                    btnType="underlined"
                    padding="0rem"
                    hover={'color: black'}
                    style={{
                      color: 'gray',
                      borderRadius: '0px',
                      marginTop: '1rem',
                    }}
                  >
                    영수증 보기
                  </Button>
                </Link>
              </MsgDetailSiReservedNumber>
            </MsgDetailSiReservedNumberWrapper>
          </MsgDetailSiInnerWrapper>
          <Link to={`/detail/${homeId}`} target="_blank">
            <StButton>
              <MsgDetailSiButtonWrapper>
                <MsgDetailSiButtonInnerWrapper>
                  <FaDoorOpen />
                  <MsgDetailSiButtonText>숙소 보기</MsgDetailSiButtonText>
                </MsgDetailSiButtonInnerWrapper>
                <MdKeyboardArrowRight />
              </MsgDetailSiButtonWrapper>
            </StButton>
          </Link>
        </MsgDetailSiOuterWrapper>
      ) : (
        <MsgDetailSiOuterWrapper>
          <MsgDetailSiInnerWrapper>
            <MsgDetailSiTitle>예약 세부정보</MsgDetailSiTitle>
            <MsgDetailSiGuestProfilesWrapper>
              <MsgDetailSiGuestWrapper>
                <MsgDetailSiGuestText>게스트</MsgDetailSiGuestText>
                <MsgDetailSiGuestCount>
                  게스트 {guest + 1}명
                </MsgDetailSiGuestCount>
              </MsgDetailSiGuestWrapper>
              <MsgDetailSiGuestProfileLists guest={guest}>
                {!!guest && (
                  <MsgDetailSiGuestProfileItem>
                    <Profile
                      lastName="박"
                      size="4.8rem"
                      profileImg={guestProfileImg}
                    />
                  </MsgDetailSiGuestProfileItem>
                )}
                <MsgDetailSiGuestProfileItem>
                  <Profile
                    lastName="박"
                    size="4.8rem"
                    profileImg={profileImg}
                  />
                </MsgDetailSiGuestProfileItem>
              </MsgDetailSiGuestProfileLists>
            </MsgDetailSiGuestProfilesWrapper>
            <MsgDetailSiReservedNumberWrapper>
              <MsgDetailSiReservedNumberText>
                예약 번호
              </MsgDetailSiReservedNumberText>
              <MsgDetailSiReservedNumber>
                {reservationId}
              </MsgDetailSiReservedNumber>
            </MsgDetailSiReservedNumberWrapper>
          </MsgDetailSiInnerWrapper>
          <StButton onClick={onClickOpenModal}>
            <MsgDetailSiButtonWrapper>
              <MsgDetailSiButtonInnerWrapper>
                <FaGlobe />
                <MsgDetailSiButtonText>
                  여행일정표 PDF로 받기(비자신청용)
                </MsgDetailSiButtonText>
              </MsgDetailSiButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailSiButtonWrapper>
          </StButton>
          <StButton onClick={onClickOpenPrint}>
            <MsgDetailSiButtonWrapper>
              <MsgDetailSiButtonInnerWrapper>
                <MdPrint />
                <MsgDetailSiButtonText>세부정보 인쇄하기</MsgDetailSiButtonText>
              </MsgDetailSiButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailSiButtonWrapper>
          </StButton>
          <StButton onClick={onClickOpenReceiptPDF}>
            <MsgDetailSiButtonWrapper>
              <MsgDetailSiButtonInnerWrapper>
                <MdReceipt />
                <MsgDetailSiButtonText>영수증 받기</MsgDetailSiButtonText>
              </MsgDetailSiButtonInnerWrapper>
              <MdKeyboardArrowRight />
            </MsgDetailSiButtonWrapper>
          </StButton>
        </MsgDetailSiOuterWrapper>
      )}
    </MsgDetailSiWrapper>
  );
};

const MsgDetailSiWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailSiOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailSiInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const MsgDetailSiTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
`;

const MsgDetailSiGuestProfilesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
`;

const MsgDetailSiGuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailSiGuestText = styled.div`
  font-weight: bold;
`;

const MsgDetailSiGuestCount = styled.div`
  padding-top: 1rem;
`;

const MsgDetailSiGuestProfileLists = styled.ul`
  display: flex;
  position: relative;
  ${({ guest }) =>
    guest &&
    css`
      & > :first-child {
        position: absolute;
        right: 3rem;
      }
      & > :first-child > :first-child :first-child {
        border: 1px solid ${({ theme }) => theme.color.white};
      }
      & > :last-child > :first-child :first-child {
        border: 1px solid ${({ theme }) => theme.color.white};
      }
    `}
`;

const MsgDetailSiGuestProfileItem = styled.li``;

const MsgDetailSiReservedNumberWrapper = styled.div`
  padding: 3rem 0rem;
  ${({ isCanceled }) =>
    isCanceled
      ? css`
          border-top: none;
        `
      : css`
          border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
        `}
`;

const MsgDetailSiReservedNumberText = styled.div`
  font-weight: bold;
`;

const MsgDetailSiReservedNumber = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailSiButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailSiButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailSiButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailSubInfoBox;
