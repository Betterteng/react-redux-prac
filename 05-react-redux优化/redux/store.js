import {createStore, applyMiddleware} from 'redux';
import CountReducer from './count_reducer';
// 用于支持异步 action （function）
import thunk from 'redux-thunk'

// 固定写法，想用中间件来支持异步 action，就得这么写
export default createStore(CountReducer, applyMiddleware(thunk));