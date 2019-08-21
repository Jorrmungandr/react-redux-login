import React, { Component } from 'react';
import './App.scss';
import Login from './components/login/login.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
};
