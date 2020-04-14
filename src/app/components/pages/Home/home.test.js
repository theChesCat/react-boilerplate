import React from 'react'
import { shallow } from 'enzyme'

import HomeComponent from './home.component.js'

jest.mock('react-redux', () => {
    const ActualReactRedux = require.requireActual('react-redux')
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return { data: 'hello world' }
        }),
        useDispatch: jest.fn().mockImplementation(() => {
            return {}
        }),
    }
})

describe('HomeComponent', () => {
    it('should render correctly', () => {
        const component = shallow(<HomeComponent />)
        expect(component).toMatchSnapshot()
    })
})
