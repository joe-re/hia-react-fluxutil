// @flow

import React from 'react';
import { Container } from 'flux/utils';
import Counter from '../components/Counter';
import CounterStore from '../stores/CounterStore';
import type { State as CounterState } from '../stores/CounterStore';

type State = CounterState;

class CounterContainer extends React.Component {
  state: State;

  static getStores() {
    return [ CounterStore ];
  }

  static calculateState(_prevState: State): State {
    return CounterStore.getState();
  }

  render() {
    return <Counter {...this.state} />;
  }
}

export default Container.create(CounterContainer);
