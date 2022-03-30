import React from 'react';
import styled from 'styled-components';
import { rgba, lighten } from 'polished';
import theme from '../../style/theme';
import Modal from '../Global/Modal';
import ModalFooter from '../Global/ModalFooter';
import Button from '../Global/Button';
import scheduleDoc from '../../Assets/docs/schedule.doc';

const MsgDetailLanguageModal = ({ modalState, onClickCloseModal }) => {
  return (
    <StPdfModal
      width="55rem"
      height="fit-content"
      modalState={modalState}
      setModalState={onClickCloseModal}
      header
    >
      <StPdfModalWrapper>
        <StPdfModalTitle>언어를 선택하세요</StPdfModalTitle>
        <StPdfModalSub>
          예약 세부정보가 저장되는 언어입니다. 나중에 인쇄할 수 있습니다.
        </StPdfModalSub>
        <StPdfModalRadioWrapper>
          <StPdfModalLabel>
            <StPdfModalText>선호하는 언어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" checked={true} />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>중국어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>영어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>프랑스어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>독일어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>이탈리아어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>일본어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>한국어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>포르투갈어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>러시아어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
          <StPdfModalLabel>
            <StPdfModalText>스페인어</StPdfModalText>
            <StPdfModalInput type="radio" name="lang" />
          </StPdfModalLabel>
        </StPdfModalRadioWrapper>
      </StPdfModalWrapper>
      <StModalFooter>
        <StForm method="get" action={scheduleDoc}>
          <Button
            type="submit"
            color="black"
            width="100%"
            height="4.5rem"
            hover={`background: ${rgba(theme.color.black, 0.9)}`}
            onClick={onClickCloseModal}
          >
            저장
          </Button>
        </StForm>
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

const StPdfModalRadioWrapper = styled.div`
  padding: 2rem 0rem 3rem;
  height: 50rem;
  overflow: scroll;
`;

const StPdfModalLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  & + label {
    border-bottom: 1px solid ${({ theme }) => lighten(0.1, theme.color.gray)};
  }
  cursor: pointer;
`;

const StPdfModalInput = styled.input`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const StPdfModalText = styled.div`
  font-weight: light;
`;

const StModalFooter = styled(ModalFooter)`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const StForm = styled.form`
  width: 100%;
`;

export default MsgDetailLanguageModal;
