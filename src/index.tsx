import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import store from 'stores/rootStore'
import { Provider } from 'react-redux'

import './root.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
