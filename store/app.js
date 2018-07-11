import { setAccessToken as utilSetAccessToken, setClient as utilSetClient,
  setUid as utilSetUid, setUserName as utilSetUserName, logout as utilLogout } from '~/utils/auth'

export const state = () => ({
  accessToken: null,
  client: null,
  uid: null,
  userName: null
})

export const getters = {
  loginState (state) {
    return !!state.accessToken
  },

  getUserName (state) {
    return state.userName
  }
}

export const mutations = {
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken
    this.$axios.setHeader('access-token', accessToken)
    utilSetAccessToken(accessToken)
  },

  setClient (state, client) {
    state.client = client
    this.$axios.setHeader('client', client)
    utilSetClient(client)
  },

  setUid (state, uid) {
    state.uid = uid
    this.$axios.setHeader('uid', uid)
    utilSetUid(uid)
  },

  setUserName (state, userName) {
    state.userName = userName
    utilSetUserName(userName)
  },

  unsetAuth (state) {
    state.accessToken = null
    state.client = null
    state.uid = null
  }
}

export const actions = {

  // ユーザー登録
  async registration ({dispatch}, {data}) {
    try {
      const response = await dispatch('api/post', { url: `/auth`, params: data, mode: 'normal' }, {root: true})
      await dispatch('setLoginState', response)
      return response.data.status
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  // メールアドレスログイン
  async login ({dispatch}, {data}) {
    try {
      const response = await dispatch('api/post', { url: `/auth/sign_in`, params: data, mode: 'normal' }, {root: true})
      await dispatch('setLoginState', response)
      return Promise.resolve(response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  logout ({commit}) {
    utilLogout()
    commit('unsetAuth')
  },

  setLoginState ({commit}, response) {
    commit('setAccessToken', response.headers['access-token'])
    commit('setClient', response.headers['client'])
    commit('setUid', response.headers['uid'])
    commit('setUserName', response.data.data.name)
  }
}
