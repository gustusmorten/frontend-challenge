import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/app';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { makeServer } from './api/Auth';
library.add(fab, faUser, faLock)


makeServer();

const store = configureStore;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
reportWebVitals();
