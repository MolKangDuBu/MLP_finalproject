import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';

const MsgDetailBusinessModal = ({ modalState, onClickCloseModal }) => {
  return (
    <StBusinessModal
      width="55rem"
      height="fit-content"
      modalState={modalState}
      setModalState={onClickCloseModal}
      header
    >
      <StBusinessModalWrapper>
        <StBusinessModalTitle>참고사항 수정하기</StBusinessModalTitle>
        <StBusinessModalSub>
          회사 주소와 출장 관련 기타 정보를 입력하세요.
        </StBusinessModalSub>
        <StBusinessModalTextarea />
      </StBusinessModalWrapper>
      <StBusinessModalFooter>
        <Button color="gray" width="100%" height="4.5rem" border="none" hover>
          저장
        </Button>
      </StBusinessModalFooter>
    </StBusinessModal>
  );
};

const StBusinessModal = styled(Modal)`
  padding-bottom: 7rem;
  max-height: 85rem;
`;

const StBusinessModalWrapper = styled.div`
  padding: 2.5rem 2.5rem;
`;

const StBusinessModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const StBusinessModalSub = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: light;
  word-break: keep-all;
  line-height: 2rem;
`;

const StBusinessModalTextarea = styled.textarea`
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

const StBusinessModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;
export default MsgDetailBusinessModal;
