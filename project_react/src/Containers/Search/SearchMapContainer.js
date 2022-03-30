import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchMap from '../../Components/Search/SearchMap';
import { fetchCenter } from '../../Modules/map';

const SearchMapContainer = () => {
  const { loading, error, data } = useSelector(state => state.map);
  const { homes, mapCenter } = useSelector(state => state.search.data);
  const { mapState, viewState, filterForm } = useSelector(
    state => state.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (mapCenter) return;
    dispatch(fetchCenter(filterForm.location));
  }, [mapCenter]);

  if (!mapCenter && loading)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (!mapCenter && error)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;
  if (!mapCenter && !data)
    return <div style={{ width: '100%', height: 'calc(100vh - 8rem)' }}></div>;

  return <SearchMap view={viewState} markers={homes} mapState={mapState} />;
};

export default React.memo(SearchMapContainer);
