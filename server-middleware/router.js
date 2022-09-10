import consola from 'consola'
import { routerConfiguration } from './routerConfiguration'

// here we set the i18n configuration

export default function (req, _, next) {
  // we get the host from the request
  const hostUrl = req.headers.host
  const host = hostUrl.split(':')[0]

  // we check if it's hosting, later this can scaled to multiple configs (not only coaching and site)
  const isCoaching = routerConfiguration.coaching.some(
    (coaching) => coaching.host === host
  )

  // we set the routerBase folder inside /pages to /site or /coaching
  // and we set the locales and defaultLocale inside _app.config
  const routerBase = isCoaching ? 'coaching' : 'site'
  const hostConfig = routerConfiguration[routerBase].find(
    (config) => config.host === host
  )

  if (!hostConfig) {
    consola.error(
      `No configuration found for host ${host}. Please use a valid host.`
    )
    return next()
  }

  // we inject in req everything need for the router/index.js
  req.router = hostConfig

  consola.ready({
    message: `${hostConfig.host}: default locale - ${hostConfig.defaultLocale}, available locales - ${hostConfig.locales}`,
    badge: true,
  })

  next()
}
