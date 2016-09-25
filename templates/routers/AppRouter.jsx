//@flow

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import CounterContainer from '../containers/CounterContainer';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={CounterContainer} />
      </Router>
    );
  }
}
