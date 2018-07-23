export const apiMode = {
  fetch: 'fetch',
  normal: 'normal'
}

export const actions = {
  get ({ commit, state }, { url, params, mode = apiMode.fetch }) {
    return (mode === apiMode.fetch) ? this.$axios.$get(url, {params}) : this.$axios.get(url, {params})
  },

  post ({ commit, state }, { url, params, mode = apiMode.fetch }) {
    return (mode === apiMode.fetch) ? this.$axios.$post(url, params) : this.$axios.post(url, params)
  },

  patch ({ commit, state }, { url, params, mode = apiMode.fetch }) {
    return (mode === apiMode.fetch) ? this.$axios.$patch(url, params) : this.$axios.patch(url, params)
  },

  put ({ commit, state }, { url, params, mode = apiMode.fetch }) {
    return (mode === apiMode.fetch) ? this.$axios.$put(url, params) : this.$axios.put(url, params)
  },

  delete ({ commit, state }, { url, params, mode = apiMode.fetch }) {
    return (mode === apiMode.fetch) ? this.$axios.$delete(url, params) : this.$axios.delete(url, params)
  }
}
