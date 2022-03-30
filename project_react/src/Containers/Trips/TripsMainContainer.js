import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripsMain from '../../Components/Trips/TripsMain';
import { useLocation } from 'react-router';
import qs from 'qs';
import { fetchTrips } from '../../Modules/trips';

const TripsMainContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.trips);
  const dispatch = useDispatch();

  // ! hook
  const query = useLocation();
  const { tab } = qs.parse(query.search, {
    ignoreQueryPrefix: true,
  });

  const isActive = tab;

  // ! effect
  useEffect(() => {
    dispatch(fetchTrips(tab || 'upcoming'));
  }, [dispatch, tab]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return <TripsMain isActive={isActive} />;
};

export default TripsMainContainer;
