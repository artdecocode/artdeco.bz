/* eslint-env browser */
/* global items, ReactDOM */
const { hydrate, render } = ReactDOM
import Tamara from '../Components/Tamara.jsx'

console.log(items)

render(<Tamara list={items} />, document.getElementById('tmr'))
