import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import searchApp from './reducers'
import App from './components/App'

import 'style!css!./static/css/bootstrap-v3.3.6.min.css';

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  searchApp,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
