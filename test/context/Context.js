import start from '../../src/start'

export default async function Context() {
  const { app, url } = await start({ port: 0 }, { watch: false })
  this.url = url
  this._destroy = async () => {
    await app.destroy()
  }
}
