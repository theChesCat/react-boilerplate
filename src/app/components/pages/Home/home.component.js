import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from 'store/actions'

import { Home } from './home.style'

/**
 * React Component displaying the home page
 *
 * @param {Object} props - react properties
 * @return {Object} a React component
 */
const HomeComponent = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(actions.fetchAPI())
    }, [dispatch])

    return <Home>{data}</Home>
}
export default HomeComponent
