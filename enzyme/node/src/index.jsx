import React from 'react';
import { render } from 'react-dom';
import Router from './navigation/router';
import { Provider } from 'react-redux';
import store from './configureStore';
import rootReducer form './reducers/index';
import { createStore } from 'redux';

const store = createStore(rootReducer);


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}


render(
  <App/>,
  document.getElementById('app')
);

