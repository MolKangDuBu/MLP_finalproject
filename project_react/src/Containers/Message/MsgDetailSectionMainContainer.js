import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailSectionMain from '../../Components/Message/MsgDetailSectionMain';
import { activeReservation } from '../../Modules/message';

const MsgDetailSectionMainContainer = () => {
  // ! redux
  const { activeMsg } = useSelector(state => state.message);
  const { contents } = activeMsg;
  console.log(contents && !contents.isCanceled);
  const { reservations: upcomings } = useSelector(
    state => state.trips.upcoming.data.upcoming,
  );
  const { reservations: pasts } = useSelector(
    state => state.trips.past.data.past,
  );
  const { reservations: canceleds } = useSelector(
    state => state.trips.canceled.data.canceled,
  );
  const dispatch = useDispatch();

  // ! variable
  const reservations = upcomings.concat(pasts).concat(canceleds);
  const reservation = reservations.find(
    r => activeMsg && activeMsg.reservationId === r.reservationId,
  );

  // ! effect
  useEffect(() => {
    dispatch(activeReservation(reservation));
  }, [dispatch, reservation]);

  return (
    <MsgDetailSectionMain
      activeMsg={activeMsg}
      isCanceled={contents && contents.isCanceled}
    />
  );
};

export default MsgDetailSectionMainContainer;
