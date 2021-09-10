import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.querySelector('#root')
);
