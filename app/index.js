/* global document */

import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/app'
import 'global.css'

export default class Index extends React.Component {

    render () {
        return (
            <App />
        )
    }

}

ReactDOM.render(<Index />, document.getElementById('app'))
