import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MsgDetailSubInfoBox from '../../Components/Message/MsgDetailSubInfoBox';
import { openModal } from '../../Modules/message';
import RECEIPT from '../../Assets/docs/receipt.pdf';

const MsgDetailSubInfoBoxContainer = () => {
  // ! redux
  const { profileImg, activeReservation: reservation } = useSelector(
    state => state.message,
  );
  const dispatch = useDispatch();

  // ! modal event
  const onClickOpenModal = () => {
    dispatch(openModal('pdf'));
  };

  // ! print event
  const onClickOpenPrint = () => {
    window.print();
  };

  // ! pdf open event
  const onClickOpenReceiptPDF = () => {
    window.open(RECEIPT, '_blank');
  };

  return (
    <MsgDetailSubInfoBox
      guest={(reservation.guest && reservation.guest.length) || 0}
      profileImg={profileImg}
      guestProfileImg={
        reservation.guest &&
        reservation.guest.length &&
        reservation.guest[0].profileImg
      }
      reservationId={reservation && reservation.reservationId}
      isCanceled={reservation && reservation.isCanceled}
      onClickOpenModal={onClickOpenModal}
      onClickOpenPrint={onClickOpenPrint}
      onClickOpenReceiptPDF={onClickOpenReceiptPDF}
      homeId={reservation && reservation.homeId}
    />
  );
};

export default MsgDetailSubInfoBoxContainer;
