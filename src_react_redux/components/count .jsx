import React, { Component } from 'react';
// import store from '../redux/store';

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

    //this.props.store.dispatch(createIncrementAction(+value))
    this.props.jia(+value)
  }
  //减
  decrement=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    // let{count}=this.state;
    
    // this.setState({count:count-(+value)});
    //this.props.store.dispatch(createDecrementAction(+value))
    this.props.jian(+value)
  }
  //奇数就加 
  incrementIfOdd=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    let {number}=this.props;
    //判断是否为奇数
    if(number%2===1){
      // this.setState({count:count+(+value)});
      this.props.jia(+value)
    }
  }
  //异步  加
  incrementAsync=()=>{
    //获取用户输入
    let{value}=this.refs.checkNumber
    //更新状态
    // let{count}=this.state;
    setTimeout(()=>{
      // this.setState({count:count+(+value)});
      this.props.jia(+value)
    },1000)
  }

  render() {
    return (
      <div>
        <h2>和:{this.props.number}</h2>
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
