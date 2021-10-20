import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import APP from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./services/reducer/rootreducer";
import logger from "redux-logger";
import thunk from "redux-thunk"; 
import promise from "redux-promise-middleware";

let middlewares = [];
middlewares.push(promise);
middlewares.push(thunk);
middlewares.push(logger);

function saveStateTOLocalStorage(state) {
    const serilizedState = JSON.stringify(state)
    localStorage.setItem('state', serilizedState)
}

function loadFromLocalStorage() {
    const serilizedState = localStorage.getItem('state');
    console.log({ serilizedState });
    if (serilizedState === null) return undefined
    return typeof serilizedState === 'object' ? serilizedState : JSON.parse(serilizedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

// create store
const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    ),
);

store.subscribe(() => {
    saveStateTOLocalStorage(store.getState())
});


ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
export default store;

