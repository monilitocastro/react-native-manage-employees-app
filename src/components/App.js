import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

import LoginForm from './LoginForm';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component<{}> {
  componentWillMount() {
    if (firebase.apps.length === 0) {
      // Initialize Firebase
      const config = {
        apiKey: 'AIzaSyCE4Pt1-ECkiDX2P7N8XIsAedIRASmvsvI',
        authDomain: 'manager-auth.firebaseapp.com',
        databaseURL: 'https://manager-auth.firebaseio.com',
        projectId: 'manager-auth',
        storageBucket: '',
        messagingSenderId: '86210289723'
      };
      firebase.initializeApp(config);
    }
  }
  render() {
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
