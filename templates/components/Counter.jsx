// @flow

import React from 'react';
import CounterAction from '../actions/CounterAction';

type Props = {
  count: number
};

export default class Conter extends React.Component {
  props: Props;

  handleClickUpButton() {
    CounterAction.countUp();
  }

  handleClickDownButton() {
    CounterAction.countDown();
  }

  render() {
    return(
      <div className="counter">
        <h1>Counter</h1>
        <span>Count: {this.props.count}</span>
        <button onClick={this.handleClickUpButton.bind(this)}>up</button>
        <button onClick={this.handleClickDownButton.bind(this)}>down</button>
      </div>
    );
  }
}
