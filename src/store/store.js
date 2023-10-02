import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const persistedState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : {};

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()));
});

export default store;
