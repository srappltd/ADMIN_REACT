import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './Store/Store.jsx'
import Context from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('container')).render(
  <Provider store={Store}>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Context>
  </Provider>
)
