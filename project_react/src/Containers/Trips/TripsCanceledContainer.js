import React from 'react';
import { useSelector } from 'react-redux';
import TripsCanceled from '../../Components/Trips/TripsCanceled';
// import { showReservation } from '../../Modules/trips';

const TripsCanceledContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.trips);

  // ! variable
  const canceledTrips = data && data.canceled && data.canceled.reservations;
  const tripsCount = canceledTrips && canceledTrips.length;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <TripsCanceled canceledTrips={canceledTrips} tripsCount={tripsCount} />
  );
};

export default TripsCanceledContainer;
