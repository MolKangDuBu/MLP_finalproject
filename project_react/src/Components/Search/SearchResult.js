import React from 'react';
import styled from 'styled-components';
import { FilterListContainer } from '../../Containers/Search/FilterListContainer';
import { FloatingMapButton } from './MapButton';
import HomeListContainer from '../../Containers/Search/HomeListContainer';
import RecentHomeListContainer from '../../Containers/Search/RecentHomeListContainer';
import SearchPaginationContainer from '../../Containers/Search/SearchPaginationContainer';

const SearchResult = ({
  mapState,
  view,
  dataTotal,
  searchForm,
  convertDate,
  onOpenMap,
}) => {
  const { adult, child, location, checkIn, checkOut } = searchForm;
  const guestCount = +adult + +child;
  return (
    <StWrapper mapState={mapState} view={view}>
      <StSpan>
        숙박 {dataTotal}건{' '}
        {checkIn && ` · ${convertDate(checkIn)} - ${convertDate(checkOut)}`}
        {guestCount > 0 && ` · 게스트 ${guestCount}명`}
      </StSpan>
      <StHeader>{location}의 숙소</StHeader>
      <FilterListContainer mapState={mapState} />
      <HomeListContainer />
      <RecentHomeListContainer />
      <SearchPaginationContainer />
      <FloatingMapButton onOpenMap={onOpenMap} />
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: ${({ mapState }) => (mapState ? '840px' : '100%')};
  padding: ${({ mapState }) =>
    mapState ? '5rem 2rem 3rem' : '5rem 8rem 3rem'};
  margin-top: 8rem;
  position: relative;

  @media ${({ theme }) => theme.size.medium} {
    display: ${({ view }) => (view === 'result' ? 'block' : 'none')};
    width: ${({ view }) => (view === 'result' ? '100%' : '0px')};
    padding: 5rem 2rem 3rem;
  }
`;

const StHeader = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 3.2rem;
  margin: 1rem 0;
`;

const StSpan = styled.span`
  font-size: 1.4rem;
`;

export default React.memo(SearchResult);
