import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import theme from '../../style/theme';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';

const MsgDetailPdfModal = ({
  modalState,
  onClickCloseModal,
  onClickOpenModal,
  onChangePdf,
}) => {
  return (
    <StPdfModal
      width="55rem"
      height="fit-content"
      modalState={modalState}
      setModalState={onClickCloseModal}
      header
    >
      <StPdfModalWrapper>
        <StPdfModalTitle>일행 정보</StPdfModalTitle>
        <StPdfModalSub>
          저장하기 전에 모든 게스트의 성명을 입력했는지 확인해주세요. 각 성명
          뒤에 쉼표를 찍어주세요.
        </StPdfModalSub>
        <StPdfModalTextarea
          placeholder="예: Gil Dong Hong, Yuna Kim"
          onChange={onChangePdf}
        />
      </StPdfModalWrapper>
      <StModalFooter>
        <Button
          btnType="underlined"
          hover="none"
          padding="none"
          onClick={onClickOpenModal}
        >
          건너뛰기
        </Button>
        <Button
          color="black"
          width="8rem"
          height="4.5rem"
          hover={`background: ${rgba(theme.color.black, 0.9)}`}
          onClick={onClickOpenModal}
        >
          다음
        </Button>
      </StModalFooter>
    </StPdfModal>
  );
};

const StPdfModal = styled(Modal)`
  padding-bottom: 7rem;
  max-height: 85rem;
`;

const StPdfModalWrapper = styled.div`
  padding: 2.5rem;
`;

const StPdfModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const StPdfModalSub = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: light;
  word-break: keep-all;
  line-height: 2rem;
`;

const StPdfModalTextarea = styled.textarea`
  margin-top: 3rem;
  width: 100%;
  height: 6rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  padding: 1rem;
  font-size: 1.6rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-size: 1.6rem;
  }
`;

const StModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default MsgDetailPdfModal;
