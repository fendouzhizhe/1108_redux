import React, { Component } from 'react'
// import Count from './components/count ';
import CountContainer from './container/count_container';
// import CountContainer from './containers/count_container';

export default class App extends Component {
  render() {
    // const {store} = this.props
    return (
      <div>
        <CountContainer />
      </div>
    )
  }
}
