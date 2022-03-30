import React from 'react';
import styled from 'styled-components';
import MapContainer from '../../Containers/Global/MapContainer';

const SearchMap = ({ view, markers, mapState }) => {
  return (
    <MapWrapper mapState={mapState} view={view}>
      <MapContainer markers={markers} />
    </MapWrapper>
  );
};

const MapWrapper = styled.aside`
  width: calc(100vw - 840px);
  display: ${({ mapState }) => (mapState ? 'block' : 'none')};
  max-height: 100vh;
  position: sticky;
  top: 0;

  @media ${({ theme }) => theme.size.medium} {
    display: ${({ view }) => (view === 'map' ? 'block' : 'none')};
    width: ${({ view }) => (view === 'map' ? '100%' : '0px')};
  }
`;

export default React.memo(SearchMap);
