import React, { Component } from 'react';
import store from '../../redux/store';

export default class Count extends Component {

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  add = () => {
    const {value} = this.selectNumber;
    store.dispatch({type: 'add', data: value * 1});
  }
  minus = () => {
    const {value} = this.selectNumber;
    store.dispatch({type: 'minus', data: value * 1});
  }
  addIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({type: 'add', data: value * 1});
    }
  }
  addAysnc = () => {
    setTimeout(() => {
      const {value} = this.selectNumber;
      store.dispatch({type: 'add', data: value * 1});
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={currentNode => this.selectNumber = currentNode}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{'\u00A0'}
        <button onClick={this.add}>+</button>{'\u00A0'}
        <button onClick={this.minus}>-</button>{'\u00A0'}
        <button onClick={this.addIfOdd}>当前求和为基数再+</button>{'\u00A0'}
        <button onClick={this.addAysnc}>异步+</button>{'\u00A0'}
      </div>
    )
  }
}
