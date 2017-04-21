import React from 'react'

import styles from 'components/app/index.css'

export default class App extends React.Component {

    render () {
        return (
            <div className={styles.base}>
                <h1 className={styles.title}>React Boilerplate</h1>
            </div>
        )
    }
}
