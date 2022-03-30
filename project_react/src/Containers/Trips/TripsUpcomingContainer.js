import React from 'react';
import { useSelector } from 'react-redux';
import TripsUpcoming from '../../Components/Trips/TripsUpcoming';

const TripsUpcomingContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.trips);

  // ! variable
  const upcomingTrips = data && data.upcoming && data.upcoming.reservations;
  const tripsCount = upcomingTrips && upcomingTrips.length;
  console.log(tripsCount);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <TripsUpcoming upcomingTrips={upcomingTrips} tripsCount={tripsCount} />
  );
};

export default TripsUpcomingContainer;
