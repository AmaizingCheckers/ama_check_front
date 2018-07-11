export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token)
}

export const setClient = (client) => {
  localStorage.setItem('client', client)
}

export const setUid = (uid) => {
  localStorage.setItem('uid', uid)
}

export const setUserName = (userName) => {
  localStorage.setItem('userName', userName)
}

export const logout = () => {
  unsetStorageAll()
}

export const unsetStorageAll = () => {
  localStorage.clear()
  sessionStorage.clear()
}

export const getAccessToken = () => {
  return localStorage.accessToken
}

export const getClient = () => {
  return localStorage.client
}

export const getUid = () => {
  return localStorage.uid
}

export const getUserName = () => {
  return localStorage.userName
}
