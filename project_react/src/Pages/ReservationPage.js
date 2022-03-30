import React from 'react';
import ReservationHeader from '../Components/Reservation/ReservationHeader';
import ReservationFooter from '../Components/Reservation/ReservationFooter';
import ReservationMainContainer from '../Containers/Reservation/ReservationMainContainer';

const ReservationPage = () => {
  return (
    <>
      <ReservationHeader />
      <ReservationMainContainer />
      <ReservationFooter />
    </>
  );
};

export default ReservationPage;
