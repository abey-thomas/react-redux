import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
// import App from './App';
import App from "./js/components/App.jsx";
import * as serviceWorker from './serviceWorker';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
// ReactDOM.render(<App />, document.getElementById('root'));

);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import FormContainer from "./js/components/container/FormContainer.jsx";

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
