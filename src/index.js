import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./components/app/App";
import reducer from "./reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
