export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3002',
  prodUrl: 'https://www.abc.com',
}

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl
