import {ADD, MINUS} from './constant';

const initState = 0;

function countReducer(prevState = initState, action) {
  console.log(prevState,action)
  const {type, data} = action;

  switch (type) {
    case ADD:
      return prevState + data;
    case MINUS:
      return prevState - data;
    default:
      return prevState;
  }
}

export default countReducer;