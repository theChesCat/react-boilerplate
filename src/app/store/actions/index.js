/* global fetch */

import * as actions from 'store/actions/types'
import config from 'config'

/**
 * Contains the application actions
 */

export const fetchAPI = () => (dispatch) => {
    dispatch(fetchAPIRequest())

    // Fetch the api
    return fetch(config.api)
        .then((response) => response.json())
        .then((body) => dispatch(fetchAPISuccess(body)))
        .catch((error) => dispatch(fetchAPIFailure(error)))
}

export const fetchAPIRequest = () => ({
    type: actions.FETCH_API_REQUEST,
})

export const fetchAPISuccess = (data) => {
    return {
        type: actions.FETCH_API_SUCCESS,
        data,
    }
}

export const fetchAPIFailure = (error) => ({
    type: actions.FETCH_API_FAILURE,
    error,
})
