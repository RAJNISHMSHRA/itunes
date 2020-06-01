import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import '../src/css/style.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store';
import {IntlProvider} from 'react-intl';
import en from './i18n/en';

ReactDOM.render (
  <React.StrictMode>
    <IntlProvider locale="en" messages={en}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById ('root')
);

serviceWorker.unregister ();
