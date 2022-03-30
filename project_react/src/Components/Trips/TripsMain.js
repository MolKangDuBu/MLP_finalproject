import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TripsUpcomingContainer from '../../Containers/Trips/TripsUpcomingContainer';
import TripsPastContainer from '../../Containers/Trips/TripsPastContainer';
import TripsCanceledContainer from '../../Containers/Trips/TripsCanceledContainer';

const TripsMain = ({ isActive }) => {
  return (
    <TripsMainWrapper>
      <TripsMainInner>
        <TripsMainTitleWrapper>
          <TripsMainTitle>여행</TripsMainTitle>
        </TripsMainTitleWrapper>
        <TripsMainNav>
          <TripsMainNavList>
            <StLink
              to="/trips/v1?tab=upcoming"
              className={
                isActive === 'upcoming' || isActive === undefined
                  ? 'active'
                  : ''
              }
            >
              <TripsMainNavItem>
                <TripsMainNavItemInner>예정된 예약</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StLink>
          </TripsMainNavList>
          <TripsMainNavList>
            <StLink
              to="/trips/v1?tab=past"
              className={isActive === 'past' ? 'active' : ''}
            >
              <TripsMainNavItem>
                <TripsMainNavItemInner>이전 예약</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StLink>
          </TripsMainNavList>
          <TripsMainNavList>
            <StLink
              to="/trips/v1?tab=canceled"
              className={isActive === 'canceled' ? 'active' : ''}
            >
              <TripsMainNavItem>
                <TripsMainNavItemInner>취소됨</TripsMainNavItemInner>
              </TripsMainNavItem>
            </StLink>
          </TripsMainNavList>
        </TripsMainNav>
        {isActive === 'upcoming' && <TripsUpcomingContainer />}
        {isActive === 'past' && <TripsPastContainer />}
        {isActive === 'canceled' && <TripsCanceledContainer />}
      </TripsMainInner>
    </TripsMainWrapper>
  );
};

const TripsMainWrapper = styled.div`
  padding-top: 8rem;
`;

const TripsMainInner = styled.div`
  margin-top: 4rem;
  padding: 0rem 12rem;

  @media ${({ theme }) => theme.size.medium} {
    padding: 0rem 7.5rem;
  }

  @media ${({ theme }) => theme.size.iPad} {
    padding: 0rem 3rem;
  }

  height: fit-content;
  min-height: calc(100vh - 12rem);
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const TripsMainTitleWrapper = styled.div`
  padding: 1.2rem 0rem;
`;

const TripsMainTitle = styled.h2`
  font-size: 3.4rem;
  font-weight: bold;
`;

const TripsMainNav = styled.ul`
  display: flex;
  margin-left: -1.5rem;
  margin-top: 2rem;
`;

const TripsMainNavList = styled.li`
  margin-right: 1rem;
  & > a {
    display: inline-block;
    :hover {
      background: ${({ theme }) => theme.color.lightGray};
    }
  }
`;

const StLink = styled(Link)`
  &.active {
    &:hover {
      background: none;
    }
    & > div > div {
      border-bottom: 2px solid ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.black};
      font-weight: bold;
    }
  }
`;

const TripsMainNavItem = styled.div`
  padding: 0rem 1.5rem;
  color: ${({ theme }) => theme.color.darkGray};
`;

const TripsMainNavItemInner = styled.div`
  line-height: 5rem;
`;

export default TripsMain;
