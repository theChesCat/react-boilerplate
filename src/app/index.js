/* global process, document */

import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from 'store/reducer'
import Home from 'components/pages/Home'
import GlobalStyle from './index.style.js'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
}
const store = createStore(reducer, compose(applyMiddleware(...middlewares)))

const Index = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Home />
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
