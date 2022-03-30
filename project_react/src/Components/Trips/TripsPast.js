import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import TripsNone from './TripsNone';
import TripsPastCardItemContainer from '../../Containers/Trips/TripsPastCardItemContainer';
import TripsSubFooter from './TripsSubFooter';
import Button from '../Global/Button';

const TripsPast = ({ pastTrips, tripsCount }) => {
  console.log(tripsCount);
  return (
    <>
      {tripsCount ? (
        <TripsPastCardWrapper>
          <TripsPastCardLists>
            {pastTrips.map(trip => (
              <TripsPastCardItemContainer
                key={trip.reservationId}
                trip={trip}
              />
            ))}
          </TripsPastCardLists>
        </TripsPastCardWrapper>
      ) : (
        <TripsNone />
      )}
      <TripsSubFooter>
        예약 내역을 찾으실 수 없나요?{' '}
        <Button btnType="underlined" hover="none" padding="0" fontSize="1.5rem">
          도움말 센터를 방문하세요.
        </Button>
      </TripsSubFooter>
    </>
  );
};

const TripsPastCardWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.color.gray)};
  padding: 2.5rem 0rem 1rem 0rem;
`;

const TripsPastCardLists = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export default TripsPast;
