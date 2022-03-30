import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MsgDetailSupportModal from '../../Components/Message/MsgDetailSupportModal';
import { closeModal } from '../../Modules/message';

const MsgDetailSupportModalContainer = () => {
  const support = useSelector(state => state.message.modalState.support);
  const dispatch = useDispatch();

  const onClickCloseModal = () => {
    dispatch(closeModal('support'));
  };

  return (
    <MsgDetailSupportModal
      modalState={support}
      onClickCloseModal={onClickCloseModal}
    />
  );
};

export default MsgDetailSupportModalContainer;
