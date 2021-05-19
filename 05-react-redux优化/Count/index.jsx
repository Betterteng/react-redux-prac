import React, { Component } from 'react';
// import connect to connect UI and redux
import {connect} from 'react-redux';
import {
  createAddAction,
  createMinusAction,
  createAddAysncAction
} from '../../redux/count_action';

class Count extends Component {

  add = () => {
    const {value} = this.selectNumber;
    this.props.add(value * 1);
  }
  minus = () => {
    const {value} = this.selectNumber;
    this.props.minus(value * 1);
  }
  addIfOdd = () => {
    const {value} = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1);
    }
  }
  addAysnc = () => {
    const {value} = this.selectNumber;
    this.props.addAysnc(value * 1, 500);
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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

// 使用 connect()() 创建并暴露一个 Count 的容器组件
// 第二个形参其实 react 会帮助自动 dispatch
export default connect(
  state => ({count: state}), 
  {
    add: createAddAction,
    minus: createMinusAction,
    addAysnc: createAddAysncAction
  }
)(Count);