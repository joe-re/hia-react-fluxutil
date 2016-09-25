// @flow

import AppDispatcher from '../AppDispatcher';
type CountUp = { type: 'CountUp' };
type CountDown = { type: 'CountDown' };
export type ActionTypes = CountUp | CountDown;

function dispatch(params: ActionTypes) {
  AppDispatcher.dispatch(params);
}

export default {
  countUp() {
    dispatch({ type: 'CountUp' });
  },

  countDown() {
    dispatch({ type: 'CountDown' });
  }
}
