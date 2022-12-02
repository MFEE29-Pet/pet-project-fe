export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  prodUrl: 'https://www.abc.com',
}

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl
