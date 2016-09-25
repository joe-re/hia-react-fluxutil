// @flow

import type { ActionTypes as CounterAction } from '../actions/CounterAction';
import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

export type State = {
  count: number
}

class CounterStore extends ReduceStore<State> {
  getInitialState(): State {
    return { count: 0 };
  }

  reduce(state: State, action: CounterAction): State {
    switch(action.type) {
    case 'CountUp':
      return { count: ++state.count }
    case 'CountDown':
      return { count: --state.count }
    default:
      return state;
    }
  }
}

const instance = new CounterStore(AppDispatcher);

export default instance;
