//引入使用createStore方法，用于创建一个store对象
import {createStore} from 'redux'
//引入count_reducer
import countReducer from './count_reducer'

//创建并暴露一个store,同时指定了reducer 
export default createStore(countReducer)