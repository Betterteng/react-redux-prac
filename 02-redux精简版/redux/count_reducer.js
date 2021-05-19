const initState = 0;

function countReducer(prevState = initState, action) {
  console.log(prevState,action)
  const {type, data} = action;

  switch (type) {
    case 'add':
      return prevState + data;
    case 'minus':
      return prevState - data;
    default:
      return prevState;
  }
}

export default countReducer;