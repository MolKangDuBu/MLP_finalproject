import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Main/Footer';
import SearchContentContainer from '../Containers/Search/SearchContentContainer';
import SearchHeaderContainer from '../Containers/Search/SearchHeaderContainer';

const SearchPage = () => {
  return (
    <StWrapper>
      <SearchHeaderContainer />
      <SearchContentContainer />
      <Footer />
    </StWrapper>
  );
};

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default SearchPage;
