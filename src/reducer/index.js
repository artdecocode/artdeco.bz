/* global items, Redux */
const { combineReducers } = Redux

export default combineReducers({
  items(state = items, action) {
    if (action.type == 'SET_ITEMS') {
      return action.items
    }
    return state
  },
  selected(state = null, action) {
    if (action.type == 'SELECTED') {
      state = action.selected
    }
    return state
  },
})
