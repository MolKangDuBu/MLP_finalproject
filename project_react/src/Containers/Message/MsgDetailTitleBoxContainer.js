import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailTitleBox from '../../Components/Message/MsgDetailTitleBox';

const MsgDetailTitleBoxContainer = () => {
  // ! redux
  const { activeReservation: reservation } = useSelector(
    state => state.message,
  );
  const checkin = new Date(reservation.checkin);
  const checkout = new Date(reservation.checkout);
  const options = { month: 'long', day: 'numeric' };
  const ci = checkin.toLocaleDateString('ko-KR', options);
  const co = checkout.toLocaleDateString('ko-KR', options);

  return (
    <MsgDetailTitleBox
      hostname={reservation && reservation.hostname}
      addr={reservation && reservation.addr}
      ci={ci}
      co={co}
    />
  );
};

export default MsgDetailTitleBoxContainer;
