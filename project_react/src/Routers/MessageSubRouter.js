import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MessagePage from '../Pages/MessagePage';

const SubRouter = () => {
  return (
    <Switch>
      <Route path="/guest/inbox" component={MessagePage} exact />
      <Route path="/guest/inbox/:id" component={MessagePage} />
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

export default SubRouter;
