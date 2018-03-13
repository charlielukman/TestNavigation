import React, { Component } from 'react';
import { ToastAndroid, BackHandler, View, Text } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { AppRoot } from './config/routes';
import configureStore from './configureStore';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class App extends Component {
  render() {
    return (
      <AppRoot
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })}
      />
    );
  }
}

const initialState = AppRoot.router.getStateForAction(NavigationActions.init());

const navReducer = (state = initialState, action) => {
  const nextState = AppRoot.router.getStateForAction(action, state);
  return nextState || state;
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore(navReducer);

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default Root;
