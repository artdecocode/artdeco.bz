/* eslint-env browser */
/* global items, ReactDOM, Redux, ReactRedux */
import Tamara from '../Components/Tamara.jsx'
import JSONList from '../Components/JSONList.jsx'
import StateInfo from '../Components/StateInfo.jsx'
const { hydrate } = ReactDOM
const { createStore, combineReducers } = Redux
const { connect, Provider } = ReactRedux

const r = combineReducers({
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
const store = createStore(r)

const mapStateToProps = ({ items }) => {
  return {
    list: items,
  }
}
const ConnectedTamara = connect(
  mapStateToProps,
  dispatch => ({
    onSelect: object => {
      dispatch({ type: 'SELECTED', selected: object })
    },
  }),
)(Tamara)

const ConnectedJSONList = connect(
  ({ items }) => ({ list: items }),
)(JSONList)

const ConnectedStateInfo = connect(
  ({ selected }) => ({ object: selected }),
)(StateInfo)

const C = (
  <Provider store={store}>
    <ConnectedTamara />
  </Provider>
)

const T = (
  <Provider store={store}>
    <ConnectedJSONList />
  </Provider>
)

const S = (
  <Provider store={store}>
    <ConnectedStateInfo />
  </Provider>
)

hydrate(C, document.getElementById('tmr'))
hydrate(T, document.getElementById('json'))
hydrate(S, document.getElementById('info'))
