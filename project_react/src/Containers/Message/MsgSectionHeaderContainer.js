import React from 'react';
import MsgSectionHeader from '../../Components/Message/MsgSectionHeader';
import { ToastContainer, UndoToastContainer } from '../Global/ToastContainer';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideMsgDetailSection,
  showMsgDetailSection,
  archiveMsg,
  unarchiveMsg,
  showToast,
  hideToast,
  showUndoToast,
  hideUndoToast,
  undo,
} from '../../Modules/message';

const MsgSectionHeaderContainer = () => {
  // ! redux
  const { msgDetailSectionState, media } = useSelector(
    state => state.message.mediaState,
  );
  const { activeMsg } = useSelector(state => state.message);
  const { tempMsg } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // ! variable
  const { state: activeState, hostname } = activeMsg;
  const { state: tempState, id: tempId } = tempMsg;
  // ! event
  const onClickShowList = () => {
    dispatch(hideMsgDetailSection());
  };

  const onClickToggleDetail = () => {
    if (msgDetailSectionState) return dispatch(hideMsgDetailSection());
    if (!msgDetailSectionState) return dispatch(showMsgDetailSection());
  };

  const clearToast = () => dispatch(hideToast());
  const clearUndoToast = () => dispatch(hideUndoToast());

  const emitToast = () => {
    clearUndoToast();
    setTimeout(() => {
      dispatch(showToast());
      setTimeout(() => clearTimeout(clearToast()), 6000);
    });
  };

  const emitUndoToast = () => {
    clearToast();
    setTimeout(() => {
      dispatch(showUndoToast());
      setTimeout(() => clearTimeout(clearUndoToast()), 6000);
    });
  };

  const onClickArchive = () => {
    if (activeState === 'all') {
      // ! 1번 온클릭이벤트 발생하면 archive or unarchive
      dispatch(archiveMsg(activeMsg, activeState, 'hidden'));
      // ! 2번 Toast 발생
      emitToast();
    }
    if (activeState === 'hidden') {
      // ! 1번 온클릭이벤트 발생하면 archive or unarchive
      dispatch(unarchiveMsg(activeMsg, activeState, 'all'));
      // ! 2번 Toast 발생
      emitToast();
    }
  };

  // ! 3번 실행취소버튼 클릭 이벤트 발생
  // ! Toast.js로 연결
  const onClickUndo = () => {
    // ! 4번 기존 Toast clear
    clearToast();
    // ! 5번 이전 상태의 MsgList로 돌려놓음
    // ! messages의 all => hide로 바뀐 msg도 원래대로 복원
    // ! messages의 hide => msg 바뀐 msg도 원래대로 복원
    dispatch(undo(tempId, tempState));
    // ! 6번 UndoToast 발생
    emitUndoToast();
  };

  return (
    <>
      <MsgSectionHeader
        activeMsg={activeMsg}
        hostname={hostname}
        state={activeState}
        media={media}
        msgDetailSectionState={msgDetailSectionState}
        onClickToggleDetail={onClickToggleDetail}
        onClickShowList={onClickShowList}
        onClickArchive={onClickArchive}
      />
      <ToastContainer state={activeState} onClickUndo={onClickUndo} />
      <UndoToastContainer />
    </>
  );
};

export default MsgSectionHeaderContainer;
