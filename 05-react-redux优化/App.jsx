import React, { Component } from 'react';
import Count from './container/Count';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store  */}
        <Count/>
      </div>
    )
  }
}
