import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
// import { myAction, myAction2 } from './redux/actions';
import reportWebVitals from './reportWebVitals';

// console.log(store);
// console.log(store.getState());

// console.log(myAction);
// console.log(store.dispatch(myAction));

// console.log(myAction(5));
// console.log(myAction(10));

// store.dispatch(myAction(5));
// store.dispatch(myAction(10));

// store.dispatch(myAction2);

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
