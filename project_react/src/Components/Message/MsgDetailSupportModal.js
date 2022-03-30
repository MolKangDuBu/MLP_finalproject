import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';
import Button from '../Global/Button';

const MsgDetailSupportModal = ({ modalState, onClickCloseModal }) => {
  return (
    <StSupportModal
      width="55rem"
      height="fit-content"
      modalState={modalState}
      setModalState={onClickCloseModal}
      header
      title="출장자를 위한 고객 지원팀에게 연락하기"
    >
      <StSuppertModalWrapper>
        <a href="tel:+8210-6415-4738">
          <Button width="100%" padding="1.5rem">
            +8210-6415-4738 (한국)
          </Button>
        </a>
        <a href="tel:+8210-6415-4738">
          <Button width="100%" padding="1.5rem">
            +8210-6415-4738 (한국)
          </Button>
        </a>
      </StSuppertModalWrapper>
    </StSupportModal>
  );
};

const StSupportModal = styled(Modal)``;

const StSuppertModalWrapper = styled.div`
  padding: 2.5rem;
  & > a {
    display: flex;
  }

  & > a + a {
    margin-top: 2rem;
  }
`;

export default MsgDetailSupportModal;
