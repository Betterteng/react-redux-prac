import React, { Component } from 'react';

export default class Count extends Component {

  state = {
    count: 0
  }

  add = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    this.setState({count: count + value  * 1});
  }
  minus = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    this.setState({count: count - value  * 1});
  }
  addIfOdd = () => {
    const {value} = this.selectNumber;
    const {count} = this.state;
    if (count % 2 !== 0) {
      this.setState({count: count + value  * 1});
    }
  }
  addAysnc = () => {
    setTimeout(() => {
      const {value} = this.selectNumber;
      const {count} = this.state;
      this.setState({count: count + value  * 1});
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
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
