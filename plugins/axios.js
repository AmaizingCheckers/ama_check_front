export default function ({ req, $axios, redirect, store, defaults}) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')

  $axios.onRequest(config => {
    console.log(config)
  })

  $axios.onError(error => {
    console.log(error)
  })
}
