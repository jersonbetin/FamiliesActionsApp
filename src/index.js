import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

const target = document.getElementById('root');

const Render = (Component) => {
  return render(
    <Provider store = {store}>
      <ConnectedRouter history = {history}>
        <div>
          <Component />
        </div>
      </ConnectedRouter>
    </Provider>,
    target
  );
}

Render(App);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
