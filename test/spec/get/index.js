const { assert } = require('zoroaster/assert')
const context = require('../../context')
const rqt = require('rqt')

const index = {
  context,
  async '/'({ url }) {
    const res = await rqt(`${url}`)
    assert(/Hello World/.test(res))
  },
  async '/index'({ url }) {
    const res = await rqt(`${url}/index`)
    assert(/Hello World/.test(res))
  },
  async '/404'({ url }) {
    const res = await rqt(`${url}/404`)
    assert(/Not Found/.test(res))
  },
}

module.exports = index
