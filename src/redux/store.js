import {createStore, applyMiddleware, combineReducers} from 'redux';
import CountReducer from './reducers/count';
import PersonReducer from './reducers/person';
// 用于支持异步 action （function）
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    sum: CountReducer,
    humans: PersonReducer
})

// 固定写法，想用中间件来支持异步 action，就得这么写
export default createStore(allReducers, applyMiddleware(thunk));