import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>   to store
  //   <App />
  // </React.StrictMode>

  <Provider store={store}>
    <App/>
  </Provider>
);

reportWebVitals();
