import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Button from './Button';
import { FaBox } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

const Toast = ({ state, toast, onClickUndo, hasMsgs, ...rest }) => {
  // Message에서 archive box클릭시 토스트 알람
  return (
    <ToastWrapper toast={toast}>
      <StFaBox />
      <ToastText>
        {state === 'all' ? '대화 보관 처리됨' : '대화 보관 처리 취소됨'}
        {' · '}
      </ToastText>
      <Button
        btnType="underlined"
        padding="0rem 0rem 0rem 0.2rem"
        fontSize="1.4rem"
        hover="background: none"
        // ! 3번 실행취소버튼 클릭 이벤트 발생
        // ! MsgSectionHeaderContainer.js로 이동
        onClick={onClickUndo}
        style={{ borderRadius: '0px' }}
        {...rest}
      >
        실행 취소
      </Button>
    </ToastWrapper>
  );
};

const UndoToast = ({ undoToast }) => {
  return (
    <UndoToastWrapper undoToast={undoToast}>
      <StFaBox />
      <ToastText>실행 취소</ToastText>
    </UndoToastWrapper>
  );
};

const CopyToast = () => {
  // Message에서 클립보드 복사 버튼 클릭 시 토스트 알람
  return (
    <ClipboardToastWrapper>
      <MdCheckCircle />
      <ToastText>클립보드에 복사 완료</ToastText>
    </ClipboardToastWrapper>
  );
};

const toastWrapperStyle = css`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.9rem 1.5rem;
  width: fit-content;
  box-shadow: 0rem 0rem 2rem ${({ theme }) => lighten(0.1, theme.color.gray)};
`;

const ToastWrapper = styled.div`
  ${toastWrapperStyle}
  position: absolute;
  bottom: 0rem;
  left: 18.75rem;
  overflow: hidden;
  transform: translate3d(-50%, 0, 0);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in;
  ${({ toast }) =>
    toast &&
    css`
      opacity: 1;
      visibility: visible;
      bottom: 5rem;
    `}
`;

const UndoToastWrapper = styled.div`
  ${toastWrapperStyle}
  position: absolute;
  bottom: 0rem;
  left: 18.75rem;
  overflow: hidden;
  transform: translate3d(-50%, 0, 0);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in;
  ${({ undoToast }) =>
    undoToast &&
    css`
      opacity: 1;
      visibility: visible;
      bottom: 5rem;
    `}
`;

const ClipboardToastWrapper = styled.div`
  ${toastWrapperStyle}
`;

const ToastText = styled.div`
  padding-left: 0.5rem;
  font-size: 1.4rem;
`;

const StFaBox = styled(FaBox)`
  font-size: 1.2rem;
`;

export { Toast, CopyToast, UndoToast };
