import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailHostInfoPageLinkBox from '../../Components/Message/MsgDetailHostInfoPageLinkBox';

const MsgDetailHostInfoPageLinkBoxContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);
  const { activeReservation: reservation } = useSelector(
    state => state.message,
  );

  return (
    <MsgDetailHostInfoPageLinkBox
      hostname={reservation && reservation.hostname}
      hostProfileImg={activeMsg.contents && activeMsg.contents.hostProfileImg}
    />
  );
};

export default MsgDetailHostInfoPageLinkBoxContainer;
