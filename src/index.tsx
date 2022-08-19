import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { Explorer } from './containers'
import reportWebVitals from './reportWebVitals'
import { createBrowserHistory } from 'history'
import configureStore from './stores/configureStore'
const history = createBrowserHistory()
const initialState: any = {}
const store = configureStore(history, initialState)

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
