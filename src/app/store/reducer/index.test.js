import expect from 'expect'

import reducer from './index.js'
import * as actions from 'store/actions/types'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })

    it('should handle FETCH_API_REQUEST', () => {
        const action = {
            type: actions.FETCH_API_REQUEST,
        }
        expect(reducer({}, action)).toHaveProperty('isFetching', true)
    })

    it('should handle FETCH_API_SUCCESS', () => {
        const action = {
            type: actions.FETCH_API_SUCCESS,
            data: 'hello world',
        }
        expect(reducer({}, action)).toHaveProperty('isFetching', false)
        expect(reducer({}, action)).toHaveProperty('data', action.data)
    })
})
