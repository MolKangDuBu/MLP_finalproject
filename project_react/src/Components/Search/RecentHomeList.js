import React from 'react';
import styled from 'styled-components';
import RecentPagination from './RecentPagination';
import HomeCardContainer from '../../Containers/Search/HomeCardContainer';

const RecentHomeList = ({ mapState, recentHomes }) => {
  return (
    <StWrapper>
      <StHeader>최근 숙소</StHeader>
      <StSpan>
        현재 검색 결과와 일치하도록 날짜와 가격이 업데이트되었습니다.
      </StSpan>
      {/* <RecentPagination /> */}
      <StHomeWrapper>
        {recentHomes.map(home => (
          <HomeCardContainer
            key={home.homeId}
            home={home}
            type="recent"
            mapState={mapState}
          />
        ))}
      </StHomeWrapper>
    </StWrapper>
  );
};

const StWrapper = styled.div`
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const StHomeWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 2rem -1rem;

  &:after {
    content: '';
    flex: auto;
  }
`;

const StHeader = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 1rem 0;
`;

const StSpan = styled.span`
  font-size: 1.6rem;
`;

export default React.memo(RecentHomeList);
