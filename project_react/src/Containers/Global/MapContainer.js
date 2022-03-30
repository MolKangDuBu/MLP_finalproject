import React from 'react';
import Map from '../../Components/Global/Map';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
  closeMarker,
  zoomSet,
  closeMap,
  hideMap,
  zoomIn,
  zoomOut,
  openPopup,
  setMapSearch,
  fetchData,
  setMapBounds,
} from '../../Modules/search';
import qs from 'qs';
import _ from 'lodash';

const MapContainer = ({ markers }) => {
  const fetchedMapCenter = useSelector(state => state.map.data);
  const mapCenter = useSelector(state => state.search.data.mapCenter);
  const { mapZoom, viewState, mapSearch } = useSelector(state => state.search);

  const history = useHistory();
  const { search: query } = useLocation();
  const queryObj = qs.parse(query, { ignoreQueryPrefix: true });

  const dispatch = useDispatch();
  const openFilterModal = () => dispatch(openPopup('all'));
  const updateZoom = zoom => dispatch(zoomSet(zoom));
  const onCloseMap = () => dispatch(closeMap());
  const checkMapSearch = () => dispatch(setMapSearch());
  const onZoomIn = () => dispatch(zoomIn());
  const onZoomOut = () => dispatch(zoomOut());
  const onCloseMarker = e => {
    e.target.nodeName === 'DIV' && dispatch(closeMarker());
  };

  const onHideMap = () => {
    dispatch(hideMap());
    queryObj.mapState = 0;
    history.replace(`?${qs.stringify(queryObj)}`);
    window.scrollTo({ top: 0 });
  };

  const changeBounds = bounds => {
    if (!mapSearch) return;
    const newQueryObj = _.omit(queryObj, ['page']);
    Object.keys(bounds).forEach(bound => (newQueryObj[bound] = bounds[bound]));
    history.replace(`?${qs.stringify(newQueryObj)}`);
    dispatch(fetchData(`?${qs.stringify(newQueryObj)}`));
    dispatch(setMapBounds(bounds));
    window.scrollTo({ top: 0 });
  };

  return (
    <div onClick={onCloseMarker}>
      <Map
        view={viewState}
        center={mapCenter || fetchedMapCenter}
        mapZoom={mapZoom}
        markers={markers}
        mapSearch={mapSearch}
        checkMapSearch={checkMapSearch}
        onCloseMap={onCloseMap}
        onHideMap={onHideMap}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        updateZoom={updateZoom}
        onCloseMarker={onCloseMarker}
        openFilterModal={openFilterModal}
        changeBounds={changeBounds}
      />
    </div>
  );
};

export default React.memo(MapContainer);
