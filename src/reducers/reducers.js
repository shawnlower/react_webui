import { combineReducers } from 'redux'
import {
  REQUEST_ITEMS,
  RECEIVE_ITEMS,
} from '../actions/actions'

function items(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function itemsByFilter(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        [action.filter]: items(state[action.filter], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  itemsByFilter,
  // selectedSubreddit
})

export default rootReducer;
