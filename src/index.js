import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store'
// ============================================================================ConfigRedux===================================================================

import { Provider } from 'react-redux'
import { store } from './store/ReduxStore'



// ============================================================================ConfigRedux===================================================================

ReactDOM.render(
  // <StoreProvider>


  <Provider store={store}>
    <App />
  </Provider>,



  // </StoreProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
