import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore,applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {accountReducer} from "./reducers/account.js";
import {bonusReducer} from "./reducers/bonus.js";
import './index.css'


const store = createStore (
  combineReducers({
      account:accountReducer,
      bonus:bonusReducer
  }), 
  applyMiddleware(logger, thunk));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
)
