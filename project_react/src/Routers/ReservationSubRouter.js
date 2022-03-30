import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HouseRulesContainer from '../Containers/Reservation/HouseRulesContainer';
import GuestInfoContainer from '../Containers/Reservation/GuestInfoContainer';
import PaymentContainer from '../Containers/Reservation/PaymentContainer';

const ReservationSubRouter = () => {
  return (
    <Switch>
      <Route exact path="/Reservation" component={HouseRulesContainer} />
      <Route path="/Reservation/HouseRules" component={HouseRulesContainer} />
      <Route path="/Reservation/GuestInfo" component={GuestInfoContainer} />
      <Route path="/Reservation/Payment" component={PaymentContainer} />
      <Route
        render={({ location }) => (
          <div>
            <span>이 페이지는 존재하지 않습니다:</span>
            <span>{` ${location.pathname}`}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default ReservationSubRouter;
