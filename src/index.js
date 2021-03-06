import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';

reactDOM.render(
  /*
    给后代容器组件传递 store，这样就不用一个一个的传了。。。
   */
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);

// 一旦 redux 中的状态有变化，就调回调，有 diff 算法，不用考虑效率。
// 或者在组件自身写，详情看 Count 组件 中注释的 componentDidMount()
// store.subscribe(() => {
//   reactDOM.render(<App/>, document.getElementById('root'));
// })