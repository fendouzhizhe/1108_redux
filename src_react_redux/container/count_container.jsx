//引入UI组件
import Count from '../components/count'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action_creator
import {createIncrementAction,createDecrementAction} from '../redux/count_action_creator'


function mapStateToProps(state){
	return {number:state}
}


function mapDispatchToProps(dispatch){
	return {
		jia:(value)=>{dispatch(createIncrementAction(value))},
		jian:(value)=>{dispatch(createDecrementAction(value))}
	}
}

//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(mapStateToProps,mapDispatchToProps)(Count)

