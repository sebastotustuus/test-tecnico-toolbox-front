import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Redux
import { Provider } from 'react-redux';
import store from './redux';

// Styles
import './styles/app.css';

// Root Component
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
