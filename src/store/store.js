import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

console.log('STORE', store.getState());

export default store;
