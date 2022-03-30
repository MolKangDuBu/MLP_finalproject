import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailLanguageModal from '../../Components/Message/MsgDetailLanguageModal';
import { closeModal } from '../../Modules/message';

const MsgDetailLanguageModalContainer = () => {
  // ! redux
  const language = useSelector(state => state.message.modalState.language);
  const dispatch = useDispatch();

  // ! modal event
  const onClickCloseModal = () => {
    dispatch(closeModal('language'));
  };

  return (
    <MsgDetailLanguageModal
      modalState={language}
      onClickCloseModal={onClickCloseModal}
    />
  );
};

export default MsgDetailLanguageModalContainer;
