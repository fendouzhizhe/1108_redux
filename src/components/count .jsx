import React, { Component } from 'react';
// import store from '../redux/store';
import {createIncrementAction,createDecrementAction} from '../redux/count_action_creator';

export default class Count  extends Component {
  //初始化
  // state={
  //   count:0
  // }

  //加
  increment=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    // let{count}=this.state;
    // this.setState({count:count+(+value)});

    this.props.store.dispatch(createIncrementAction(+value))
  }
  //减
  decrement=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    // let{count}=this.state;
    // this.setState({count:count-(+value)});
    this.props.store.dispatch(createDecrementAction(+value))
  }
  //奇数就加 
  incrementIfOdd=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    let count=this.props.store.getState();
    //判断是否为奇数
    if(count%2===1){
      // this.setState({count:count+(+value)});
      this.props.store.dispatch(createIncrementAction(+value))
    }
  }
  //异步  加
  incrementAsync=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    // let{count}=this.state;
    setInterval(()=>{
      // this.setState({count:count+(+value)});
      this.props.store.dispatch(createIncrementAction(+value))
    },1000)
  }

  render() {
    return (
      <div>
        <h2>求和为:{this.props.store.getState()}</h2>
        <select ref='checkNumber'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if add</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
