import React from 'react';
import TripsCanceledItem from '../../Components/Trips/TripsCanceledItem';

const TripsCanceledItemContainer = ({ trip }) => {
  // ! variable
  const { reservationId, homeImage, title, addr, checkin, checkout } = trip;

  const ciDate = new Date(checkin);
  const coDate = new Date(checkout);
  const options = { month: 'long', day: 'numeric' };
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);

  return (
    <TripsCanceledItem
      title={title}
      reservationId={reservationId}
      homeImage={homeImage}
      addr={addr}
      ci={ci}
      co={co}
    />
  );
};

export default TripsCanceledItemContainer;
