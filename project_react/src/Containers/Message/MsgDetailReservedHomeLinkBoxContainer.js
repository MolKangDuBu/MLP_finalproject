import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailReservedHomeLinkBox from '../../Components/Message/MsgDetailReservedHomeLinkBox';

const MsgDetailReservedHomeLinkBoxContainer = () => {
  // ! redux
  const { activeReservation: reservation } = useSelector(
    state => state.message,
  );

  return (
    <MsgDetailReservedHomeLinkBox
      rules={reservation && reservation.rules}
      homeId={reservation && reservation.homeId}
    />
  );
};

export default MsgDetailReservedHomeLinkBoxContainer;
