export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3000',
  prodUrl: 'https://www.abc.com',
}

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const googleLogin = '689283504832-mgsgcs6cu9vphmmnbkmck6oe5mfscun1.apps.googleusercontent.com'
