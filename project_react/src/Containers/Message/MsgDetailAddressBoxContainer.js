import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailAddressBox from '../../Components/Message/MsgDetailAddressBox';

const MsgDetailAddressBoxContainer = () => {
  // ! redux
  const { activeReservation: reservation } = useSelector(
    state => state.message,
  );

  return (
    <MsgDetailAddressBox
      addr={reservation && reservation.addr}
      lat={reservation.location && reservation.location.lat}
      lng={reservation.location && reservation.location.lng}
    />
  );
};

export default MsgDetailAddressBoxContainer;
