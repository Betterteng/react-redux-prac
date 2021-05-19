// 该文件为 Count 生成 action 对象
import {ADD, MINUS} from './constant';

export const createAddAction = data => ({type: ADD, data});
export const createMinusAction = data => ({type: MINUS, data});

export const createAddAysncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data));
    }, time)
  }
}