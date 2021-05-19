// import UI
import CountUI from '../../components/Count';
// import connect to connect UI and redux
import {connect} from 'react-redux';
import {
  createAddAction,
  createMinusAction,
  createAddAysncAction
} from '../../redux/count_action';

const mapStateToProps = (state) => {
  return {count: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => {
      dispatch(createAddAction(data));
    },
    minus: (data) => {
      dispatch(createMinusAction(data));
    },
    addAysnc: (data, time) => {
      dispatch(createAddAysncAction(data, time));
    }
  }
}

// 使用 connect()() 创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);