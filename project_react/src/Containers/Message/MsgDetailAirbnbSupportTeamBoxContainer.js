import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailAirbnbSupportTeamBox from '../../Components/Message/MsgDetailAirbnbSupportTeamBox';
import { openModal } from '../../Modules/message';

const MsgDetailAirbnbSupportTeamBoxContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);
  const dispatch = useDispatch();

  // ! modal event
  const onClickOpenModal = () => {
    dispatch(openModal('support'));
  };

  const onClickOpenFlagModal = () => {
    dispatch(openModal('flag'));
  };

  return (
    <MsgDetailAirbnbSupportTeamBox
      isCanceled={activeMsg.contents && activeMsg.contents.isCanceled}
      onClickOpenModal={onClickOpenModal}
      onClickOpenFlagModal={onClickOpenFlagModal}
    />
  );
};

export default MsgDetailAirbnbSupportTeamBoxContainer;
