export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

function requestItems(filter) {
  return {
    type: REQUEST_ITEMS,
    filter
  }
}

export function fetchItems(filter) {
  return dispatch => {
    dispatch(requestItems(filter))
    return fetch(`http://localhost:5000/api/v1/items`)
    .then(response => response.json())
    .then(json => dispatch(receiveItems(filter, json)))
  }
}

function receiveItems(filter, json) {
  return {
    type: RECEIVE_ITEMS,
    filter,
    items: json.data,
    receivedAt: Date.now()
  }
}
