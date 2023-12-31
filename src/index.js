import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles/style.css';
import App from './App';
import store from './store/store';
import TodoProvider from './context/TodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </Provider>,
);
