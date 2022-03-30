import React from 'react';
import SearchResultContainer from '../../Containers/Search/SearchResultContainer';
import SearchMapContainer from '../../Containers/Search/SearchMapContainer';
import styled from 'styled-components';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from '../../Containers/Global/BookmarkModalContainer';
import FilterModalContainer from '../../Containers/Search/FilterModalContainer';

const SearchContent = ({ isLoggedIn }) => {
  return (
    <StContent>
      <SearchResultContainer />
      <SearchMapContainer />
      {isLoggedIn && <BookmarkListModalContainer />}
      {isLoggedIn && <NewBookmarkModalContainer />}
      <FilterModalContainer />
    </StContent>
  );
};

const StContent = styled.div`
  display: flex;
`;

export default React.memo(SearchContent);
