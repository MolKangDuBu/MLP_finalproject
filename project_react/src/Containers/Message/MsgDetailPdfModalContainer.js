import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailPdfModal from '../../Components/Message/MsgDetailPdfModal';
import { closeModal, openModal, pdfInput } from '../../Modules/message';

const MsgDetailPdfModalContainer = () => {
  // ! redux
  const pdf = useSelector(state => state.message.modalState.pdf);
  const dispatch = useDispatch();

  // ! modal event
  const onClickCloseModal = () => {
    dispatch(closeModal('pdf'));
  };

  const onClickOpenModal = () => {
    dispatch(closeModal('pdf'));
    dispatch(openModal('language'));
  };

  const onChangePdf = e => {
    dispatch(pdfInput(e.target.value));
  };

  return (
    <MsgDetailPdfModal
      modalState={pdf}
      onClickCloseModal={onClickCloseModal}
      onClickOpenModal={onClickOpenModal}
      onChangePdf={onChangePdf}
    />
  );
};

export default MsgDetailPdfModalContainer;
