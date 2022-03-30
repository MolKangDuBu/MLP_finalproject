import React from 'react';
import { useSelector } from 'react-redux';
import TripsPast from '../../Components/Trips/TripsPast';

const TripsPastContainer = () => {
  // ! redux
  const { data, error, loading } = useSelector(state => state.trips);

  // ! variable
  const pastTrips = data && data.past && data.past.reservations;
  const tripsCount = data && pastTrips && pastTrips.length;
  console.log(data);
  console.log(pastTrips && pastTrips.length);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return <TripsPast pastTrips={pastTrips} tripsCount={tripsCount} />;
};

export default TripsPastContainer;
