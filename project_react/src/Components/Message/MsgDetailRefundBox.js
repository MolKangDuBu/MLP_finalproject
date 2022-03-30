import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Button from '../Global/Button';
import {
  MdKeyboardArrowRight,
  MdAssignmentTurnedIn,
  MdReceipt,
} from 'react-icons/md';

const MsgDetailRefundBox = ({
  price,
  onClickOpenModal,
  onClickOpenReceiptPDF,
}) => {
  return (
    <MsgDetailSettlementWrapper>
      <MsgDetailSettlementOuterWrapper>
        <MsgDetailSettlementInnerWrapper>
          <MsgDetailSettlementTitle>결제 정보</MsgDetailSettlementTitle>
          <MsgDetailSettlementAddrestWrapper>
            <MsgDetailSettlementAddressTitle>
              총 비용
            </MsgDetailSettlementAddressTitle>
            <MsgDetailSettlementAddress>₩{price}</MsgDetailSettlementAddress>
          </MsgDetailSettlementAddrestWrapper>
        </MsgDetailSettlementInnerWrapper>
        <StButton onClick={onClickOpenModal}>
          <MsgDetailSettlementButtonWrapper>
            <MsgDetailSettlementButtonInnerWrapper>
              <MdAssignmentTurnedIn />
              <MsgDetailSettlementButtonText>
                출장 경비 청구를 위한 세부 정보 입력하기
              </MsgDetailSettlementButtonText>
            </MsgDetailSettlementButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </MsgDetailSettlementButtonWrapper>
        </StButton>
        <StButton onClick={onClickOpenReceiptPDF}>
          <MsgDetailSettlementButtonWrapper>
            <MsgDetailSettlementButtonInnerWrapper>
              <MdReceipt />
              <MsgDetailSettlementButtonText>
                영수증 받기
              </MsgDetailSettlementButtonText>
            </MsgDetailSettlementButtonInnerWrapper>
            <MdKeyboardArrowRight />
          </MsgDetailSettlementButtonWrapper>
        </StButton>
      </MsgDetailSettlementOuterWrapper>
    </MsgDetailSettlementWrapper>
  );
};

const MsgDetailSettlementWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MsgDetailSettlementOuterWrapper = styled.div`
  padding-bottom: 2rem;
`;

const MsgDetailSettlementInnerWrapper = styled.div`
  padding: 4.5rem 2.5rem 0rem;
`;

const MsgDetailSettlementTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
`;

const MsgDetailSettlementAddrestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0rem;
  word-break: keep-all;
`;

const MsgDetailSettlementAddressTitle = styled.div`
  font-weight: bold;
`;

const MsgDetailSettlementAddress = styled.div`
  padding-top: 1rem;
`;

const StButton = styled(Button)`
  width: 100%;
  border: none;
  border-radius: 0px;
  padding: 0rem;
`;

const MsgDetailSettlementButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 0rem;
  width: calc(100% - 4rem);
  border-top: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const MsgDetailSettlementButtonInnerWrapper = styled.div`
  display: flex;
`;

const MsgDetailSettlementButtonText = styled.div`
  padding-left: 1rem;
  font-size: 1.4rem;
`;

export default MsgDetailRefundBox;
