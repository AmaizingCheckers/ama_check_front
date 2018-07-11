import { getAccessToken, getClient, getUid } from '~/utils/auth'

export default function ({ $axios, redirect }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')

  const accessToken = getAccessToken()
  const client = getClient()
  const uid = getUid()
  $axios.setHeader('access-token', accessToken)
  $axios.setHeader('client', client)
  $axios.setHeader('uid', uid)

  $axios.onRequest(config => {
    // console.log(config)
  })

  $axios.onResponse(response => {
    // console.log(response)
  })

  $axios.onError(error => {
    console.log(error)
  })
}
