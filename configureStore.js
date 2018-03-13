import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import getRootReducer from './reducers';

export default function configureStore(navReducer) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    }),
  );
  const store = createStore(
    getRootReducer(navReducer),
    undefined,
    enhancer,
  );
  return store;
}
