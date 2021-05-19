import React, { Component } from 'react';
import Count from './container/Count';  // 引入的是 Count 的容器组件
import Person from './container/Person';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store  */}
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}
