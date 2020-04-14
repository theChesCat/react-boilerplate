import * as actions from 'store/actions/types'

const initialState = {}

/**
 * Contains the application reducer
 */
const reducer = (state = initialState, action) => {
    // Returned when the app is fetching data
    if (action.type === actions.FETCH_API_REQUEST) {
        return {
            ...state,
            isFetching: true,
        }
    }

    // Returned when the app has successfully fetched data
    if (action.type === actions.FETCH_API_SUCCESS) {
        return {
            ...state,
            isFetching: false,
            data: action.data,
        }
    }

    return state
}
export default reducer
