import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgFlagModal from '../../Components/Message/MsgFlagModal';
import { closeModal } from '../../Modules/message';

const MsgFlagModalContainer = () => {
  const flag = useSelector(state => state.message.modalState.flag);
  const dispatch = useDispatch();

  const onClickCloseModal = () => {
    dispatch(closeModal('flag'));
    setPrev(false);
    setNext(false);
    // setTimeout(() => {
    // }, 1000);
  };

  const [next, setNext] = React.useState(false);
  const [prev, setPrev] = React.useState(false);

  const onClickNext = () => {
    setNext(!next);
  };

  const onClickPrev = () => {
    setPrev(!prev);
    setNext(!next);
  };

  return (
    <MsgFlagModal
      modalState={flag}
      onClickCloseModal={onClickCloseModal}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
      next={next}
    />
  );
};

export default MsgFlagModalContainer;
