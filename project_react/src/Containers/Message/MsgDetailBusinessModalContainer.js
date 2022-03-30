import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MsgDetailBusinessModal from '../../Components/Message/MsgDetailBusinessModal';
import { closeModal } from '../../Modules/message';

const MsgDetailBusinessModalContainer = () => {
  const business = useSelector(state => state.message.modalState.business);
  const dispatch = useDispatch();

  const onClickCloseModal = () => {
    dispatch(closeModal('business'));
  };

  return (
    <MsgDetailBusinessModal
      modalState={business}
      onClickCloseModal={onClickCloseModal}
    />
  );
};

export default MsgDetailBusinessModalContainer;
