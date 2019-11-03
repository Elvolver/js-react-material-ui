import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/Store";

ReactDOM.render(<App store={store}
                     state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     />, document.getElementById('root'));

serviceWorker.unregister();