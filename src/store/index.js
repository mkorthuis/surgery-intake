import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'
import {
  routerMiddleware
} from 'react-router-redux'
import {
  routerReducer
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import registrationReducer from '../reducers/registration'
import authenticationReducer from '../reducers/authentication'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

const reducer = combineReducers({
  router: routerReducer,
  registration: registrationReducer,
  authentication: authenticationReducer
})

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


export default createStore(
  reducer,
  initialState,
  composedEnhancers
)