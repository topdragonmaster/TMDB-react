import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import actorReducer from '../reducers/actorReducer'

export const createRootReducer = (history: History) =>
  combineReducers({
    actor: actorReducer,
    router: connectRouter(history),
  })
