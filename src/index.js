import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
// import {Provider} from 'react-redux';
;
ReactDOM.render(

<App store={store}/>,
document.getElementById('root'));

store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})