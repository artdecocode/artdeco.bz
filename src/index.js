import start from './start'

(async () => {
  try {
    const { url } = await start()
    console.log(url) // eslint-disable-line no-console
  } catch (err) {
    console.error(err) // eslint-disable-line no-console
  }
})()
