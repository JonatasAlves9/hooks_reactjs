import React from 'react';
import ReactDOM from 'react-dom';
import AppContext from './UseContext/AppContext';
import AppEffect from './UseEffect/App'
import AppReducer from './UseReducer/AppReducer'
import AppState from './UseState/AppState'

ReactDOM.render(
  <React.StrictMode>
    <AppState />
  </React.StrictMode>,
  document.getElementById('root')
);
