import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'

import config from 'config'
import * as actions from 'store/actions'
import * as types from 'store/actions/types'

const mockStore = configureMockStore([thunk])

describe('actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('fetchAPI', () => {
        fetchMock.getOnce(config.url, {
            body: JSON.stringify('Hello world'),
        })

        const expectedActions = [
            { type: types.FETCH_API_REQUEST },
            {
                type: types.FETCH_API_SUCCESS,
                data: 'Hello world',
            },
        ]
        const store = mockStore({})

        return store.dispatch(actions.fetchAPI()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
