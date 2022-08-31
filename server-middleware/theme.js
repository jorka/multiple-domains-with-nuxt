import consola from 'consola'

const fakeApiPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'theme1' })
    }, 1000)
  })

export default async function (req, _, next) {
  const host = req.headers.host

  const data = await fakeApiPromise()
  const theme = data.theme

  // lets assume that it returned 'theme1';
  consola.ready({
    message: `Request for config received: ${theme} for host ${host}`,
    badge: true,
  })

  // we add it to the req so that it can be used in  Router (see router.js)  and nuxtServerInit
  req.theme = theme

  next()
}
