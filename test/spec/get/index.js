const { assert } = require('zoroaster/assert')
const context = require('../../context')
const rqt = require('rqt')

const index = {
  context,
  async '/'({ url }) {
    const res = await rqt(`${url}`)
    assert(/Node.JS development company/.test(res))
  },
  async '/index'({ url }) {
    const res = await rqt(`${url}/index`)
    assert(/Node.JS development company/.test(res))
  },
  async '/404'({ url }) {
    const res = await rqt(`${url}/404`)
    assert(/Not Found/.test(res))
  },
}

module.exports = index
