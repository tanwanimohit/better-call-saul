import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1016751924821-9a88qsp53eu7o6dhf3gh4gab0fi06vlo.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
