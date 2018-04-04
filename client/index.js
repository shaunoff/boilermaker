import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {StyleRoot} from 'radium';
import App from './modules/app/containers/App'
// import createHistory from 'history/createBrowserHistory'
// import createMemoryHistory from 'history/createMemoryHistory'
import {Router} from 'react-router-dom'

// export const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot>
      <App />
    </StyleRoot>
  </Provider>,
  document.getElementById('app')
)
