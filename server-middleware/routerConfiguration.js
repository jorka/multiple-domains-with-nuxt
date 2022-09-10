export const routerLocales = {
  en: {
    code: 'en',
    iso: 'en-EN',
    name: 'English',
  },
  it: {
    code: 'it',
    iso: 'it-IT',
    name: 'Italiano',
  },
  fr: {
    code: 'fr',
    iso: 'fr-FR',
    name: 'Français',
  },
}

export const routerConfiguration = {
  // NOTE: these keys should be the same as the folders in /pages and /components and /static and /layouts
  site: [
    {
      host: 'brulafine.local.com',
      routerBase: 'site',
      locales: ['fr', 'it', 'en'],
      defaultLocale: 'fr',
    },
    {
      host: 'brulafine.local.it',
      routerBase: 'site',
      locales: ['fr', 'it', 'en'],
      defaultLocale: 'it',
    },
    {
      host: 'brulafine.local.fr',
      routerBase: 'site',
      locales: ['fr', 'it', 'en'],
      defaultLocale: 'fr',
    },
  ],
  coaching: [
    {
      host: 'brulacoach.local.com',
      routerBase: 'coaching',
      locales: ['fr', 'it'],
      defaultLocale: 'fr',
    },
  ],
}
