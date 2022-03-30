import React from 'react';
import RecentHomeList from '../../Components/Search/RecentHomeList';
import { useSelector } from 'react-redux';

const RecentHomeListContainer = () => {
  const { data, mapState } = useSelector(state => state.search);
  const { recentHomes } = data;

  if (!recentHomes || !recentHomes.length) return null;
  return <RecentHomeList recentHomes={recentHomes} mapState={mapState} />;
};

export default React.memo(RecentHomeListContainer);
